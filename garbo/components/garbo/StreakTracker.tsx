import { cn } from "@/lib/cn";

export type StreakDay = {
  letter: string;
  name: string; // "Monday", read by screen readers
  state: "done" | "today" | "locked";
};

const cell: Record<StreakDay["state"], string> = {
  done: "border-brand bg-brand text-on-brand",
  today: "border-tangerine bg-highlight text-tangerine",
  locked: "border-line bg-muted opacity-55",
};

const stateText: Record<StreakDay["state"], string> = {
  done: "done",
  today: "today",
  locked: "not yet",
};

/** M-S tracker: done / today / locked. Used on Missions and the landing page. */
export function StreakTracker({ days, activeCount }: { days: StreakDay[]; activeCount: number }) {
  return (
    <ol
      aria-label={`Streak this week: ${activeCount} of ${days.length} days active`}
      className="mt-3.5 grid grid-cols-7 gap-1.5"
    >
      {days.map((d) => (
        <li key={d.name} className="grid justify-items-center gap-1.5">
          <span aria-hidden className="text-[.8125rem] font-semibold text-soft">
            {d.letter}
          </span>
          <span
            className={cn(
              "grid aspect-square w-full max-w-[38px] place-items-center rounded-full border-2 transition-colors duration-300",
              cell[d.state],
            )}
          >
            {d.state === "done" && (
              <svg viewBox="0 0 24 24" aria-hidden className="size-[18px] animate-pop" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
            )}
            {d.state === "today" && <span aria-hidden className="size-2.5 rounded-full bg-current" />}
            <span className="sr-only">
              {d.name}, {stateText[d.state]}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}
