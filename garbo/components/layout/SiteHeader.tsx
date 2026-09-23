"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/cn";

const LINKS = [
  { id: "how", href: "#how", label: "How to Scan" },
  { id: "compete", href: "#compete", label: "Wildcat Cup" },
  { id: "rewards", href: "#rewards", label: "Rewards" },
  { id: "locations", href: "#locations", label: "Bin Map" },
];

const WATCH = ["top", "how", "compete", "rewards", "locations", "start"];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of WATCH) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b pt-safe backdrop-blur-xl transition-[box-shadow,background-color,border-color] duration-300",
        scrolled
          ? "border-line bg-surface/90 shadow-[0_10px_25px_-12px_rgba(151,40,40,0.18)]"
          : "border-transparent bg-bg/70",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link 
          href="/" 
          aria-label="GARBO CIT-U home" 
          className="group flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <Logo />
          <span className="hidden rounded-full border border-garnet/30 bg-garnet/10 px-2 py-0.5 text-[11px] font-black text-garnet transition-colors group-hover:bg-garnet group-hover:text-white sm:inline-block">
            CIT-U
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={l.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-sm font-semibold transition-all duration-200",
                  "after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:transition-transform after:duration-300",
                  isActive
                    ? "text-garnet after:scale-x-100 after:bg-saffron"
                    : "text-soft hover:text-garnet hover:bg-tint after:scale-x-0 after:bg-garnet hover:after:scale-x-100",
                )}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Link
            href={ROUTES.login ?? "/login"}
            className="rounded-xl px-3.5 py-2 text-sm font-bold text-garnet transition-all duration-200 hover:bg-garnet/10 hover:shadow-inner active:scale-95"
          >
            Log In
          </Link>
          <Button
            href={ROUTES.register ?? "/register"}
            size="sm"
            className="rounded-xl bg-garnet px-4 py-2 text-xs font-bold text-white shadow-md shadow-garnet/30 transition-all duration-200 hover:bg-[#7e1f1f] hover:shadow-lg hover:shadow-garnet/40 active:scale-95 sm:text-sm"
          >
            Sign Up
          </Button>
        </div>
      </Container>
    </header>
  );
}