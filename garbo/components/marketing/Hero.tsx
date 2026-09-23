"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { Parallax } from "@/components/ui/Parallax";
import {
  IconSmartphone,
  IconQrCode,
  IconTrophy,
  IconCoffee,
  IconPrinter,
  IconSparkles,
  IconArrowRight,
  IconMedal,
} from "@/components/ui/Icons";
import { ROUTES } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-14 md:pb-24">
      {/* Parallax Background Glowing Orbs */}
      <Parallax speed={-0.25} className="pointer-events-none absolute -top-20 left-1/2 -z-10 -translate-x-1/2">
        <div className="h-72 w-[480px] rounded-full bg-saffron/25 blur-3xl" />
      </Parallax>
      <Parallax speed={0.3} className="pointer-events-none absolute top-40 right-4 -z-10">
        <div className="h-64 w-64 rounded-full bg-garnet/20 blur-3xl" />
      </Parallax>

      <Container className="grid items-center gap-10 lg:grid-cols-12">
        {/* Left Column: Student Pitch */}
        <div className="text-center lg:col-span-7 lg:text-left">
          <Parallax speed={-0.08} className="inline-block">
            <div className="inline-flex items-center gap-2 rounded-full border border-saffron/50 bg-highlight px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-highlight-ink transition-transform hover:scale-105">
              <span className="h-2 w-2 rounded-full bg-saffron animate-ping" />
              Made for CIT-U Wildcats
            </div>
          </Parallax>

          <h1 className="mt-5 text-3xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Scan your trash.{" "}
            <span className="bg-gradient-to-r from-garnet via-ember to-saffron bg-clip-text text-transparent">
              Earn perks. Rep your college.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-body sm:text-lg">
            GARBO is CIT-U’s student app for smart recycling. Scan the QR code on campus bins, properly sort your waste, and rack up points for canteen meals, printing, and the inter-college leaderboard.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center justify-center lg:justify-start">
            <Button
              href={ROUTES.register ?? "/register"}
              size="lg"
              className="group relative overflow-hidden rounded-2xl bg-garnet px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-garnet/30 transition-all duration-200 hover:bg-[#7e1f1f] hover:shadow-2xl hover:shadow-garnet/40 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <IconSmartphone size={18} /> Sign Up with CIT-U ID
              </span>
            </Button>

            <Button
              href="#how"
              variant="outline"
              size="lg"
              className="group rounded-2xl border border-line bg-surface/80 px-6 py-3.5 text-base font-bold text-ink backdrop-blur-sm transition-all duration-200 hover:bg-muted hover:border-saffron active:scale-95"
            >
              <span className="flex items-center gap-2">
                How it Works <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          {/* Quick Campus Stats */}
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-line pt-5 sm:gap-6">
            <TiltCard maxTilt={6} glare={false} className="group rounded-xl bg-surface/70 p-3 border border-line hover:border-saffron hover:shadow-md">
              <div className="text-xl font-black text-garnet transition-transform group-hover:scale-105 sm:text-2xl">5,200+</div>
              <div className="text-[11px] font-semibold text-soft sm:text-xs">Active Wildcats</div>
            </TiltCard>
            <TiltCard maxTilt={6} glare={false} className="group rounded-xl bg-surface/70 p-3 border border-line hover:border-saffron hover:shadow-md">
              <div className="text-xl font-black text-tangerine transition-transform group-hover:scale-105 sm:text-2xl">24 Bins</div>
              <div className="text-[11px] font-semibold text-soft sm:text-xs">Across Campus</div>
            </TiltCard>
            <TiltCard maxTilt={6} glare={false} className="group rounded-xl bg-surface/70 p-3 border border-line hover:border-saffron hover:shadow-md">
              <div className="text-xl font-black text-garnet transition-transform group-hover:scale-105 sm:text-2xl">18.4k</div>
              <div className="text-[11px] font-semibold text-soft sm:text-xs">Bottles Recycled</div>
            </TiltCard>
          </div>
        </div>

        {/* Right Column: Parallax Floating Phone Mockup */}
        <div className="relative mx-auto w-full max-w-sm lg:col-span-5">
          <Parallax speed={-0.12}>
            <TiltCard maxTilt={14} scale={1.03} className="rounded-[2.5rem] border-[6px] border-[#360810] bg-[#1a0509] p-3 shadow-2xl shadow-garnet/30">
              <div className="overflow-hidden rounded-[2rem] bg-tint p-4 text-ink">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <div>
                    <div className="text-[11px] font-bold text-soft flex items-center gap-1">
                      <span>Hey, Wildcat!</span>
                      <IconSparkles size={13} className="text-saffron" />
                    </div>
                    <div className="text-sm font-black text-garnet">Juan Dela Cruz</div>
                  </div>
                  <div className="rounded-full bg-highlight px-2.5 py-1 text-xs font-black text-highlight-ink border border-saffron/40 shadow-sm flex items-center gap-1">
                    <span className="text-saffron">⚡</span> 340 pts
                  </div>
                </div>

                {/* QR Scanner Banner */}
                <div className="mt-3 cursor-pointer rounded-2xl bg-gradient-to-br from-garnet to-[#540c17] p-4 text-white shadow-md transition-all duration-200 hover:brightness-110 active:scale-98">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron text-ink shadow-sm">
                      <IconQrCode size={24} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-saffron">Near a Smart Bin?</div>
                      <div className="text-sm font-extrabold">Tap to Scan QR Code</div>
                    </div>
                  </div>
                </div>

                {/* College Standings Mini Card */}
                <div className="mt-3 rounded-2xl border border-line bg-surface p-3.5 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-soft">
                    <span className="flex items-center gap-1.5">
                      <IconTrophy size={14} className="text-saffron" /> CIT-U Standings
                    </span>
                    <span className="text-garnet">Week 4</span>
                  </div>
                  
                  <div className="mt-2.5 space-y-2">
                    {[
                      { college: "CEA (Engineering)", pts: "4,920", medalColor: "text-saffron" },
                      { college: "CCS (Computer Studies)", pts: "4,680", medalColor: "text-slate-400" },
                      { college: "CMBA (Business)", pts: "3,810", medalColor: "text-amber-700" },
                    ].map((c) => (
                      <div 
                        key={c.college} 
                        className="flex items-center justify-between rounded-lg bg-tint px-2.5 py-1.5 text-xs font-semibold transition-all duration-200 hover:bg-muted hover:translate-x-1"
                      >
                        <span className="flex items-center gap-1.5">
                          <IconMedal size={14} className={c.medalColor} />
                          <span className="text-ink font-bold">{c.college}</span>
                        </span>
                        <span className="font-mono text-garnet font-black">{c.pts}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="cursor-pointer rounded-xl border border-line bg-surface p-2.5 text-center transition-all duration-200 hover:border-saffron hover:shadow-sm active:scale-95 flex flex-col items-center gap-1">
                    <IconCoffee size={20} className="text-garnet" />
                    <div className="text-[11px] font-bold text-ink">Canteen Discount</div>
                  </div>
                  <div className="cursor-pointer rounded-xl border border-line bg-surface p-2.5 text-center transition-all duration-200 hover:border-saffron hover:shadow-sm active:scale-95 flex flex-col items-center gap-1">
                    <IconPrinter size={20} className="text-tangerine" />
                    <div className="text-[11px] font-bold text-ink">Free Printing</div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </Parallax>
        </div>
      </Container>
    </section>
  );
}

export default Hero;