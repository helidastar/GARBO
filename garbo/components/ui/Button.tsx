import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};
type AsLink = Common & { href: string } & Omit<ComponentPropsWithoutRef<"a">, keyof Common | "href">;
type AsButton = Common & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, keyof Common>;
export type ButtonProps = AsLink | AsButton;

const base =
  "inline-flex items-center justify-center rounded-xl border-2 font-semibold leading-none transition-[filter,background-color] cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "border-brand bg-brand text-on-brand hover:brightness-110",
  ghost: "border-link bg-transparent text-link hover:bg-muted",
  light: "border-on-band bg-on-band text-garnet hover:brightness-95",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 text-[.9375rem]",
  md: "min-h-12 px-5 text-base",
  lg: "min-h-14 px-7 text-[1.0625rem]",
};

/** Renders a Next <Link> when `href` is given, otherwise a <button>. */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, ...anchor } = props;
    return (
      <Link {...anchor} className={classes}>
        {children}
      </Link>
    );
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...button } = props;
  return (
    <button type="button" {...button} className={classes}>
      {children}
    </button>
  );
}
