import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CATALOG, CONFIGS, DEFAULT_MACHINE, defaultConfigs, defaultEnabled } from "./catalog";
import type { KitState, Machine } from "./types";

type KitStore = KitState & {
  setMachine: <K extends keyof Machine>(key: K, value: Machine[K]) => void;
  toggleItem: (id: string) => void;
  toggleConfig: (id: string) => void;
  setAll: (on: boolean) => void;
  resetPreset: () => void;
};

export const useKitStore = create<KitStore>()(
  persist(
    (set) => ({
      machine: DEFAULT_MACHINE,
      enabled: defaultEnabled(),
      configs: defaultConfigs(),
      setMachine: (key, value) =>
        set((s) => ({ machine: { ...s.machine, [key]: value } })),
      toggleItem: (id) =>
        set((s) => ({ enabled: { ...s.enabled, [id]: !s.enabled[id] } })),
      toggleConfig: (id) =>
        set((s) => ({ configs: { ...s.configs, [id]: !s.configs[id] } })),
      setAll: (on) =>
        set(() => {
          const enabled: Record<string, boolean> = {};
          for (const item of CATALOG) enabled[item.id] = on;
          return { enabled };
        }),
      resetPreset: () =>
        set({
          machine: DEFAULT_MACHINE,
          enabled: defaultEnabled(),
          configs: defaultConfigs(),
        }),
    }),
    {
      name: "f33l-kit",
      skipHydration: true,
      partialize: (s) => ({
        machine: s.machine,
        enabled: s.enabled,
        configs: s.configs,
      }),
    },
  ),
);
