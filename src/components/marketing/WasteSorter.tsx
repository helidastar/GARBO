"use client";

import { useEffect, useRef, useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { POINTS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { SORTER_ITEMS, type SorterItemKey } from "@/lib/demo/sorter-items";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { STREAM_STYLES } from "@/lib/streams";

const START_POINTS = 1240;

// the four scanner corners tighten inward when you hover the viewfinder
const CORNERS = [
  "top-3 left-3 border-t-3 border-l-3 rounded-tl-lg group-hover:translate-x-1 group-hover:translate-y-1",
  "top-3 right-3 border-t-3 border-r-3 rounded-tr-lg group-hover:-translate-x-1 group-hover:translate-y-1",
  "bottom-3 left-3 border-b-3 border-l-3 rounded-bl-lg group-hover:translate-x-1 group-hover:-translate-y-1",
  "bottom-3 right-3 border-b-3 border-r-3 rounded-br-lg group-hover:-translate-x-1 group-hover:-translate-y-1",
];

function Glyph({ item }: { item: SorterItemKey }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden
      className="w-[38%] max-w-30 text-ink transition-transform duration-300 group-hover:scale-105"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {item === "cup" && (
        <>
          <path d="M17 18h30l-3.5 38a2 2 0 0 1-2 1.8H22.5a2 2 0 0 1-2-1.8z" />
          <path d="M15 13.5a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2V18H15z" />
          <path d="M36 11.5 41 3" />
          <rect x="25" y="30" width="7" height="7" rx="1.5" transform="rotate(12 28 33)" />
          <rect x="34" y="40" width="7" height="7" rx="1.5" transform="rotate(-10 37 43)" />
        </>
      )}
      {item === "peel" && (
        <>
          <path d="M12 20C14 44 34 56 54 44 36 46 20 38 12 20z" />
          <path d="M12 20l-2-6" />
          <path d="M54 44l3-2" />
          <path d="M12 20C6 26 8 34 14 38" />
        </>
      )}
      {item === "bag" && (
        <>
          <path d="M17 8h30l-2 8 3 24-3 16H19l-3-16 3-24z" />
          <path d="M18 13h28M18 51h28" strokeDasharray="1.5 3" />
          <circle cx="32" cy="32" r="7" />
        </>
      )}
    </svg>
  );
}

/**
 * Hero demo: pick an item, watch it scan, read the verdict, then confirm the
 * disposal to earn points. This mirrors the real loop (scan -> bin -> QR -> points).
 */
export function WasteSorter() {
  const [selected, setSelected] = useState<SorterItemKey>("cup");
  const [shown, setShown] = useState<SorterItemKey>("cup");
  const [scanning, setScanning] = useState(false);
  const [confirmed, setConfirmed] = useState<SorterItemKey[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const points = useCountUp(START_POINTS + confirmed.length * POINTS.DISPOSAL);

  function pick(key: SorterItemKey) {
    setSelected(key);
    clearTimeout(timer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(key);
      setScanning(false);
      return;
    }
    setScanning(true);
    timer.current = setTimeout(() => {
      setShown(key);
      setScanning(false);
    }, 650);
  }

  function confirm() {
    if (scanning || confirmed.includes(shown)) return;
    setConfirmed((c) => [...c, shown]);
  }

  const item = SORTER_ITEMS.find((i) => i.key === shown)!;
  const stream = STREAM_STYLES[item.stream];
  const done = confirmed.includes(shown);
  const allDone = confirmed.length === SORTER_ITEMS.length;

  return (
    <div
      className={cn(
        "w-full max-w-120 rounded-3xl border border-t-8 border-line bg-surface px-4 pt-5 pb-4.5 shadow-[0_24px_60px_-30px_rgba(151,40,40,.4)] transition-[border-color,box-shadow] duration-300 hover:shadow-[0_30px_70px_-30px_rgba(151,40,40,.55)] lg:justify-self-end",
        stream.stripe,
      )}
    >
      <fieldset className="m-0 min-w-0 border-0 p-0">
        <legend className="mb-3 p-0 font-display text-lg font-bold text-ink">
          Try it. What are you holding?
        </legend>
        <div className="grid grid-cols-3 gap-2">
          {SORTER_ITEMS.map((i) => (
            <label key={i.key} className="relative block">
              <input
                type="radio"
                name="item"
                value={i.key}
                checked={selected === i.key}
                onChange={() => pick(i.key)}
                className="peer absolute inset-0 size-full cursor-pointer opacity-0"
              />
              <span
                className={cn(
                  "flex min-h-13 items-center justify-center rounded-xl p-2 text-center text-sm leading-tight font-semibold transition-[background-color,color,transform] duration-200 peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-link",
                  selected === i.key
                    ? "bg-brand text-on-brand"
                    : "bg-muted text-ink hover:-translate-y-0.5 hover:bg-highlight",
                )}
              >
                {i.pickerLabel}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* viewfinder */}
      <div className="group relative mt-4 grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl bg-muted">
        {CORNERS.map((c) => (
          <span
            key={c}
            aria-hidden
            className={cn("absolute size-5.5 border-tangerine transition-transform duration-300", c)}
          />
        ))}
        {scanning && (
          <span
            key={selected}
            aria-hidden
            className="absolute inset-x-2.5 top-[8%] h-[3px] animate-sweep rounded-sm bg-tangerine"
          />
        )}
        <Glyph item={item.key} />
        <span className="absolute top-9 right-3.5 rounded-full bg-success-soft px-2.5 py-0.75 text-xs font-semibold text-success-ink">
          {item.confidence}% confident
        </span>
        <span className="absolute bottom-9 left-3.5 max-w-[calc(100%-1.75rem)] rounded-lg bg-surface px-2.5 py-1 text-[.8125rem] font-semibold text-ink">
          {item.detected}
        </span>
      </div>

      {/* verdict */}
      <div aria-live="polite" className={cn("mt-4 transition-opacity duration-200", scanning && "opacity-30")}>
        <span className={cn("inline-block rounded-full px-3 py-1 text-[.8125rem] font-bold", stream.chip)}>
          {stream.label}
        </span>
        <p className="mt-2.5 font-display text-2xl leading-tight font-bold tracking-tight text-ink">
          {item.bin}
        </p>
        <p className="mt-1.5 text-[.9375rem] text-soft">{item.instruction}</p>

        <ol className="mt-3.5 grid grid-cols-2 gap-2">
          {item.steps.map((s, idx) => (
            <li key={s} className="grid gap-0.5 rounded-xl bg-muted px-3 py-2.5">
              <small className="text-xs text-soft">Step {idx + 1}</small>
              <strong className="text-[.9375rem] leading-tight text-ink">{s}</strong>
            </li>
          ))}
        </ol>

        <div className="mt-3.5 flex items-center gap-3 border-t border-line pt-3.5">
          <svg viewBox="0 0 24 24" aria-hidden className="size-5.5 flex-none text-link" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          <div className="min-w-0 flex-1">
            <strong className="block text-[.9375rem] leading-snug text-ink">{item.station}</strong>
            <span className="block text-sm text-soft">{item.distance}</span>
          </div>
          {done ? (
            <Chip tone="success" className="animate-pop">
              Earned +{POINTS.DISPOSAL}
            </Chip>
          ) : (
            <Chip tone="points">+{POINTS.DISPOSAL} pts</Chip>
          )}
        </div>
      </div>

      {/* confirm + running total */}
      <div className="mt-3.5 flex items-center gap-3">
        <button
          type="button"
          onClick={confirm}
          disabled={scanning || done}
          className={cn(
            "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border-2 px-4 text-[.9375rem] leading-tight font-semibold transition-[transform,box-shadow,filter] duration-200 disabled:cursor-default",
            done
              ? "border-success-soft bg-success-soft text-success-ink"
              : "cursor-pointer border-brand bg-brand text-on-brand hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_24px_-10px_rgba(151,40,40,.65)] active:translate-y-0 active:scale-[.98] disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none",
          )}
        >
          {done ? (
            <>
              <svg viewBox="0 0 24 24" aria-hidden className="size-4.5 animate-pop" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
              Disposed
            </>
          ) : (
            "Confirm disposal"
          )}
        </button>

        <div className="relative min-w-22 text-right">
          <span className="block text-xs text-soft">Your points</span>
          <strong className="font-display text-xl font-extrabold text-ink tabular-nums">
            {points.toLocaleString("en-US")}
          </strong>
          {confirmed.length > 0 && (
            <span
              key={confirmed.length}
              aria-hidden
              className="pointer-events-none absolute -top-1 right-0 animate-float-up text-sm font-bold text-link"
            >
              +{POINTS.DISPOSAL}
            </span>
          )}
        </div>
      </div>

      <p className="mt-2 text-xs text-soft">
        {allDone ? (
          <>
            All three sorted.{" "}
            <button type="button" onClick={() => setConfirmed([])} className="cursor-pointer font-semibold text-link underline">
              Start over
            </button>
          </>
        ) : (
          "In the app, this step is scanning the QR code on the bin."
        )}
      </p>
    </div>
  );
}
