import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

type Tone = "default" | "alt" | "brand";

const tones: Record<Tone, string> = {
  default: "",
  alt: "border-y border-line bg-surface",
  brand: "bg-band text-on-band",
};

export function Section({
  id,
  tone = "default",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  /** classes for the inner Container (grid layouts etc.) */
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-14 lg:py-24", tones[tone])}>
      <Container className={className}>{children}</Container>
    </section>
  );
}
