import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as FolderOpen, c as Check, i as RotateCcw, l as Cable, n as Terminal, o as Download, r as Shield, s as Copy, t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
import { t as require_lib } from "../_libs/jszip+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DS4q-snv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var badgeVariants = cva("inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-xs uppercase tracking-wide", {
	variants: { tone: {
		sage: "bg-sage/15 text-sage",
		warn: "bg-warn/15 text-warn",
		mute: "bg-elevated text-muted",
		paper: "bg-accent/12 text-accent"
	} },
	defaultVariants: { tone: "mute" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color] duration-[var(--motion-quick,150ms)] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			outline: "border border-border bg-transparent text-fg hover:bg-elevated",
			ghost: "text-muted hover:bg-elevated hover:text-fg",
			sage: "bg-sage text-sage-fg hover:opacity-90"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-md px-5 text-base",
			icon: "h-11 w-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	className: cn(buttonVariants({
		variant,
		size
	}), className),
	...props
}));
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	ref,
	className: cn("h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm text-fg outline-none transition-colors placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring", className),
	...props
}));
Input.displayName = "Input";
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-border bg-elevated transition-colors data-[state=checked]:border-sage data-[state=checked]:bg-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block h-5 w-5 translate-x-0.5 rounded-full bg-fg shadow-sm transition-transform data-[state=checked]:translate-x-5 data-[state=checked]:bg-sage-fg" })
	});
}
var CATEGORIES = [
	{
		id: "system",
		label: "Система"
	},
	{
		id: "drivers",
		label: "Драйверы"
	},
	{
		id: "browsers",
		label: "Браузеры"
	},
	{
		id: "comms",
		label: "Связь"
	},
	{
		id: "media",
		label: "Медиа"
	},
	{
		id: "create",
		label: "Работа"
	},
	{
		id: "tools",
		label: "Утилиты"
	},
	{
		id: "games",
		label: "Игры"
	},
	{
		id: "vendor",
		label: "Только файлом"
	}
];
var DEFAULT_MACHINE = {
	name: "F33LG88D",
	vpnEnabled: true,
	vpnExe: "G:\\VPN\\v2rayN-windows-64\\v2rayN.exe",
	vpnWait: 25,
	desktopShortcut: true,
	reboot: false,
	tweaks: true,
	windowsUpdateDrivers: true
};
var CATALOG = [
	{
		id: "vcredist",
		name: "Visual C++ Redistributable",
		blurb: "Нужен почти всему. Ставится первым.",
		category: "system",
		source: "winget",
		wingetId: "Microsoft.VCRedist.2015+.x64",
		defaultOn: true
	},
	{
		id: "dotnet8",
		name: ".NET 8 Desktop Runtime",
		blurb: "FanControl и часть утилит без него не стартуют.",
		category: "system",
		source: "winget",
		wingetId: "Microsoft.DotNet.DesktopRuntime.8",
		defaultOn: true
	},
	{
		id: "temurin",
		name: "Temurin JRE 21",
		blurb: "Вместо мёртвого Oracle JRE — актуальный Adoptium.",
		category: "system",
		source: "winget",
		wingetId: "EclipseAdoptium.Temurin.21.JRE",
		defaultOn: true
	},
	{
		id: "7zip",
		name: "7-Zip",
		blurb: "Архивы без пробного срока WinRAR.",
		category: "system",
		source: "winget",
		wingetId: "7zip.7zip",
		defaultOn: true
	},
	{
		id: "winrar",
		name: "WinRAR",
		blurb: "Если привычка важнее лицензии.",
		category: "system",
		source: "winget",
		wingetId: "RARLab.WinRAR",
		defaultOn: true
	},
	{
		id: "amd-gpu",
		name: "AMD Adrenalin — RX 6800",
		blurb: "AMD режет прямые ссылки. Скачай установщик с сайта и положи в drivers.",
		category: "drivers",
		source: "dropin",
		dir: "drivers",
		match: "*Adrenalin*.exe",
		args: "-INSTALL -SILENT",
		page: "https://www.amd.com/en/support/download/drivers.html",
		defaultOn: true,
		note: "Официальный сайт AMD → Graphics → скачать Adrenalin. Не зеркала."
	},
	{
		id: "amd-chipset",
		name: "AMD Chipset",
		blurb: "Чипсет с amd.com, не из случайного ZIP.",
		category: "drivers",
		source: "dropin",
		dir: "drivers",
		match: "*Chipset*.exe",
		args: "/S",
		page: "https://www.amd.com/en/support/download/drivers.html",
		defaultOn: true
	},
	{
		id: "realtek-audio",
		name: "Realtek HD Audio",
		blurb: "С страницы материнки Gigabyte. URL у них живёт недели.",
		category: "drivers",
		source: "dropin",
		dir: "drivers",
		match: "*Audio*.exe",
		page: "https://www.gigabyte.com/Support",
		defaultOn: true
	},
	{
		id: "realtek-lan",
		name: "Realtek LAN",
		blurb: "Тот же Support Gigabyte → LAN.",
		category: "drivers",
		source: "dropin",
		dir: "drivers",
		match: "*LAN*.exe",
		page: "https://www.gigabyte.com/Support",
		defaultOn: true
	},
	{
		id: "intel-wifi",
		name: "Intel Wi-Fi",
		blurb: "Windows Update обычно ставит сам. Файл — запасной путь.",
		category: "drivers",
		source: "windows-update",
		dir: "drivers",
		match: "*WiFi*.exe",
		page: "https://www.gigabyte.com/Support",
		defaultOn: true
	},
	{
		id: "intel-bt",
		name: "Intel Bluetooth",
		blurb: "Как Wi-Fi: сначала Windows Update, иначе файл из Support.",
		category: "drivers",
		source: "windows-update",
		dir: "drivers",
		match: "*Bluetooth*.exe",
		page: "https://www.gigabyte.com/Support",
		defaultOn: true
	},
	{
		id: "chrome",
		name: "Google Chrome",
		blurb: "Ставится через winget, без ручного exe.",
		category: "browsers",
		source: "winget",
		wingetId: "Google.Chrome",
		defaultOn: true
	},
	{
		id: "firefox",
		name: "Firefox",
		blurb: "Запасной браузер.",
		category: "browsers",
		source: "winget",
		wingetId: "Mozilla.Firefox",
		defaultOn: true
	},
	{
		id: "operagx",
		name: "Opera GX",
		blurb: "Как в исходном списке.",
		category: "browsers",
		source: "winget",
		wingetId: "Opera.OperaGX",
		defaultOn: true
	},
	{
		id: "discord",
		name: "Discord",
		blurb: "Пользовательская установка из-под UAC твоего аккаунта.",
		category: "comms",
		source: "winget",
		wingetId: "Discord.Discord",
		defaultOn: true
	},
	{
		id: "telegram",
		name: "Telegram",
		blurb: "Десктопный клиент.",
		category: "comms",
		source: "winget",
		wingetId: "Telegram.TelegramDesktop",
		defaultOn: true
	},
	{
		id: "vlc",
		name: "VLC",
		blurb: "Плеер на случай, если K-Lite не нужен.",
		category: "media",
		source: "winget",
		wingetId: "VideoLAN.VLC",
		defaultOn: true
	},
	{
		id: "klite",
		name: "K-Lite Codec Pack Full",
		blurb: "Full, не Mega: у Full стабильный пакет в winget. Ссылка на codecguide не нужна.",
		category: "media",
		source: "winget",
		wingetId: "CodecGuide.K-LiteCodecPack.Full",
		defaultOn: true
	},
	{
		id: "xnview",
		name: "XnView MP",
		blurb: "Просмотр изображений.",
		category: "media",
		source: "winget",
		wingetId: "XnSoft.XnViewMP",
		defaultOn: true
	},
	{
		id: "vscode",
		name: "VS Code",
		blurb: "Редактор.",
		category: "create",
		source: "winget",
		wingetId: "Microsoft.VisualStudioCode",
		defaultOn: true
	},
	{
		id: "git",
		name: "Git",
		blurb: "CLI git.",
		category: "create",
		source: "winget",
		wingetId: "Git.Git",
		defaultOn: true
	},
	{
		id: "python",
		name: "Python 3.12",
		blurb: "3.12 вместо застывшего 3.11 из старого скрипта.",
		category: "create",
		source: "winget",
		wingetId: "Python.Python.3.12",
		defaultOn: true
	},
	{
		id: "notepadpp",
		name: "Notepad++",
		blurb: "Быстрый текстовый.",
		category: "create",
		source: "winget",
		wingetId: "Notepad++.Notepad++",
		defaultOn: true
	},
	{
		id: "libreoffice",
		name: "LibreOffice",
		blurb: "Офис без подписки.",
		category: "create",
		source: "winget",
		wingetId: "TheDocumentFoundation.LibreOffice",
		defaultOn: true
	},
	{
		id: "acrobat",
		name: "Acrobat Reader",
		blurb: "PDF.",
		category: "create",
		source: "winget",
		wingetId: "Adobe.Acrobat.Reader.64-bit",
		defaultOn: true
	},
	{
		id: "filezilla",
		name: "FileZilla",
		blurb: "FTP. Id: FileZilla.FileZilla, не .Client.",
		category: "create",
		source: "winget",
		wingetId: "FileZilla.FileZilla",
		defaultOn: true
	},
	{
		id: "putty",
		name: "PuTTY",
		blurb: "SSH на крайний случай.",
		category: "create",
		source: "winget",
		wingetId: "PuTTY.PuTTY",
		defaultOn: true
	},
	{
		id: "winscp",
		name: "WinSCP",
		blurb: "SFTP с окнами.",
		category: "create",
		source: "winget",
		wingetId: "WinSCP.WinSCP",
		defaultOn: true
	},
	{
		id: "mobaxterm",
		name: "MobaXterm",
		blurb: "Есть в winget. Скачивать ZIP с mobatek.net скрипту незачем.",
		category: "create",
		source: "winget",
		wingetId: "Mobatek.MobaXterm",
		defaultOn: true
	},
	{
		id: "ollama",
		name: "Ollama",
		blurb: "Локальные модели.",
		category: "create",
		source: "winget",
		wingetId: "Ollama.Ollama",
		defaultOn: true
	},
	{
		id: "fancontrol",
		name: "FanControl",
		blurb: "Rem0o.FanControl в winget. GitHub ZIP больше не нужен.",
		category: "tools",
		source: "winget",
		wingetId: "Rem0o.FanControl",
		defaultOn: true
	},
	{
		id: "proxifier",
		name: "Proxifier",
		blurb: "VentoByte.Proxifier. Лицензию кладёшь сам.",
		category: "tools",
		source: "winget",
		wingetId: "VentoByte.Proxifier",
		defaultOn: true
	},
	{
		id: "everything",
		name: "Everything",
		blurb: "Мгновенный поиск файлов.",
		category: "tools",
		source: "winget",
		wingetId: "voidtools.Everything",
		defaultOn: true
	},
	{
		id: "greenshot",
		name: "Greenshot",
		blurb: "Скриншоты.",
		category: "tools",
		source: "winget",
		wingetId: "Greenshot.Greenshot",
		defaultOn: true
	},
	{
		id: "revo",
		name: "Revo Uninstaller",
		blurb: "Правильный id: RevoUninstaller.RevoUninstaller.",
		category: "tools",
		source: "winget",
		wingetId: "RevoUninstaller.RevoUninstaller",
		defaultOn: true
	},
	{
		id: "ccleaner",
		name: "CCleaner",
		blurb: "Piriform.CCleaner. Можно выключить, если не доверяешь.",
		category: "tools",
		source: "winget",
		wingetId: "Piriform.CCleaner",
		defaultOn: true
	},
	{
		id: "crystal",
		name: "CrystalDiskInfo",
		blurb: "SMART дисков.",
		category: "tools",
		source: "winget",
		wingetId: "CrystalDewWorld.CrystalDiskInfo",
		defaultOn: true
	},
	{
		id: "hwmonitor",
		name: "HWMonitor",
		blurb: "Температуры.",
		category: "tools",
		source: "winget",
		wingetId: "CPUID.HWMonitor",
		defaultOn: true
	},
	{
		id: "keepassxc",
		name: "KeePassXC",
		blurb: "KeePassX мёртв. Старый id KeePassX.KeePassX ставить нельзя.",
		category: "tools",
		source: "winget",
		wingetId: "KeePassXCTeam.KeePassXC",
		defaultOn: true
	},
	{
		id: "qbittorrent",
		name: "qBittorrent",
		blurb: "Торренты.",
		category: "tools",
		source: "winget",
		wingetId: "qBittorrent.qBittorrent",
		defaultOn: true
	},
	{
		id: "steam",
		name: "Steam",
		blurb: "Магазин Valve.",
		category: "games",
		source: "winget",
		wingetId: "Valve.Steam",
		defaultOn: true
	},
	{
		id: "epic",
		name: "Epic Games Launcher",
		blurb: "Epic.",
		category: "games",
		source: "winget",
		wingetId: "EpicGames.EpicGamesLauncher",
		defaultOn: true
	},
	{
		id: "rgb-fusion",
		name: "RGB Fusion",
		blurb: "Утилита Gigabyte. В winget нет — только файл с Support.",
		category: "vendor",
		source: "dropin",
		dir: "installers",
		match: "*RGB*Fusion*.exe",
		page: "https://www.gigabyte.com/Support",
		defaultOn: true
	},
	{
		id: "acronis",
		name: "Acronis Disk Director",
		blurb: "Платный продукт. Прямой exe с acronis.com скрипт не угадает.",
		category: "vendor",
		source: "dropin",
		dir: "installers",
		match: "*Acronis*.exe",
		page: "https://www.acronis.com",
		defaultOn: true
	},
	{
		id: "monect",
		name: "PC Remote / Monect",
		blurb: "Приёмник с monect.com.",
		category: "vendor",
		source: "dropin",
		dir: "installers",
		match: "*Monect*.exe",
		page: "https://www.monect.com",
		defaultOn: true
	},
	{
		id: "focusrite",
		name: "Focusrite Control",
		blurb: "CDN-ссылки с версией в имени протухают. Бери с focusrite.com.",
		category: "vendor",
		source: "dropin",
		dir: "installers",
		match: "*Focusrite*.exe",
		page: "https://focusrite.com/downloads",
		defaultOn: true
	},
	{
		id: "assistent",
		name: "Ассистент",
		blurb: "Только установщик с assistent.ru.",
		category: "vendor",
		source: "dropin",
		dir: "installers",
		match: "*Assistent*.exe",
		page: "https://assistent.ru",
		defaultOn: true
	}
];
var CONFIGS = [
	{
		id: "fancontrol-config",
		name: "FanControl",
		from: "configs/FanControl/FanControl.config",
		to: "%APPDATA%\\FanControl\\FanControl.config",
		hint: "Экспортируй свой профиль кривых и положи файл сюда.",
		defaultOn: true
	},
	{
		id: "amd-profile",
		name: "AMD Adrenalin profile",
		from: "configs/AMD_Adrenalin/my_rx6800_profile.zip",
		to: "%USERPROFILE%\\Documents\\AMD\\Profiles\\my_rx6800_profile.zip",
		hint: "ZIP профиля из Adrenalin. Скрипт только копирует, не импортирует в GPU.",
		defaultOn: true
	},
	{
		id: "v2rayn-config",
		name: "v2rayN",
		from: "configs/v2rayN/f33lg88d",
		to: "VPN_WORKDIR",
		hint: "Конфиг/папка подписки. Копируется в каталог v2rayN, не в корень G:\\.",
		defaultOn: true
	}
];
function defaultEnabled() {
	const map = {};
	for (const item of CATALOG) map[item.id] = item.defaultOn;
	return map;
}
function defaultConfigs() {
	const map = {};
	for (const item of CONFIGS) map[item.id] = item.defaultOn;
	return map;
}
function sourceLabel(source) {
	if (source === "winget") return "winget";
	if (source === "windows-update") return "Windows Update";
	return "файл";
}
var engine_default = "# F33L Kit Engine — generic installer. Reads kit.json next to this file.\n# Does not download vendor drivers from guessed URLs.\nparam(\n  [switch]$DryRun,\n  [switch]$NoReboot\n)\n\n$ErrorActionPreference = \"Continue\"\n$Root = Split-Path -Parent $MyInvocation.MyCommand.Path\nSet-Location $Root\n\nfunction Write-Log {\n  param([string]$Message, [string]$Level = \"INFO\")\n  $stamp = Get-Date -Format \"yyyy-MM-dd HH:mm:ss\"\n  $line = \"[$stamp] [$Level] $Message\"\n  if ($script:LogFile) {\n    Add-Content -Path $script:LogFile -Value $line -Encoding UTF8\n  }\n  switch ($Level) {\n    \"ERROR\"   { Write-Host $Message -ForegroundColor Red }\n    \"SUCCESS\" { Write-Host $Message -ForegroundColor Green }\n    \"WARNING\" { Write-Host $Message -ForegroundColor Yellow }\n    \"SKIP\"    { Write-Host $Message -ForegroundColor DarkGray }\n    default   { Write-Host $Message }\n  }\n}\n\nfunction Test-Admin {\n  $id = [Security.Principal.WindowsIdentity]::GetCurrent()\n  $p = New-Object Security.Principal.WindowsPrincipal($id)\n  return $p.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)\n}\n\nfunction Read-Kit {\n  $path = Join-Path $Root \"kit.json\"\n  if (-not (Test-Path $path)) {\n    throw \"kit.json not found next to Install.ps1\"\n  }\n  $raw = [System.IO.File]::ReadAllText($path, [System.Text.UTF8Encoding]::new($false))\n  return $raw | ConvertFrom-Json\n}\n\nfunction Ensure-Dir([string]$Path) {\n  if (-not (Test-Path $Path)) {\n    New-Item -ItemType Directory -Path $Path -Force | Out-Null\n  }\n}\n\nfunction Get-Winget {\n  $cmd = Get-Command winget -ErrorAction SilentlyContinue\n  if ($cmd) { return $cmd.Source }\n  $found = Get-ChildItem \"$env:ProgramFiles\\WindowsApps\\Microsoft.DesktopAppInstaller*_x64*\\winget.exe\" -ErrorAction SilentlyContinue |\n    Select-Object -First 1\n  if ($found) { return $found.FullName }\n  return $null\n}\n\nfunction Test-Online {\n  try {\n    $r = Invoke-WebRequest -Uri \"https://www.msftconnecttest.com/connecttest.txt\" -UseBasicParsing -TimeoutSec 8\n    return ($r.StatusCode -eq 200)\n  } catch {\n    return $false\n  }\n}\n\nfunction Expand-Dest([string]$Value, $Kit) {\n  if ($Value -eq \"VPN_WORKDIR\") {\n    $exe = [string]$Kit.vpn.exe\n    return Split-Path -Parent $exe\n  }\n  return [Environment]::ExpandEnvironmentVariables($Value)\n}\n\nfunction Find-DropIn([string]$Dir, [string]$Pattern) {\n  if (-not (Test-Path $Dir)) { return $null }\n  $hits = @(Get-ChildItem -Path $Dir -Recurse -File -ErrorAction SilentlyContinue |\n    Where-Object { $_.Name -like $Pattern })\n  if ($hits.Count -gt 0) { return $hits[0] }\n  return $null\n}\n\n$script:Ok = New-Object System.Collections.Generic.List[string]\n$script:Skip = New-Object System.Collections.Generic.List[string]\n$script:Fail = New-Object System.Collections.Generic.List[string]\n\nfunction Add-Ok([string]$Name) { $script:Ok.Add($Name) | Out-Null; Write-Log $Name \"SUCCESS\" }\nfunction Add-Skip([string]$Name) { $script:Skip.Add($Name) | Out-Null; Write-Log $Name \"SKIP\" }\nfunction Add-Fail([string]$Name) { $script:Fail.Add($Name) | Out-Null; Write-Log $Name \"ERROR\" }\n\nif (-not (Test-Admin)) {\n  Write-Host \"Need Administrator. Run Install.bat.\" -ForegroundColor Red\n  Read-Host \"Enter\"\n  exit 1\n}\n\n$Kit = Read-Kit\n$Logs = Join-Path $Root \"logs\"\n$Drivers = Join-Path $Root \"drivers\"\n$Installers = Join-Path $Root \"installers\"\n$Configs = Join-Path $Root \"configs\"\nEnsure-Dir $Logs\nEnsure-Dir $Drivers\nEnsure-Dir $Installers\nEnsure-Dir $Configs\n$script:LogFile = Join-Path $Logs (\"install_{0:yyyy-MM-dd_HH-mm-ss}.log\" -f (Get-Date))\n\nWrite-Log \"========================================\"\nWrite-Log (\"F33L Kit  {0}\" -f $Kit.name)\nif ($DryRun) { Write-Log \"DRY RUN — nothing will be installed\" \"WARNING\" }\nWrite-Log \"========================================\"\n\n# --- VPN ---\nif ($Kit.vpn.enabled) {\n  Write-Log \"[1] VPN\"\n  $vpnExe = [string]$Kit.vpn.exe\n  if (Test-Path $vpnExe) {\n    if ($Kit.vpn.desktopShortcut) {\n      $lnk = Join-Path $env:USERPROFILE \"Desktop\\v2rayN.lnk\"\n      if (-not $DryRun) {\n        $sh = New-Object -ComObject WScript.Shell\n        $sc = $sh.CreateShortcut($lnk)\n        $sc.TargetPath = $vpnExe\n        $sc.WorkingDirectory = Split-Path -Parent $vpnExe\n        $sc.Save()\n      }\n      Write-Log \"Shortcut v2rayN.lnk\"\n    }\n    if (-not $DryRun) {\n      $running = Get-Process -Name \"v2rayN\" -ErrorAction SilentlyContinue\n      if (-not $running) {\n        Start-Process -FilePath $vpnExe -WorkingDirectory (Split-Path -Parent $vpnExe)\n      }\n    }\n    $wait = 20\n    if ($Kit.vpn.waitSeconds) { $wait = [int]$Kit.vpn.waitSeconds }\n    Write-Log (\"Waiting for tunnel {0}s...\" -f $wait)\n    if (-not $DryRun) { Start-Sleep -Seconds $wait }\n    Add-Ok \"v2rayN started\"\n  } else {\n    Add-Skip (\"v2rayN missing: {0}\" -f $vpnExe)\n  }\n} else {\n  Write-Log \"[1] VPN skipped by kit.json\"\n}\n\n# --- Network ---\nWrite-Log \"[2] Network\"\n$online = $false\nif ($DryRun) {\n  $online = $true\n} else {\n  $online = Test-Online\n  if (-not $online) {\n    Write-Log \"No network, extra 15s...\" \"WARNING\"\n    Start-Sleep -Seconds 15\n    $online = Test-Online\n  }\n}\nif ($online) { Add-Ok \"Network OK\" } else { Add-Skip \"Network still down — winget may fail\" }\n\n# --- winget ---\nWrite-Log \"[3] winget packages\"\n$winget = Get-Winget\nif (-not $winget) {\n  Add-Fail \"winget not found. Install 'App Installer' from Microsoft Store.\"\n} else {\n  Write-Log (\"winget: {0}\" -f $winget)\n  if (-not $DryRun) {\n    & $winget source update --disable-interactivity 2>$null | Out-Null\n  }\n  foreach ($pkg in @($Kit.packages)) {\n    if ($null -eq $pkg) { continue }\n    $id = [string]$pkg.id\n    $name = [string]$pkg.name\n    Write-Log (\"Install {0}  ({1})\" -f $name, $id)\n    if ($DryRun) { Add-Ok (\"DRY {0}\" -f $name); continue }\n    $text = & $winget install --id $id -e --silent --accept-package-agreements --accept-source-agreements --disable-interactivity 2>&1 | Out-String\n    $code = $LASTEXITCODE\n    if ($code -eq 0 -or $text -match \"already installed|No available upgrade\") {\n      Add-Ok $name\n    } else {\n      Add-Fail (\"{0}  exit {1}\" -f $name, $code)\n    }\n  }\n}\n\n# --- drop-in ---\nWrite-Log \"[4] Drop-in files\"\nforeach ($item in @($Kit.dropins)) {\n  if ($null -eq $item) { continue }\n  $name = [string]$item.name\n  $rel = [string]$item.dir\n  $pattern = [string]$item.match\n  $folder = Join-Path $Root $rel\n  $file = Find-DropIn $folder $pattern\n  if ($null -eq $file) {\n    $page = [string]$item.page\n    Add-Skip (\"{0} — put installer matching '{1}' into {2}  ({3})\" -f $name, $pattern, $rel, $page)\n    continue\n  }\n  Write-Log (\"Found {0}: {1}\" -f $name, $file.Name)\n  if ($DryRun) { Add-Ok (\"DRY {0}\" -f $name); continue }\n  $args = @()\n  if ($item.args) { $args = @([string]$item.args) }\n  try {\n    if ($file.Extension -eq \".msi\") {\n      $msiArgs = @(\"/i\", $file.FullName, \"/qn\", \"/norestart\")\n      $p = Start-Process -FilePath \"msiexec.exe\" -ArgumentList $msiArgs -Wait -PassThru\n    } elseif ($args.Count -gt 0) {\n      $p = Start-Process -FilePath $file.FullName -ArgumentList $args -Wait -PassThru\n    } else {\n      Write-Log (\"{0}: no silent flags — interactive window\" -f $name) \"WARNING\"\n      $p = Start-Process -FilePath $file.FullName -Wait -PassThru\n    }\n    if ($p.ExitCode -eq 0 -or $p.ExitCode -eq 3010) {\n      Add-Ok $name\n    } else {\n      Add-Fail (\"{0} exit {1}\" -f $name, $p.ExitCode)\n    }\n  } catch {\n    Add-Fail (\"{0}: {1}\" -f $name, $_.Exception.Message)\n  }\n}\n\n# --- Windows Update leftover drivers ---\nif ($Kit.windowsUpdateDrivers -and -not $DryRun) {\n  Write-Log \"[5] Windows Update driver scan (best-effort)\"\n  try {\n    UsoClient StartScan 2>$null | Out-Null\n    Add-Ok \"Windows Update scan started\"\n  } catch {\n    Add-Skip \"Could not start Windows Update scan\"\n  }\n}\n\n# --- configs ---\nWrite-Log \"[6] Configs\"\nforeach ($cfg in @($Kit.configs)) {\n  if ($null -eq $cfg) { continue }\n  $name = [string]$cfg.name\n  $from = Join-Path $Root ([string]$cfg.from)\n  $to = Expand-Dest ([string]$cfg.to) $Kit\n  if (-not (Test-Path $from)) {\n    Add-Skip (\"{0} missing {1}\" -f $name, $cfg.from)\n    continue\n  }\n  if ($DryRun) { Add-Ok (\"DRY config {0}\" -f $name); continue }\n  Ensure-Dir (Split-Path -Parent $to)\n  if (Test-Path $from -PathType Container) {\n    Ensure-Dir $to\n    Copy-Item -Path (Join-Path $from \"*\") -Destination $to -Recurse -Force\n  } else {\n    Copy-Item -Path $from -Destination $to -Force\n  }\n  Add-Ok (\"config {0}\" -f $name)\n}\n\n# --- tweaks ---\nif ($Kit.tweaks) {\n  Write-Log \"[7] Tweaks\"\n  if (-not $DryRun) {\n    New-Item -Path \"HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" -Force | Out-Null\n    New-Item -Path \"HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Search\" -Force | Out-Null\n    Set-ItemProperty \"HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" -Name \"HideFileExt\" -Value 0 -Type DWord -Force\n    Set-ItemProperty \"HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" -Name \"Hidden\" -Value 1 -Type DWord -Force\n    Set-ItemProperty \"HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Search\" -Name \"BingSearchEnabled\" -Value 0 -Type DWord -Force\n    Set-ItemProperty \"HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\" -Name \"Start_IrisRecommendations\" -Value 0 -Type DWord -Force\n  }\n  Add-Ok \"Explorer tweaks\"\n}\n\n# --- summary ---\nWrite-Log \"========================================\"\nWrite-Log (\"OK {0}   SKIP {1}   FAIL {2}\" -f $script:Ok.Count, $script:Skip.Count, $script:Fail.Count)\nWrite-Log (\"Log: {0}\" -f $script:LogFile)\nif ($script:Skip.Count -gt 0) {\n  Write-Log \"Still needed:\" \"WARNING\"\n  foreach ($s in $script:Skip) { Write-Log (\"  - {0}\" -f $s) \"WARNING\" }\n}\n\n$wantReboot = $false\nif ($Kit.reboot -and -not $NoReboot -and -not $DryRun) { $wantReboot = $true }\n\nif ($wantReboot) {\n  Write-Host \"\"\n  $ans = Read-Host \"Reboot now?  Y / N\"\n  if ($ans -match \"^[YyДд]\") {\n    Restart-Computer\n  }\n} else {\n  Write-Host \"\"\n  Read-Host \"Enter to close\"\n}\n";
var install_default = "@echo off\nsetlocal\ncd /d \"%~dp0\"\n\nnet session >nul 2>&1\nif %errorLevel% neq 0 (\n  powershell -NoProfile -Command \"Start-Process -FilePath '%~f0' -Verb RunAs\"\n  exit /b\n)\n\npowershell -NoProfile -ExecutionPolicy Bypass -File \"%~dp0Install.ps1\" %*\nif errorlevel 1 (\n  echo.\n  pause\n)\n";
var BOM = "﻿";
function enabledItems(state) {
	return CATALOG.filter((item) => state.enabled[item.id]);
}
function enabledConfigs(state) {
	return CONFIGS.filter((item) => state.configs[item.id]);
}
function toKitJson(state) {
	const items = enabledItems(state);
	const packages = items.filter((i) => i.source === "winget" && i.wingetId).map((i) => ({
		id: i.wingetId,
		name: i.name
	}));
	const dropins = items.filter((i) => i.source === "dropin" || i.source === "windows-update").filter((i) => i.dir && i.match).map((i) => ({
		name: i.name,
		dir: i.dir,
		match: i.match,
		args: i.args,
		page: i.page
	}));
	const configs = enabledConfigs(state).map((c) => ({
		name: c.name,
		from: c.from,
		to: c.to
	}));
	return {
		name: state.machine.name || "F33L",
		version: "1.0",
		vpn: {
			enabled: state.machine.vpnEnabled,
			exe: state.machine.vpnExe,
			waitSeconds: state.machine.vpnWait,
			desktopShortcut: state.machine.desktopShortcut
		},
		reboot: state.machine.reboot,
		tweaks: state.machine.tweaks,
		windowsUpdateDrivers: state.machine.windowsUpdateDrivers,
		packages,
		dropins,
		configs
	};
}
function dropInGuide(state) {
	const items = enabledItems(state).filter((i) => i.source === "dropin" || i.source === "windows-update");
	const configs = enabledConfigs(state);
	const lines = [
		`F33L Kit — что положить руками`,
		`Сборка: ${state.machine.name}`,
		``,
		`Скрипт сам ничего не качает с сайтов AMD / Gigabyte / Acronis.`,
		`Прямые ссылки на exe живут дни и требуют браузерную сессию.`,
		`Поэтому: winget ставит то, что умеет. Остальное — файлы ниже.`,
		``,
		`1. Распакуй ZIP куда удобно. Рекомендуется:`,
		`   G:\\Post Install Script\\`,
		`2. Включи VPN (v2rayN уже должен лежать по пути из kit.json).`,
		`3. Скачай в браузере файлы из списка и положи как написано.`,
		`4. Правой кнопкой Install.bat → Запуск от имени администратора.`,
		`5. В конце скрипт напечатает SKIP — это не ошибка, а хвост списка.`,
		``,
		`=== Драйверы и программы файлом ===`,
		``
	];
	if (items.length === 0) lines.push("Ничего класть не нужно — весь комплект на winget.");
	else for (const item of items) {
		lines.push(`${item.name}`);
		lines.push(`  папка:   ${item.dir}\\`);
		lines.push(`  маска:   ${item.match}`);
		if (item.page) lines.push(`  откуда:  ${item.page}`);
		if (item.note) lines.push(`  заметка: ${item.note}`);
		if (item.source === "windows-update") lines.push("  если файла нет — оставим Windows Update после перезагрузки.");
		lines.push("");
	}
	lines.push("=== Конфиги ===");
	lines.push("");
	for (const cfg of configs) {
		lines.push(`${cfg.name}`);
		lines.push(`  файл: ${cfg.from}`);
		lines.push(`  куда: ${cfg.to}`);
		lines.push(`  ${cfg.hint}`);
		lines.push("");
	}
	lines.push("=== VPN ===");
	lines.push(`exe: ${state.machine.vpnExe}`);
	lines.push("Если файла нет, скрипт не падает — просто пишет SKIP и идёт дальше.");
	lines.push("v2rayN в конце не убивается: он нужен, пока качается winget.");
	lines.push("");
	lines.push("Проверка без установки:");
	lines.push("  powershell -ExecutionPolicy Bypass -File .\\Install.ps1 -DryRun");
	return lines.join("\r\n");
}
function readme(state) {
	const json = toKitJson(state);
	return [
		`F33L Kit  —  ${state.machine.name}`,
		``,
		`Это не «скачаю всё сам». Это оркестратор.`,
		``,
		`Install.bat     запуск с повышением прав`,
		`Install.ps1     движок`,
		`kit.json        твой выбор пакетов`,
		`НУЖНО ПОЛОЖИТЬ.txt   файлы, которые winget не умеет`,
		``,
		`winget пакетов: ${json.packages.length}`,
		`файлом:         ${json.dropins.length}`,
		`конфигов:       ${json.configs.length}`,
		`VPN:            ${json.vpn.enabled ? json.vpn.exe : "выключен"}`,
		`reboot:         ${json.reboot ? "спросит" : "нет"}`,
		``,
		`Положи ZIP на G:\\Post Install Script или на флешку.`,
		`Путь внутри скрипта не зашит — берётся каталог Install.ps1.`
	].join("\r\n");
}
function kitJsonText(state) {
	return JSON.stringify(toKitJson(state), null, 2);
}
async function buildKitZip(state) {
	const zip = new import_lib.default();
	const root = zip.folder("F33L-Kit");
	root.file("Install.ps1", BOM + engine_default.replace(/\n/g, "\r\n"));
	root.file("Install.bat", install_default.replace(/\n/g, "\r\n"));
	root.file("kit.json", BOM + kitJsonText(state).replace(/\n/g, "\r\n"));
	root.file("README.txt", BOM + readme(state));
	root.file("НУЖНО ПОЛОЖИТЬ.txt", BOM + dropInGuide(state));
	root.folder("drivers").file("ПОЛОЖИ_СЮДА.txt", "﻿Сюда — установщики драйверов. Имена могут быть любыми: скрипт ищет по маске из kit.json.\r\n");
	root.folder("installers").file("ПОЛОЖИ_СЮДА.txt", "﻿Сюда — RGB Fusion, Acronis, Focusrite, Ассистент, Monect.\r\n");
	root.folder("logs").file(".keep", "");
	root.folder("configs/FanControl").file("ПОЛОЖИ_СЮДА.txt", "﻿Файл FanControl.config\r\n");
	root.folder("configs/AMD_Adrenalin").file("ПОЛОЖИ_СЮДА.txt", "﻿ZIP профиля Adrenalin: my_rx6800_profile.zip\r\n");
	root.folder("configs/v2rayN").file("ПОЛОЖИ_СЮДА.txt", "﻿Конфиг или папка подписки f33lg88d\r\n");
	return zip.generateAsync({ type: "blob" });
}
async function downloadKit(state) {
	const blob = await buildKitZip(state);
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `${state.machine.name || "F33L"}-Kit.zip`;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 1500);
}
var useKitStore = create()(persist((set) => ({
	machine: DEFAULT_MACHINE,
	enabled: defaultEnabled(),
	configs: defaultConfigs(),
	setMachine: (key, value) => set((s) => ({ machine: {
		...s.machine,
		[key]: value
	} })),
	toggleItem: (id) => set((s) => ({ enabled: {
		...s.enabled,
		[id]: !s.enabled[id]
	} })),
	toggleConfig: (id) => set((s) => ({ configs: {
		...s.configs,
		[id]: !s.configs[id]
	} })),
	setAll: (on) => set(() => {
		const enabled = {};
		for (const item of CATALOG) enabled[item.id] = on;
		return { enabled };
	}),
	resetPreset: () => set({
		machine: DEFAULT_MACHINE,
		enabled: defaultEnabled(),
		configs: defaultConfigs()
	})
}), {
	name: "f33l-kit",
	skipHydration: true,
	partialize: (s) => ({
		machine: s.machine,
		enabled: s.enabled,
		configs: s.configs
	})
}));
var TABS = [
	{
		id: "why",
		label: "Почему с нуля"
	},
	{
		id: "machine",
		label: "Машина"
	},
	{
		id: "catalog",
		label: "Каталог"
	},
	{
		id: "drop",
		label: "Файлы"
	},
	{
		id: "bundle",
		label: "Комплект"
	}
];
function snapshot(store) {
	return {
		machine: store.machine,
		enabled: store.enabled,
		configs: store.configs
	};
}
function KitApp() {
	const [tab, setTab] = (0, import_react.useState)("why");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const store = useKitStore();
	(0, import_react.useEffect)(() => {
		useKitStore.persist.rehydrate();
	}, []);
	const state = snapshot(store);
	const json = (0, import_react.useMemo)(() => toKitJson(state), [
		store.machine,
		store.enabled,
		store.configs
	]);
	const wingetCount = json.packages.length;
	const dropCount = json.dropins.length;
	const cfgCount = json.configs.length;
	async function onDownload() {
		setBusy(true);
		try {
			await downloadKit(state);
			toast.success("ZIP скачан. Распакуй на G:\\Post Install Script");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Не удалось собрать ZIP");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-center",
				toastOptions: { className: "!bg-elevated !text-fg !border-border !font-sans" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 md:flex-row md:items-end md:justify-between md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-sage",
							children: "Post-install"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 text-3xl font-semibold tracking-tight sm:text-4xl",
							children: "F33L Kit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
							children: "Конструктор первой загрузки Windows. Winget ставит то, что умеет. Драйверы AMD и утилиты Gigabyte кладёшь файлом — скрипт больше не врёт, что скачает их сам."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-stretch gap-2 sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 font-mono text-xs tabular-nums text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [wingetCount, " winget"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-border",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [dropCount, " файлом"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-border",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [cfgCount, " конфиг"] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: onDownload,
							disabled: busy,
							size: "lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), busy ? "Сборка…" : "Скачать ZIP"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3 md:px-6",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab(t.id),
						className: cn("h-11 shrink-0 rounded-md px-4 text-sm transition-colors", tab === t.id ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
						children: t.label
					}, t.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10",
				children: [
					tab === "why" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyPanel, {}),
					tab === "machine" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MachinePanel, {}),
					tab === "catalog" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogPanel, {}),
					tab === "drop" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropPanel, {
						onDownload,
						busy
					}),
					tab === "bundle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BundlePanel, {
						onDownload,
						busy
					})
				]
			})
		]
	});
}
function WhyPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl border border-border bg-surface p-6 shadow-soft sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Почему старый скрипт пустой"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "Папка installers пустая не потому, что ты что-то забыл. Потому что качать exe «из воздуха» нельзя. Прошлый Install.ps1 обещал сделать это сам — и подставил мёртвые URL."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-4 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FailRow, {
							title: "Ссылки AMD и Gigabyte",
							body: "drivers.amd.com отдаёт 403 без браузерной сессии и EULA. Прямые ZIP Gigabyte живут недели, потом 404. Скрипт не браузер."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FailRow, {
							title: "/VERYSILENT на всё подряд",
							body: "Это флаги Inno Setup. Adrenalin, RGB Fusion, Acronis, Focusrite их игнорируют или зависают."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FailRow, {
							title: "ZIP → AMD_Chipset.exe",
							body: "Внутри архива другая структура. Переименовать наугад нельзя — файл не находится, шаг SKIP."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FailRow, {
							title: "Неверные winget id",
							body: "KeePassX.KeePassX мёртв, FileZilla.Client не существует, Revo.RevoUninstaller и CCleaner.CCleaner — опечатки."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FailRow, {
							title: "Жёсткий путь G:\\Post Install Script",
							body: "Если комплект на флешке — всё ломается. Новый движок берёт каталог Install.ps1."
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-medium",
					children: "Как будет на деле"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-4 space-y-3 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sage",
							children: "01"
						}), " VPN, если v2rayN уже лежит на диске."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sage",
							children: "02"
						}), " Проверка сети. Без неё winget честно падает."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sage",
							children: "03"
						}), " Около тридцати программ через winget с правильными id."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sage",
							children: "04"
						}), " Драйверы и вендор — только если файл есть в папке."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sage",
							children: "05"
						}), " Конфиги FanControl / Adrenalin / v2rayN."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sage",
							children: "06"
						}), " Отчёт OK / SKIP / FAIL. Перезагрузка не молча."] })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-elevated p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-subtle",
					children: "Правило"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-base leading-relaxed",
					children: "Скрипт не выдумывает URL. Если файла нет — SKIP и ссылка на официальную страницу, а не «успех»."
				})]
			})]
		})]
	});
}
function FailRow({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border-t border-border pt-4 first:border-t-0 first:pt-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium text-fg",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-muted",
			children: body
		})]
	});
}
function MachinePanel() {
	const { machine, setMachine, resetPreset } = useKitStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl border border-border bg-surface p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold tracking-tight",
						children: "Профиль машины"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Пресет F33LG88D: RX 6800, Gigabyte, v2rayN на G:\\. Путь комплекта в скрипт не зашивается."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: resetPreset,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Сброс"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-6 block text-xs uppercase tracking-wider text-subtle",
					children: "Имя сборки"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "mt-2",
					value: machine.name,
					onChange: (e) => setMachine("name", e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-5 block text-xs uppercase tracking-wider text-subtle",
					children: "Путь к v2rayN.exe"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "mt-2 font-mono text-xs sm:text-sm",
					value: machine.vpnExe,
					onChange: (e) => setMachine("vpnExe", e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-5 block text-xs uppercase tracking-wider text-subtle",
					children: "Ждать туннель, сек"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "mt-2 w-28",
					type: "number",
					min: 5,
					max: 120,
					value: machine.vpnWait,
					onChange: (e) => setMachine("vpnWait", Number(e.target.value) || 25)
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl border border-border bg-surface p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-medium",
				children: "Поведение"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4" }),
						title: "Поднять VPN перед winget",
						body: "Нужен, если Microsoft и GitHub режутся. Сам клиент скрипт не скачивает.",
						checked: machine.vpnEnabled,
						onChange: (v) => setMachine("vpnEnabled", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cable, { className: "h-4 w-4" }),
						title: "Ярлык v2rayN на рабочий стол",
						body: "Только если exe на месте.",
						checked: machine.desktopShortcut,
						onChange: (v) => setMachine("desktopShortcut", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "h-4 w-4" }),
						title: "Windows Update для Wi-Fi / BT",
						body: "Сканирование драйверов. Файл в drivers перекроет, если положишь.",
						checked: machine.windowsUpdateDrivers,
						onChange: (v) => setMachine("windowsUpdateDrivers", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
						title: "Твики проводника",
						body: "Показать расширения и скрытые, выключить Bing в поиске.",
						checked: machine.tweaks,
						onChange: (v) => setMachine("tweaks", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
						title: "Спросить про перезагрузку",
						body: "По умолчанию выкл. Старый скрипт ребутился сам — так больше не делаем.",
						checked: machine.reboot,
						onChange: (v) => setMachine("reboot", v)
					})
				]
			})]
		})]
	});
}
function ToggleRow({ icon, title, body, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4 border-t border-border pt-5 first:border-t-0 first:pt-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 text-muted",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: body
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange: onChange
		})]
	});
}
function CatalogPanel() {
	const { enabled, toggleItem, setAll } = useKitStore();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const visible = CATALOG.filter((item) => {
		if (filter === "winget") return item.source === "winget";
		if (filter === "file") return item.source !== "winget";
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-semibold tracking-tight",
			children: "Каталог"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Id проверены. То, чего нет в winget, помечено «файл»."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [
				[
					"all",
					"winget",
					"file"
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: filter === f ? "default" : "outline",
					onClick: () => setFilter(f),
					children: f === "all" ? "Все" : f === "winget" ? "winget" : "Файлом"
				}, f)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => setAll(true),
					children: "Все вкл"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => setAll(false),
					children: "Все выкл"
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 space-y-8",
		children: CATEGORIES.map((cat) => {
			const rows = visible.filter((i) => i.category === cat.id);
			if (rows.length === 0) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-xs uppercase tracking-widest text-subtle",
				children: cat.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 divide-y divide-border rounded-lg border border-border bg-surface",
				children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4 px-4 py-4 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						className: "mt-1",
						checked: !!enabled[item.id],
						onCheckedChange: () => toggleItem(item.id)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "min-w-0 flex-1 text-left",
						onClick: () => toggleItem(item.id),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: item.source === "winget" ? "sage" : "warn",
									children: sourceLabel(item.source)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: item.blurb
							}),
							item.wingetId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-mono text-xs text-subtle",
								children: item.wingetId
							})
						]
					})]
				}, item.id))
			})] }, cat.id);
		})
	})] });
}
function DropPanel({ onDownload, busy }) {
	const store = useKitStore();
	const state = snapshot(store);
	const { configs, toggleConfig } = store;
	const files = enabledItems(state).filter((i) => i.source !== "winget");
	const guide = dropInGuide(state);
	async function copyGuide() {
		await navigator.clipboard.writeText(guide);
		toast.success("Чеклист скопирован");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl border border-border bg-surface p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Что скачать руками"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Один раз, в браузере, уже под VPN. Потом кладёшь файлы в папки комплекта и запускаешь Install.bat."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [files.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "В этом комплекте нет drop-in — всё уйдёт в winget."
					}), files.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-t border-border pt-4 first:border-0 first:pt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "warn",
									children: item.dir
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-xs text-subtle",
								children: item.match
							}),
							item.page && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.page,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-2 inline-block text-sm text-sage underline-offset-4 hover:underline",
								children: item.page.replace(/^https:\/\//, "")
							})
						]
					}, item.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: copyGuide,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), "Копировать чеклист"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: onDownload,
						disabled: busy,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "ZIP с папками"]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl border border-border bg-surface p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-medium",
					children: "Конфиги"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Скрипт копирует только то, что лежит в configs. Пустой файл = SKIP, не ошибка."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-5",
					children: CONFIGS.map((cfg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4 border-t border-border pt-5 first:border-0 first:pt-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: cfg.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-xs text-subtle",
								children: cfg.from
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: cfg.hint
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: !!configs[cfg.id],
							onCheckedChange: () => toggleConfig(cfg.id)
						})]
					}, cfg.id))
				})
			]
		})]
	});
}
function BundlePanel({ onDownload, busy }) {
	const json = kitJsonText(snapshot(useKitStore()));
	async function copyJson() {
		await navigator.clipboard.writeText(json);
		toast.success("kit.json скопирован");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl border border-border bg-surface p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sage",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold tracking-tight text-fg",
						children: "Запуск"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-5 space-y-4 text-sm leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Скачай ZIP и распакуй в G:\\Post Install Script." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Положи конфиги и вендорные exe по чеклисту. installers может остаться почти пустым — это нормально." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Правой кнопкой Install.bat → от имени администратора." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Проверка без установки:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "font-mono text-xs text-fg",
								children: "Install.ps1 -DryRun"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "В логе смотри SKIP: это список того, чего не хватило, а не «всё сломалось»." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-8 w-full sm:w-auto",
					size: "lg",
					onClick: onDownload,
					disabled: busy,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), busy ? "Сборка…" : "Скачать F33L-Kit.zip"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "overflow-hidden rounded-xl border border-border bg-elevated",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-subtle",
					children: "kit.json"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: copyJson,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), "Копировать"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "max-h-96 overflow-auto p-4 font-mono text-xs leading-relaxed text-accent",
				children: json
			})]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KitApp, {});
}
//#endregion
export { Home as component };
