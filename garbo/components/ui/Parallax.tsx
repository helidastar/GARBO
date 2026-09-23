"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 
   * Speed of parallax: 
   * Negative values (e.g. -0.15) float upwards faster as you scroll down.
   * Positive values (e.g. 0.15) lag behind to create deep background depth.
   */
  speed?: number;
  children: React.ReactNode;
  className?: string;
}

export function Parallax({
  speed = 0.15,
  children,
  className,
  style,
  ...props
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Respect accessibility reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if the element is inside or entering the viewport
      if (rect.bottom >= -100 && rect.top <= windowHeight + 100) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = elementCenter - viewportCenter;
        setOffset(distanceFromCenter * speed);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    updatePosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate3d(0, ${offset.toFixed(2)}px, 0)`,
        willChange: "transform",
        ...style,
      }}
      className={cn("transition-transform duration-100 ease-out", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Parallax;