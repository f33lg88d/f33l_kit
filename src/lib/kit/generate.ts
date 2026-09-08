import JSZip from "jszip";
import enginePs1 from "./engine.ps1?raw";
import installBat from "./install.bat?raw";
import { CATALOG, CONFIGS } from "./catalog";
import type { CatalogItem, KitState } from "./types";

const BOM = "\uFEFF";

export type KitJson = {
  name: string;
  version: string;
  vpn: {
    enabled: boolean;
    exe: string;
    waitSeconds: number;
    desktopShortcut: boolean;
  };
  reboot: boolean;
  tweaks: boolean;
  windowsUpdateDrivers: boolean;
  packages: { id: string; name: string }[];
  dropins: {
    name: string;
    dir: string;
    match: string;
    args?: string;
    page?: string;
  }[];
  configs: { name: string; from: string; to: string }[];
};

export function enabledItems(state: KitState): CatalogItem[] {
  return CATALOG.filter((item) => state.enabled[item.id]);
}

export function enabledConfigs(state: KitState) {
  return CONFIGS.filter((item) => state.configs[item.id]);
}

export function toKitJson(state: KitState): KitJson {
  const items = enabledItems(state);
  const packages = items
    .filter((i) => i.source === "winget" && i.wingetId)
    .map((i) => ({ id: i.wingetId as string, name: i.name }));
  const dropins = items
    .filter((i) => i.source === "dropin" || i.source === "windows-update")
    .filter((i) => i.dir && i.match)
    .map((i) => ({
      name: i.name,
      dir: i.dir as string,
      match: i.match as string,
      args: i.args,
      page: i.page,
    }));
  const configs = enabledConfigs(state).map((c) => ({
    name: c.name,
    from: c.from,
    to: c.to,
  }));

  return {
    name: state.machine.name || "F33L",
    version: "1.0",
    vpn: {
      enabled: state.machine.vpnEnabled,
      exe: state.machine.vpnExe,
      waitSeconds: state.machine.vpnWait,
      desktopShortcut: state.machine.desktopShortcut,
    },
    reboot: state.machine.reboot,
    tweaks: state.machine.tweaks,
    windowsUpdateDrivers: state.machine.windowsUpdateDrivers,
    packages,
    dropins,
    configs,
  };
}

export function dropInGuide(state: KitState): string {
  const items = enabledItems(state).filter(
    (i) => i.source === "dropin" || i.source === "windows-update",
  );
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
    ``,
  ];

  if (items.length === 0) {
    lines.push("Ничего класть не нужно — весь комплект на winget.");
  } else {
    for (const item of items) {
      lines.push(`${item.name}`);
      lines.push(`  папка:   ${item.dir}\\`);
      lines.push(`  маска:   ${item.match}`);
      if (item.page) lines.push(`  откуда:  ${item.page}`);
      if (item.note) lines.push(`  заметка: ${item.note}`);
      if (item.source === "windows-update") {
        lines.push("  если файла нет — оставим Windows Update после перезагрузки.");
      }
      lines.push("");
    }
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

export function readme(state: KitState): string {
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
    `Путь внутри скрипта не зашит — берётся каталог Install.ps1.`,
  ].join("\r\n");
}

export function kitJsonText(state: KitState): string {
  return JSON.stringify(toKitJson(state), null, 2);
}

export async function buildKitZip(state: KitState): Promise<Blob> {
  const zip = new JSZip();
  const root = zip.folder("F33L-Kit")!;
  root.file("Install.ps1", BOM + enginePs1.replace(/\n/g, "\r\n"));
  root.file("Install.bat", installBat.replace(/\n/g, "\r\n"));
  root.file("kit.json", BOM + kitJsonText(state).replace(/\n/g, "\r\n"));
  root.file("README.txt", BOM + readme(state));
  root.file("НУЖНО ПОЛОЖИТЬ.txt", BOM + dropInGuide(state));

  root.folder("drivers")!.file(
    "ПОЛОЖИ_СЮДА.txt",
    BOM + "Сюда — установщики драйверов. Имена могут быть любыми: скрипт ищет по маске из kit.json.\r\n",
  );
  root.folder("installers")!.file(
    "ПОЛОЖИ_СЮДА.txt",
    BOM + "Сюда — RGB Fusion, Acronis, Focusrite, Ассистент, Monect.\r\n",
  );
  root.folder("logs")!.file(".keep", "");
  root.folder("configs/FanControl")!.file(
    "ПОЛОЖИ_СЮДА.txt",
    BOM + "Файл FanControl.config\r\n",
  );
  root.folder("configs/AMD_Adrenalin")!.file(
    "ПОЛОЖИ_СЮДА.txt",
    BOM + "ZIP профиля Adrenalin: my_rx6800_profile.zip\r\n",
  );
  root.folder("configs/v2rayN")!.file(
    "ПОЛОЖИ_СЮДА.txt",
    BOM + "Конфиг или папка подписки f33lg88d\r\n",
  );

  return zip.generateAsync({ type: "blob" });
}

export async function downloadKit(state: KitState) {
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
