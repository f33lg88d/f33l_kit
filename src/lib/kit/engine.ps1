# F33L Kit Engine — generic installer. Reads kit.json next to this file.
# Does not download vendor drivers from guessed URLs.
param(
  [switch]$DryRun,
  [switch]$NoReboot
)

$ErrorActionPreference = "Continue"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

function Write-Log {
  param([string]$Message, [string]$Level = "INFO")
  $stamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
  $line = "[$stamp] [$Level] $Message"
  if ($script:LogFile) {
    Add-Content -Path $script:LogFile -Value $line -Encoding UTF8
  }
  switch ($Level) {
    "ERROR"   { Write-Host $Message -ForegroundColor Red }
    "SUCCESS" { Write-Host $Message -ForegroundColor Green }
    "WARNING" { Write-Host $Message -ForegroundColor Yellow }
    "SKIP"    { Write-Host $Message -ForegroundColor DarkGray }
    default   { Write-Host $Message }
  }
}

function Test-Admin {
  $id = [Security.Principal.WindowsIdentity]::GetCurrent()
  $p = New-Object Security.Principal.WindowsPrincipal($id)
  return $p.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

function Read-Kit {
  $path = Join-Path $Root "kit.json"
  if (-not (Test-Path $path)) {
    throw "kit.json not found next to Install.ps1"
  }
  $raw = [System.IO.File]::ReadAllText($path, [System.Text.UTF8Encoding]::new($false))
  return $raw | ConvertFrom-Json
}

function Ensure-Dir([string]$Path) {
  if (-not (Test-Path $Path)) {
    New-Item -ItemType Directory -Path $Path -Force | Out-Null
  }
}

function Get-Winget {
  $cmd = Get-Command winget -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }
  $found = Get-ChildItem "$env:ProgramFiles\WindowsApps\Microsoft.DesktopAppInstaller*_x64*\winget.exe" -ErrorAction SilentlyContinue |
    Select-Object -First 1
  if ($found) { return $found.FullName }
  return $null
}

function Test-Online {
  try {
    $r = Invoke-WebRequest -Uri "https://www.msftconnecttest.com/connecttest.txt" -UseBasicParsing -TimeoutSec 8
    return ($r.StatusCode -eq 200)
  } catch {
    return $false
  }
}

function Expand-Dest([string]$Value, $Kit) {
  if ($Value -eq "VPN_WORKDIR") {
    $exe = [string]$Kit.vpn.exe
    return Split-Path -Parent $exe
  }
  return [Environment]::ExpandEnvironmentVariables($Value)
}

function Find-DropIn([string]$Dir, [string]$Pattern) {
  if (-not (Test-Path $Dir)) { return $null }
  $hits = @(Get-ChildItem -Path $Dir -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like $Pattern })
  if ($hits.Count -gt 0) { return $hits[0] }
  return $null
}

$script:Ok = New-Object System.Collections.Generic.List[string]
$script:Skip = New-Object System.Collections.Generic.List[string]
$script:Fail = New-Object System.Collections.Generic.List[string]

function Add-Ok([string]$Name) { $script:Ok.Add($Name) | Out-Null; Write-Log $Name "SUCCESS" }
function Add-Skip([string]$Name) { $script:Skip.Add($Name) | Out-Null; Write-Log $Name "SKIP" }
function Add-Fail([string]$Name) { $script:Fail.Add($Name) | Out-Null; Write-Log $Name "ERROR" }

if (-not (Test-Admin)) {
  Write-Host "Need Administrator. Run Install.bat." -ForegroundColor Red
  Read-Host "Enter"
  exit 1
}

$Kit = Read-Kit
$Logs = Join-Path $Root "logs"
$Drivers = Join-Path $Root "drivers"
$Installers = Join-Path $Root "installers"
$Configs = Join-Path $Root "configs"
Ensure-Dir $Logs
Ensure-Dir $Drivers
Ensure-Dir $Installers
Ensure-Dir $Configs
$script:LogFile = Join-Path $Logs ("install_{0:yyyy-MM-dd_HH-mm-ss}.log" -f (Get-Date))

Write-Log "========================================"
Write-Log ("F33L Kit  {0}" -f $Kit.name)
if ($DryRun) { Write-Log "DRY RUN — nothing will be installed" "WARNING" }
Write-Log "========================================"

# --- VPN ---
if ($Kit.vpn.enabled) {
  Write-Log "[1] VPN"
  $vpnExe = [string]$Kit.vpn.exe
  if (Test-Path $vpnExe) {
    if ($Kit.vpn.desktopShortcut) {
      $lnk = Join-Path $env:USERPROFILE "Desktop\v2rayN.lnk"
      if (-not $DryRun) {
        $sh = New-Object -ComObject WScript.Shell
        $sc = $sh.CreateShortcut($lnk)
        $sc.TargetPath = $vpnExe
        $sc.WorkingDirectory = Split-Path -Parent $vpnExe
        $sc.Save()
      }
      Write-Log "Shortcut v2rayN.lnk"
    }
    if (-not $DryRun) {
      $running = Get-Process -Name "v2rayN" -ErrorAction SilentlyContinue
      if (-not $running) {
        Start-Process -FilePath $vpnExe -WorkingDirectory (Split-Path -Parent $vpnExe)
      }
    }
    $wait = 20
    if ($Kit.vpn.waitSeconds) { $wait = [int]$Kit.vpn.waitSeconds }
    Write-Log ("Waiting for tunnel {0}s..." -f $wait)
    if (-not $DryRun) { Start-Sleep -Seconds $wait }
    Add-Ok "v2rayN started"
  } else {
    Add-Skip ("v2rayN missing: {0}" -f $vpnExe)
  }
} else {
  Write-Log "[1] VPN skipped by kit.json"
}

# --- Network ---
Write-Log "[2] Network"
$online = $false
if ($DryRun) {
  $online = $true
} else {
  $online = Test-Online
  if (-not $online) {
    Write-Log "No network, extra 15s..." "WARNING"
    Start-Sleep -Seconds 15
    $online = Test-Online
  }
}
if ($online) { Add-Ok "Network OK" } else { Add-Skip "Network still down — winget may fail" }

# --- winget ---
Write-Log "[3] winget packages"
$winget = Get-Winget
if (-not $winget) {
  Add-Fail "winget not found. Install 'App Installer' from Microsoft Store."
} else {
  Write-Log ("winget: {0}" -f $winget)
  if (-not $DryRun) {
    & $winget source update --disable-interactivity 2>$null | Out-Null
  }
  foreach ($pkg in @($Kit.packages)) {
    if ($null -eq $pkg) { continue }
    $id = [string]$pkg.id
    $name = [string]$pkg.name
    Write-Log ("Install {0}  ({1})" -f $name, $id)
    if ($DryRun) { Add-Ok ("DRY {0}" -f $name); continue }
    $text = & $winget install --id $id -e --silent --accept-package-agreements --accept-source-agreements --disable-interactivity 2>&1 | Out-String
    $code = $LASTEXITCODE
    if ($code -eq 0 -or $text -match "already installed|No available upgrade") {
      Add-Ok $name
    } else {
      Add-Fail ("{0}  exit {1}" -f $name, $code)
    }
  }
}

# --- drop-in ---
Write-Log "[4] Drop-in files"
foreach ($item in @($Kit.dropins)) {
  if ($null -eq $item) { continue }
  $name = [string]$item.name
  $rel = [string]$item.dir
  $pattern = [string]$item.match
  $folder = Join-Path $Root $rel
  $file = Find-DropIn $folder $pattern
  if ($null -eq $file) {
    $page = [string]$item.page
    Add-Skip ("{0} — put installer matching '{1}' into {2}  ({3})" -f $name, $pattern, $rel, $page)
    continue
  }
  Write-Log ("Found {0}: {1}" -f $name, $file.Name)
  if ($DryRun) { Add-Ok ("DRY {0}" -f $name); continue }
  $args = @()
  if ($item.args) { $args = @([string]$item.args) }
  try {
    if ($file.Extension -eq ".msi") {
      $msiArgs = @("/i", $file.FullName, "/qn", "/norestart")
      $p = Start-Process -FilePath "msiexec.exe" -ArgumentList $msiArgs -Wait -PassThru
    } elseif ($args.Count -gt 0) {
      $p = Start-Process -FilePath $file.FullName -ArgumentList $args -Wait -PassThru
    } else {
      Write-Log ("{0}: no silent flags — interactive window" -f $name) "WARNING"
      $p = Start-Process -FilePath $file.FullName -Wait -PassThru
    }
    if ($p.ExitCode -eq 0 -or $p.ExitCode -eq 3010) {
      Add-Ok $name
    } else {
      Add-Fail ("{0} exit {1}" -f $name, $p.ExitCode)
    }
  } catch {
    Add-Fail ("{0}: {1}" -f $name, $_.Exception.Message)
  }
}

# --- Windows Update leftover drivers ---
if ($Kit.windowsUpdateDrivers -and -not $DryRun) {
  Write-Log "[5] Windows Update driver scan (best-effort)"
  try {
    UsoClient StartScan 2>$null | Out-Null
    Add-Ok "Windows Update scan started"
  } catch {
    Add-Skip "Could not start Windows Update scan"
  }
}

# --- configs ---
Write-Log "[6] Configs"
foreach ($cfg in @($Kit.configs)) {
  if ($null -eq $cfg) { continue }
  $name = [string]$cfg.name
  $from = Join-Path $Root ([string]$cfg.from)
  $to = Expand-Dest ([string]$cfg.to) $Kit
  if (-not (Test-Path $from)) {
    Add-Skip ("{0} missing {1}" -f $name, $cfg.from)
    continue
  }
  if ($DryRun) { Add-Ok ("DRY config {0}" -f $name); continue }
  Ensure-Dir (Split-Path -Parent $to)
  if (Test-Path $from -PathType Container) {
    Ensure-Dir $to
    Copy-Item -Path (Join-Path $from "*") -Destination $to -Recurse -Force
  } else {
    Copy-Item -Path $from -Destination $to -Force
  }
  Add-Ok ("config {0}" -f $name)
}

# --- tweaks ---
if ($Kit.tweaks) {
  Write-Log "[7] Tweaks"
  if (-not $DryRun) {
    New-Item -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Force | Out-Null
    New-Item -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" -Force | Out-Null
    Set-ItemProperty "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "HideFileExt" -Value 0 -Type DWord -Force
    Set-ItemProperty "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "Hidden" -Value 1 -Type DWord -Force
    Set-ItemProperty "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" -Name "BingSearchEnabled" -Value 0 -Type DWord -Force
    Set-ItemProperty "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "Start_IrisRecommendations" -Value 0 -Type DWord -Force
  }
  Add-Ok "Explorer tweaks"
}

# --- summary ---
Write-Log "========================================"
Write-Log ("OK {0}   SKIP {1}   FAIL {2}" -f $script:Ok.Count, $script:Skip.Count, $script:Fail.Count)
Write-Log ("Log: {0}" -f $script:LogFile)
if ($script:Skip.Count -gt 0) {
  Write-Log "Still needed:" "WARNING"
  foreach ($s in $script:Skip) { Write-Log ("  - {0}" -f $s) "WARNING" }
}

$wantReboot = $false
if ($Kit.reboot -and -not $NoReboot -and -not $DryRun) { $wantReboot = $true }

if ($wantReboot) {
  Write-Host ""
  $ans = Read-Host "Reboot now?  Y / N"
  if ($ans -match "^[YyДд]") {
    Restart-Computer
  }
} else {
  Write-Host ""
  Read-Host "Enter to close"
}
