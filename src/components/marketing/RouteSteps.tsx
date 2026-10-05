"use client";

import { useEffect, useRef, useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/cn";

export type RouteStep = {
  title: string;
  body: string;
  chip: string;
  tone: "neutral" | "points" | "success";
};

const LINE = {
  todo: "not-last:before:border-dotted not-last:before:border-link/40",
  done: "not-last:before:border-solid not-last:before:border-link",
};

/**
 * The four-step route. As you scroll, each number fills in and the dotted
 * path turns solid, like walking to the bin. Hover any step to highlight it.
 */
export function RouteSteps({ steps }: { steps: RouteStep[] }) {
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.62;
      let n = 0;
      refs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < line) n = i + 1;
      });
      setReached(n);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ol>
      {steps.map((s, i) => (
        <li
          key={s.title}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={cn(
            "group relative grid grid-cols-[44px_1fr] gap-x-4 pb-9 last:pb-0",
            "not-last:before:absolute not-last:before:top-[52px] not-last:before:bottom-1.5 not-last:before:left-[21px] not-last:before:border-l-2 not-last:before:transition-colors not-last:before:duration-500 not-last:before:content-['']",
            reached >= i + 2 ? LINE.done : LINE.todo,
          )}
        >
          <span
            aria-hidden
            className={cn(
              "grid size-11 place-items-center rounded-full border-2 font-display text-lg font-extrabold transition-[background-color,color,border-color,transform] duration-300 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-on-brand",
              reached > i ? "border-brand bg-brand text-on-brand" : "border-link bg-bg text-link",
            )}
          >
            {i + 1}
          </span>
          <div>
            <h3 className="transition-colors duration-200 group-hover:text-link">{s.title}</h3>
            <p className="mt-1.5 max-w-[46ch] text-soft">{s.body}</p>
            <Chip
              tone={s.tone}
              className="mt-3 transition-transform duration-200 group-hover:translate-x-1"
            >
              {s.chip}
            </Chip>
          </div>
        </li>
      ))}
    </ol>
  );
}
