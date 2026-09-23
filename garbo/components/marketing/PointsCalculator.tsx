"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { POINTS_PER_PRINT_CREDIT } from "@/lib/constants";

const PRESETS = [500, 1240, 2500];

export function PointsCalculator() {
  const [pts, setPts] = useState(1240);
  const credits = Math.floor(pts / POINTS_PER_PRINT_CREDIT);

  return (
    <div className="mt-8 rounded-2xl border border-line bg-tint p-5">
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor="points-range" className="text-sm font-semibold text-ink">
          If you have
        </label>
        <output htmlFor="points-range" className="font-display text-xl font-extrabold text-ink tabular-nums">
          {pts.toLocaleString("en-US")} pts
        </output>
      </div>

      <input
        id="points-range"
        type="range"
        min={0}
        max={3000}
        step={10}
        value={pts}
        onChange={(e) => setPts(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer accent-brand"
      />

      <div className="mt-3 flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPts(p)}
            aria-pressed={pts === p}
            className={cn(
              "cursor-pointer rounded-full px-3 py-1 text-[.8125rem] font-semibold transition-[background-color,transform] duration-200 hover:-translate-y-0.5",
              pts === p ? "bg-brand text-on-brand" : "bg-muted text-ink hover:bg-highlight",
            )}
          >
            {p.toLocaleString("en-US")}
          </button>
        ))}
      </div>

      <p className="mt-4 text-soft" aria-live="polite">
        That’s about{" "}
        <strong className="font-display text-3xl font-extrabold text-link tabular-nums">{credits}</strong>{" "}
        print credits, at {POINTS_PER_PRINT_CREDIT} pts each.
      </p>
    </div>
  );
}
