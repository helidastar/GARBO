"use client";

import { useState } from "react";
import { StreakTracker, type StreakDay } from "@/components/garbo/StreakTracker";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { POINTS } from "@/lib/constants";
import { PanelTitle } from "./PanelTitle";

const MISSION_GOAL = 3;
const MISSION_POINTS = 25;

function buildDays(todayLogged: boolean): StreakDay[] {
  return [
    { letter: "M", name: "Monday", state: "done" },
    { letter: "T", name: "Tuesday", state: "done" },
    { letter: "W", name: "Wednesday", state: "done" },
    { letter: "T", name: "Thursday", state: "done" },
    { letter: "F", name: "Friday", state: "done" },
    { letter: "S", name: "Saturday", state: todayLogged ? "done" : "today" },
    { letter: "S", name: "Sunday", state: "locked" },
  ];
}

/**
 * One button drives both meters, like the real rules: a verified disposal
 * advances today's mission AND extends the streak.
 */
export function WeekDemo() {
  const [items, setItems] = useState(0);
  const complete = items >= MISSION_GOAL;
  const todayLogged = items > 0;
  const earned = items * POINTS.DISPOSAL + (complete ? MISSION_POINTS : 0);

  return (
    <Card>
      <PanelTitle title="Your week" note="Resets Sunday" />

      <div className="flex items-center justify-between gap-3">
        <strong className="leading-tight text-ink">Today’s mission: dispose 3 recyclable items</strong>
        {complete ? (
          <Chip tone="success" className="animate-pop whitespace-nowrap">
            Earned +{MISSION_POINTS} pts
          </Chip>
        ) : (
          <Chip tone="points" className="whitespace-nowrap">
            +{MISSION_POINTS} pts
          </Chip>
        )}
      </div>
      <ProgressBar value={items} max={MISSION_GOAL} label="Mission progress" />
      <p aria-live="polite" className="mt-1.5 text-sm text-soft">
        {complete ? "Mission complete" : `${items} of ${MISSION_GOAL} done`}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        {complete ? (
          <Button size="sm" variant="ghost" onClick={() => setItems(0)}>
            Try again
          </Button>
        ) : (
          <Button size="sm" onClick={() => setItems((n) => n + 1)}>
            Recycle an item
          </Button>
        )}
        <span className="relative text-sm text-soft">
          Points earned in this demo:{" "}
          <strong className="text-ink tabular-nums">{earned}</strong>
          {items > 0 && (
            <span
              key={items}
              aria-hidden
              className="pointer-events-none absolute -top-2 right-0 animate-float-up text-sm font-bold text-link"
            >
              +{POINTS.DISPOSAL}
            </span>
          )}
        </span>
      </div>

      <hr className="my-5 border-line" />

      <div className="flex items-center justify-between gap-3">
        <strong className="text-ink">7-day eco streak</strong>
        <Chip tone="points">+{POINTS.WEEKLY_CHALLENGE} pts</Chip>
      </div>
      <StreakTracker days={buildDays(todayLogged)} activeCount={5 + (todayLogged ? 1 : 0)} />
      <p aria-live="polite" className="mt-3 text-sm text-soft">
        {todayLogged
          ? "Today counts. One more day for the bonus."
          : "Recycle an item to keep your streak going."}
      </p>
    </Card>
  );
}
