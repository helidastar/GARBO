import { cn } from "@/lib/cn";

export type LeaderboardRowProps = {
  rank: number;
  college: string;
  contributors: number;
  points: number;
  /** 0 to 1: this college's points relative to the leader (drives the bar) */
  share: number;
  /** flips to true when the list scrolls into view, so the bar grows in */
  revealed?: boolean;
  mine?: boolean;
};

/** One college row of the Green Cup. Render inside an <ol>. */
export function LeaderboardRow({
  rank,
  college,
  contributors,
  points,
  share,
  revealed = true,
  mine,
}: LeaderboardRowProps) {
  return (
    <li
      className={cn(
        "group grid grid-cols-[36px_1fr_auto] items-center gap-2.5 border-b border-line px-3 py-3.5 transition-[background-color,transform] duration-200 last:border-b-0 hover:translate-x-1",
        mine ? "rounded-xl border-b-transparent bg-highlight" : "hover:bg-tint",
      )}
    >
      <span className="font-display text-2xl leading-none font-extrabold text-link transition-transform duration-200 group-hover:scale-110">
        {rank}
      </span>
      <div>
        <strong className="block text-[.9375rem] leading-tight text-ink">
          {college}
          {mine && <span className="sr-only"> (your college)</span>}
        </strong>
        <span className="text-[.8125rem] text-soft">
          {contributors.toLocaleString("en-US")} active students
        </span>
        <div aria-hidden className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className={cn(
              "h-full origin-left rounded-full transition-[filter] duration-200 group-hover:brightness-110",
              mine ? "bg-brand" : "bg-tangerine",
              revealed ? "animate-grow" : "scale-x-0",
            )}
            style={{ width: `${Math.round(share * 100)}%`, animationDelay: `${(rank - 1) * 120}ms` }}
          />
        </div>
      </div>
      <span className="text-right text-[.9375rem] font-bold whitespace-nowrap text-ink transition-colors duration-200 group-hover:text-link">
        {points.toLocaleString("en-US")} <small className="font-medium text-soft">pts</small>
      </span>
    </li>
  );
}
