import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Page-width wrapper: 16px gutters on phones, wider on tablet/desktop. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1120px] px-4 md:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
