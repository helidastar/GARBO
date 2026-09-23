import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "neutral" | "points" | "success";

const tones: Record<Tone, string> = {
  neutral: "bg-muted text-ink",
  points: "bg-highlight text-highlight-ink", // "+10 pts", rewards, streak bonus
  success: "bg-success-soft text-success-ink", // verified, confidence
};

export function Chip({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-[.8125rem] font-semibold leading-snug",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
