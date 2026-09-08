import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  AlertTriangle,
  Cable,
  Check,
  Copy,
  Download,
  FolderOpen,
  RotateCcw,
  Shield,
  Terminal,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { CATALOG, CATEGORIES, CONFIGS, sourceLabel } from "@/lib/kit/catalog";
import { downloadKit, dropInGuide, enabledItems, kitJsonText, toKitJson } from "@/lib/kit/generate";
import { useKitStore } from "@/lib/kit/store";
import type { KitState } from "@/lib/kit/types";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "why", label: "Почему с нуля" },
  { id: "machine", label: "Машина" },
  { id: "catalog", label: "Каталог" },
  { id: "drop", label: "Файлы" },
  { id: "bundle", label: "Комплект" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function snapshot(store: {
  machine: KitState["machine"];
  enabled: KitState["enabled"];
  configs: KitState["configs"];
}): KitState {
  return { machine: store.machine, enabled: store.enabled, configs: store.configs };
}

export function KitApp() {
  const [tab, setTab] = useState<TabId>("why");
  const [busy, setBusy] = useState(false);
  const store = useKitStore();

  useEffect(() => {
    void useKitStore.persist.rehydrate();
  }, []);

  const state = snapshot(store);
  const json = useMemo(
    () => toKitJson(state),
    [store.machine, store.enabled, store.configs],
  );
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

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          className: "!bg-elevated !text-fg !border-border !font-sans",
        }}
      />
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 md:flex-row md:items-end md:justify-between md:px-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-sage">Post-install</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">F33L Kit</h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Конструктор первой загрузки Windows. Winget ставит то, что умеет. Драйверы AMD и
              утилиты Gigabyte кладёшь файлом — скрипт больше не врёт, что скачает их сам.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-2 sm:items-end">
            <div className="flex gap-2 font-mono text-xs tabular-nums text-muted">
              <span>{wingetCount} winget</span>
              <span className="text-border">/</span>
              <span>{dropCount} файлом</span>
              <span className="text-border">/</span>
              <span>{cfgCount} конфиг</span>
            </div>
            <Button onClick={onDownload} disabled={busy} size="lg">
              <Download className="h-4 w-4" />
              {busy ? "Сборка…" : "Скачать ZIP"}
            </Button>
          </div>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3 md:px-6">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "h-11 shrink-0 rounded-md px-4 text-sm transition-colors",
                tab === t.id ? "bg-elevated text-fg" : "text-muted hover:text-fg",
              )}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        {tab === "why" && <WhyPanel />}
        {tab === "machine" && <MachinePanel />}
        {tab === "catalog" && <CatalogPanel />}
        {tab === "drop" && <DropPanel onDownload={onDownload} busy={busy} />}
        {tab === "bundle" && <BundlePanel onDownload={onDownload} busy={busy} />}
      </main>
    </div>
  );
}

function WhyPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-xl border border-border bg-surface p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Почему старый скрипт пустой</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Папка installers пустая не потому, что ты что-то забыл. Потому что качать exe «из
          воздуха» нельзя. Прошлый Install.ps1 обещал сделать это сам — и подставил мёртвые URL.
        </p>
        <ul className="mt-6 space-y-4 text-sm leading-relaxed">
          <FailRow
            title="Ссылки AMD и Gigabyte"
            body="drivers.amd.com отдаёт 403 без браузерной сессии и EULA. Прямые ZIP Gigabyte живут недели, потом 404. Скрипт не браузер."
          />
          <FailRow
            title="/VERYSILENT на всё подряд"
            body="Это флаги Inno Setup. Adrenalin, RGB Fusion, Acronis, Focusrite их игнорируют или зависают."
          />
          <FailRow
            title="ZIP → AMD_Chipset.exe"
            body="Внутри архива другая структура. Переименовать наугад нельзя — файл не находится, шаг SKIP."
          />
          <FailRow
            title="Неверные winget id"
            body="KeePassX.KeePassX мёртв, FileZilla.Client не существует, Revo.RevoUninstaller и CCleaner.CCleaner — опечатки."
          />
          <FailRow
            title="Жёсткий путь G:\Post Install Script"
            body="Если комплект на флешке — всё ломается. Новый движок берёт каталог Install.ps1."
          />
        </ul>
      </section>
      <aside className="flex flex-col gap-4">
        <section className="rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-medium">Как будет на деле</h3>
          <ol className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <span className="font-mono text-sage">01</span> VPN, если v2rayN уже лежит на диске.
            </li>
            <li>
              <span className="font-mono text-sage">02</span> Проверка сети. Без неё winget честно
              падает.
            </li>
            <li>
              <span className="font-mono text-sage">03</span> Около тридцати программ через winget с
              правильными id.
            </li>
            <li>
              <span className="font-mono text-sage">04</span> Драйверы и вендор — только если файл
              есть в папке.
            </li>
            <li>
              <span className="font-mono text-sage">05</span> Конфиги FanControl / Adrenalin / v2rayN.
            </li>
            <li>
              <span className="font-mono text-sage">06</span> Отчёт OK / SKIP / FAIL. Перезагрузка не
              молча.
            </li>
          </ol>
        </section>
        <section className="rounded-xl border border-border bg-elevated p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-subtle">Правило</p>
          <p className="mt-2 text-base leading-relaxed">
            Скрипт не выдумывает URL. Если файла нет — SKIP и ссылка на официальную страницу, а не
            «успех».
          </p>
        </section>
      </aside>
    </div>
  );
}

function FailRow({ title, body }: { title: string; body: string }) {
  return (
    <li className="border-t border-border pt-4 first:border-t-0 first:pt-0">
      <p className="font-medium text-fg">{title}</p>
      <p className="mt-1 text-muted">{body}</p>
    </li>
  );
}

function MachinePanel() {
  const { machine, setMachine, resetPreset } = useKitStore();
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Профиль машины</h2>
            <p className="mt-2 text-sm text-muted">
              Пресет F33LG88D: RX 6800, Gigabyte, v2rayN на G:\. Путь комплекта в скрипт не
              зашивается.
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={resetPreset}>
            <RotateCcw className="h-4 w-4" />
            Сброс
          </Button>
        </div>
        <label className="mt-6 block text-xs uppercase tracking-wider text-subtle">Имя сборки</label>
        <Input
          className="mt-2"
          value={machine.name}
          onChange={(e) => setMachine("name", e.target.value)}
        />
        <label className="mt-5 block text-xs uppercase tracking-wider text-subtle">
          Путь к v2rayN.exe
        </label>
        <Input
          className="mt-2 font-mono text-xs sm:text-sm"
          value={machine.vpnExe}
          onChange={(e) => setMachine("vpnExe", e.target.value)}
        />
        <label className="mt-5 block text-xs uppercase tracking-wider text-subtle">
          Ждать туннель, сек
        </label>
        <Input
          className="mt-2 w-28"
          type="number"
          min={5}
          max={120}
          value={machine.vpnWait}
          onChange={(e) => setMachine("vpnWait", Number(e.target.value) || 25)}
        />
      </section>
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h3 className="text-lg font-medium">Поведение</h3>
        <div className="mt-5 space-y-5">
          <ToggleRow
            icon={<Shield className="h-4 w-4" />}
            title="Поднять VPN перед winget"
            body="Нужен, если Microsoft и GitHub режутся. Сам клиент скрипт не скачивает."
            checked={machine.vpnEnabled}
            onChange={(v) => setMachine("vpnEnabled", v)}
          />
          <ToggleRow
            icon={<Cable className="h-4 w-4" />}
            title="Ярлык v2rayN на рабочий стол"
            body="Только если exe на месте."
            checked={machine.desktopShortcut}
            onChange={(v) => setMachine("desktopShortcut", v)}
          />
          <ToggleRow
            icon={<FolderOpen className="h-4 w-4" />}
            title="Windows Update для Wi-Fi / BT"
            body="Сканирование драйверов. Файл в drivers перекроет, если положишь."
            checked={machine.windowsUpdateDrivers}
            onChange={(v) => setMachine("windowsUpdateDrivers", v)}
          />
          <ToggleRow
            icon={<Check className="h-4 w-4" />}
            title="Твики проводника"
            body="Показать расширения и скрытые, выключить Bing в поиске."
            checked={machine.tweaks}
            onChange={(v) => setMachine("tweaks", v)}
          />
          <ToggleRow
            icon={<AlertTriangle className="h-4 w-4" />}
            title="Спросить про перезагрузку"
            body="По умолчанию выкл. Старый скрипт ребутился сам — так больше не делаем."
            checked={machine.reboot}
            onChange={(v) => setMachine("reboot", v)}
          />
        </div>
      </section>
    </div>
  );
}

function ToggleRow({
  icon,
  title,
  body,
  checked,
  onChange,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-border pt-5 first:border-t-0 first:pt-0">
      <div className="flex gap-3">
        <span className="mt-0.5 text-muted">{icon}</span>
        <div>
          <p className="font-medium">{title}</p>
          <p className="mt-1 text-sm text-muted">{body}</p>
        </div>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

function CatalogPanel() {
  const { enabled, toggleItem, setAll } = useKitStore();
  const [filter, setFilter] = useState<"all" | "winget" | "file">("all");

  const visible = CATALOG.filter((item) => {
    if (filter === "winget") return item.source === "winget";
    if (filter === "file") return item.source !== "winget";
    return true;
  });

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Каталог</h2>
          <p className="mt-1 text-sm text-muted">
            Id проверены. То, чего нет в winget, помечено «файл».
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["all", "winget", "file"] as const).map((f) => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
            >
              {f === "all" ? "Все" : f === "winget" ? "winget" : "Файлом"}
            </Button>
          ))}
          <Button size="sm" variant="ghost" onClick={() => setAll(true)}>
            Все вкл
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setAll(false)}>
            Все выкл
          </Button>
        </div>
      </div>
      <div className="mt-6 space-y-8">
        {CATEGORIES.map((cat) => {
          const rows = visible.filter((i) => i.category === cat.id);
          if (rows.length === 0) return null;
          return (
            <section key={cat.id}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-subtle">{cat.label}</h3>
              <div className="mt-3 divide-y divide-border rounded-lg border border-border bg-surface">
                {rows.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 px-4 py-4 sm:px-5">
                    <Switch
                      className="mt-1"
                      checked={!!enabled[item.id]}
                      onCheckedChange={() => toggleItem(item.id)}
                    />
                    <button
                      type="button"
                      className="min-w-0 flex-1 text-left"
                      onClick={() => toggleItem(item.id)}
                    >
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-medium">{item.name}</span>
                        <Badge tone={item.source === "winget" ? "sage" : "warn"}>
                          {sourceLabel(item.source)}
                        </Badge>
                      </span>
                      <span className="mt-1 block text-sm text-muted">{item.blurb}</span>
                      {item.wingetId && (
                        <span className="mt-1 block font-mono text-xs text-subtle">
                          {item.wingetId}
                        </span>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function DropPanel({ onDownload, busy }: { onDownload: () => void; busy: boolean }) {
  const store = useKitStore();
  const state = snapshot(store);
  const { configs, toggleConfig } = store;
  const files = enabledItems(state).filter((i) => i.source !== "winget");
  const guide = dropInGuide(state);

  async function copyGuide() {
    await navigator.clipboard.writeText(guide);
    toast.success("Чеклист скопирован");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Что скачать руками</h2>
        <p className="mt-2 text-sm text-muted">
          Один раз, в браузере, уже под VPN. Потом кладёшь файлы в папки комплекта и запускаешь
          Install.bat.
        </p>
        <div className="mt-6 space-y-4">
          {files.length === 0 && (
            <p className="text-sm text-muted">В этом комплекте нет drop-in — всё уйдёт в winget.</p>
          )}
          {files.map((item) => (
            <article key={item.id} className="border-t border-border pt-4 first:border-0 first:pt-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{item.name}</h3>
                <Badge tone="warn">{item.dir}</Badge>
              </div>
              <p className="mt-1 font-mono text-xs text-subtle">{item.match}</p>
              {item.page && (
                <a
                  href={item.page}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm text-sage underline-offset-4 hover:underline"
                >
                  {item.page.replace(/^https:\/\//, "")}
                </a>
              )}
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          <Button variant="outline" onClick={copyGuide}>
            <Copy className="h-4 w-4" />
            Копировать чеклист
          </Button>
          <Button onClick={onDownload} disabled={busy}>
            <Download className="h-4 w-4" />
            ZIP с папками
          </Button>
        </div>
      </section>
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h3 className="text-lg font-medium">Конфиги</h3>
        <p className="mt-2 text-sm text-muted">
          Скрипт копирует только то, что лежит в configs. Пустой файл = SKIP, не ошибка.
        </p>
        <div className="mt-5 space-y-5">
          {CONFIGS.map((cfg) => (
            <div
              key={cfg.id}
              className="flex items-start justify-between gap-4 border-t border-border pt-5 first:border-0 first:pt-0"
            >
              <div>
                <p className="font-medium">{cfg.name}</p>
                <p className="mt-1 font-mono text-xs text-subtle">{cfg.from}</p>
                <p className="mt-1 text-sm text-muted">{cfg.hint}</p>
              </div>
              <Switch checked={!!configs[cfg.id]} onCheckedChange={() => toggleConfig(cfg.id)} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function BundlePanel({ onDownload, busy }: { onDownload: () => void; busy: boolean }) {
  const store = useKitStore();
  const state = snapshot(store);
  const json = kitJsonText(state);

  async function copyJson() {
    await navigator.clipboard.writeText(json);
    toast.success("kit.json скопирован");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex items-center gap-2 text-sage">
          <Terminal className="h-5 w-5" />
          <h2 className="text-2xl font-semibold tracking-tight text-fg">Запуск</h2>
        </div>
        <ol className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
          <li>Скачай ZIP и распакуй в G:\Post Install Script.</li>
          <li>
            Положи конфиги и вендорные exe по чеклисту. installers может остаться почти пустым —
            это нормально.
          </li>
          <li>Правой кнопкой Install.bat → от имени администратора.</li>
          <li>
            Проверка без установки:{" "}
            <code className="font-mono text-xs text-fg">Install.ps1 -DryRun</code>
          </li>
          <li>В логе смотри SKIP: это список того, чего не хватило, а не «всё сломалось».</li>
        </ol>
        <Button className="mt-8 w-full sm:w-auto" size="lg" onClick={onDownload} disabled={busy}>
          <Download className="h-4 w-4" />
          {busy ? "Сборка…" : "Скачать F33L-Kit.zip"}
        </Button>
      </section>
      <section className="overflow-hidden rounded-xl border border-border bg-elevated">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <p className="font-mono text-xs uppercase tracking-widest text-subtle">kit.json</p>
          <Button size="sm" variant="ghost" onClick={copyJson}>
            <Copy className="h-4 w-4" />
            Копировать
          </Button>
        </div>
        <pre className="max-h-96 overflow-auto p-4 font-mono text-xs leading-relaxed text-accent">
          {json}
        </pre>
      </section>
    </div>
  );
}
