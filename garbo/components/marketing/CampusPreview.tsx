"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";

type TabId = "fill" | "reports" | "rates";

const TABS: { id: TabId; label: string; caption: string }[] = [
  { id: "fill", label: "Bin fill", caption: "Bin fill levels, so collection goes where it’s needed." },
  {
    id: "reports",
    label: "Reports",
    caption: "Student reports of overflow, damage, and contamination, tracked until they’re resolved.",
  },
  { id: "rates", label: "Recycling rate", caption: "Recycling rates by college and by building." },
];

const BINS = [
  { code: "#024", place: "East Atrium", pct: 40 },
  { code: "#031", place: "Cafeteria Courtyard", pct: 72 },
  { code: "#012", place: "Library Lobby", pct: 95 },
  { code: "#007", place: "Engineering Hall", pct: 18 },
];

const REPORTS = [
  { type: "Overflow", where: "Station #012, Library Lobby", status: "Open", dot: "bg-status-full" },
  { type: "Damaged lid", where: "Station #031, Cafeteria Courtyard", status: "In progress", dot: "bg-status-filling" },
  { type: "Contamination", where: "Station #024, East Atrium", status: "Resolved", dot: "bg-status-ok" },
];

const RATES = [
  { college: "College of Engineering", pct: 72 },
  { college: "School of Information Tech", pct: 65 },
  { college: "School of Business", pct: 58 },
];

// same banding as the app: 0-59 ready, 60-89 filling, 90-100 full
function fillStatus(pct: number) {
  if (pct >= 90) return { label: "Full", bar: "bg-status-full" };
  if (pct >= 60) return { label: "Filling", bar: "bg-status-filling" };
  return { label: "Ready", bar: "bg-status-ok" };
}

/** A tiny, fake admin dashboard: switch tabs and the bars grow in again. */
export function CampusPreview() {
  const [tab, setTab] = useState<TabId>("fill");
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const current = TABS.find((t) => t.id === tab)!;

  function onKeyDown(e: KeyboardEvent, i: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length;
    setTab(TABS[next].id);
    buttons.current[next]?.focus();
  }

  return (
    <div className="rounded-3xl bg-surface p-4 text-body shadow-[0_30px_70px_-30px_rgba(0,0,0,.6)] sm:p-5">
      <div role="tablist" aria-label="Facilities dashboard preview" className="flex gap-1 rounded-xl bg-muted p-1">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              "flex-1 cursor-pointer rounded-lg px-2 py-2 text-[.8125rem] leading-tight font-semibold transition-[background-color,color,box-shadow] duration-200 sm:text-sm",
              tab === t.id ? "bg-surface text-ink shadow-sm" : "text-soft hover:bg-tint hover:text-ink",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-[.9375rem] text-soft">{current.caption}</p>

      <div key={tab} role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="mt-4 min-h-60">
        {tab === "fill" && (
          <ul className="grid gap-3.5">
            {BINS.map((b, i) => {
              const s = fillStatus(b.pct);
              return (
                <li key={b.code}>
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span>
                      <strong className="text-ink">Station {b.code}</strong>{" "}
                      <span className="text-soft">{b.place}</span>
                    </span>
                    <span className="font-semibold whitespace-nowrap text-ink tabular-nums">
                      {b.pct}% <span className="font-medium text-soft">{s.label}</span>
                    </span>
                  </div>
                  <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn("h-full origin-left animate-grow rounded-full", s.bar)}
                      style={{ width: `${b.pct}%`, animationDelay: `${i * 90}ms` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {tab === "reports" && (
          <ul className="grid gap-2.5">
            {REPORTS.map((r) => (
              <li
                key={r.type}
                className="flex items-center justify-between gap-3 rounded-xl bg-muted px-3.5 py-3 transition-colors duration-200 hover:bg-highlight"
              >
                <div className="min-w-0">
                  <strong className="block text-[.9375rem] text-ink">{r.type}</strong>
                  <span className="text-sm text-soft">{r.where}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap text-ink">
                  <span aria-hidden className={cn("size-2.5 rounded-full", r.dot)} />
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
        )}

        {tab === "rates" && (
          <ul className="grid gap-4">
            {RATES.map((r, i) => (
              <li key={r.college}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <strong className="text-ink">{r.college}</strong>
                  <span className="font-semibold text-ink tabular-nums">{r.pct}%</span>
                </div>
                <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full origin-left animate-grow rounded-full bg-brand"
                    style={{ width: `${r.pct}%`, animationDelay: `${i * 90}ms` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
