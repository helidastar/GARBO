"use client";

import { LeaderboardRow } from "@/components/garbo/LeaderboardRow";
import type { College } from "@/lib/demo/colleges";
import { useInView } from "@/lib/hooks/useInView";

/** Leaderboard whose bars grow in the first time it scrolls into view. */
export function GreenCupList({ colleges, mineRank }: { colleges: College[]; mineRank: number }) {
  const { ref, inView } = useInView<HTMLOListElement>(0.35);
  const max = Math.max(...colleges.map((c) => c.points));

  return (
    <ol ref={ref}>
      {colleges.map((c) => (
        <LeaderboardRow
          key={c.rank}
          rank={c.rank}
          college={c.name}
          contributors={c.contributors}
          points={c.points}
          share={c.points / max}
          revealed={inView}
          mine={c.rank === mineRank}
        />
      ))}
    </ol>
  );
}
