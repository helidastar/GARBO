"use client";

import { useEffect, useRef, useState } from "react";

/** Animates a number toward `target` (instant if the user prefers reduced motion). */
export function useCountUp(target: number, ms = 600) {
  const [value, setValue] = useState(target);
  const from = useRef(target);

  useEffect(() => {
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : ms;
    const begin = from.current;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = duration > 0 ? Math.min(1, (now - start) / duration) : 1;
      const eased = 1 - Math.pow(1 - t, 3);
      const v = Math.round(begin + (target - begin) * eased);
      from.current = v;
      setValue(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);

  return value;
}
