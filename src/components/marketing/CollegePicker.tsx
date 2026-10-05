"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { COLLEGES } from "@/lib/demo/colleges";

const ORDINAL: Record<number, string> = { 1: "1st", 2: "2nd", 3: "3rd" };

/** Pick a college, see where it stands in the Green Cup. */
export function CollegePicker() {
  const [rank, setRank] = useState(1);
  const college = COLLEGES.find((c) => c.rank === rank)!;
  const leader = COLLEGES[0];
  const second = COLLEGES[1];

  const message =
    rank === 1
      ? `${college.name} is 1st in the Green Cup, ${(leader.points - second.points).toLocaleString("en-US")} pts ahead. Help keep it there.`
      : `${college.name} is ${ORDINAL[rank]}, ${(leader.points - college.points).toLocaleString("en-US")} pts behind the leader. Your points can close that gap.`;

  return (
    <fieldset className="m-0 mt-8 min-w-0 border-0 p-0">
      <legend className="p-0 text-sm font-semibold text-ink">Pick your college to see where you’d start</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {COLLEGES.map((c) => (
          <label key={c.rank} className="relative">
            <input
              type="radio"
              name="college"
              value={c.rank}
              checked={rank === c.rank}
              onChange={() => setRank(c.rank)}
              className="peer absolute inset-0 size-full cursor-pointer opacity-0"
            />
            <span
              className={cn(
                "block rounded-full px-4 py-2 text-sm font-semibold transition-[background-color,color,transform] duration-200 peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-link",
                rank === c.rank
                  ? "bg-brand text-on-brand"
                  : "bg-muted text-ink hover:-translate-y-0.5 hover:bg-highlight",
              )}
            >
              {c.short}
            </span>
          </label>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 max-w-[52ch] text-soft">
        {message}
      </p>
    </fieldset>
  );
}
