export type Source = "winget" | "dropin" | "windows-update";

export type Category =
  | "system"
  | "drivers"
  | "browsers"
  | "comms"
  | "media"
  | "create"
  | "tools"
  | "games"
  | "vendor";

export type CatalogItem = {
  id: string;
  name: string;
  blurb: string;
  category: Category;
  source: Source;
  defaultOn: boolean;
  wingetId?: string;
  dir?: "drivers" | "installers";
  match?: string;
  args?: string;
  page?: string;
  note?: string;
};

export type ConfigItem = {
  id: string;
  name: string;
  from: string;
  to: string;
  hint: string;
  defaultOn: boolean;
};

export type Machine = {
  name: string;
  vpnEnabled: boolean;
  vpnExe: string;
  vpnWait: number;
  desktopShortcut: boolean;
  reboot: boolean;
  tweaks: boolean;
  windowsUpdateDrivers: boolean;
};

export type KitState = {
  machine: Machine;
  enabled: Record<string, boolean>;
  configs: Record<string, boolean>;
};
