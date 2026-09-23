"use client";

import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { Parallax } from "@/components/ui/Parallax";
import { IconMapPin, IconScan, IconRecycle, IconGift } from "@/components/ui/Icons";

const STEPS = [
  {
    step: "01",
    Icon: IconMapPin,
    title: "Find a Smart Bin",
    desc: "Locate any GARBO-enabled bin around CIT-U (GLE Building, NGE, Main Lobby, Library, or Wildcat Canteen).",
    parallaxSpeed: -0.06,
  },
  {
    step: "02",
    Icon: IconScan,
    title: "Scan the Bin QR",
    desc: "Open GARBO on your phone, tap 'Scan Bin', and frame the QR code on the compartment lid.",
    parallaxSpeed: 0.08,
  },
  {
    step: "03",
    Icon: IconRecycle,
    title: "Dispose Correctly",
    desc: "Drop your plastic bottle, cup, or clean paper. The bin verifies the disposal weight and sorting.",
    parallaxSpeed: -0.04,
  },
  {
    step: "04",
    Icon: IconGift,
    title: "Get Instant Points",
    desc: "Your personal points update instantly, adding points to your College team score for the Wildcat Cup!",
    parallaxSpeed: 0.09,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-16 md:py-24">
      {/* Background Subtle Accent */}
      <Parallax speed={0.2} className="pointer-events-none absolute top-10 left-10 -z-10">
        <div className="h-56 w-56 rounded-full bg-saffron/10 blur-2xl" />
      </Parallax>

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Parallax speed={-0.05}>
            <span className="text-xs font-bold uppercase tracking-widest text-tangerine">
              Quick & Simple
            </span>
            <h2 className="mt-2 text-2xl font-black text-ink sm:text-4xl">
              How to Use GARBO on Campus
            </h2>
            <p className="mt-3 text-sm text-body sm:text-base">
              No long tutorials needed. Dispose your waste properly between classes and earn rewards in seconds.
            </p>
          </Parallax>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => {
            const Icon = s.Icon;
            return (
              <Parallax key={s.step} speed={s.parallaxSpeed} className="h-full">
                <TiltCard
                  maxTilt={10}
                  className="group h-full rounded-2xl border border-line bg-surface/90 p-6 shadow-sm hover:border-saffron hover:shadow-xl hover:shadow-garnet/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tint text-garnet transition-transform duration-300 group-hover:scale-110 group-hover:text-saffron">
                      <Icon size={24} />
                    </span>
                    <span className="text-3xl font-black text-line transition-colors duration-300 group-hover:text-saffron">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-ink transition-colors group-hover:text-garnet">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-soft">
                    {s.desc}
                  </p>
                </TiltCard>
              </Parallax>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;