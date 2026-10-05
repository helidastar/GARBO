"use client";

import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { Parallax } from "@/components/ui/Parallax";
import {
  IconUtensils,
  IconPrinter,
  IconBag,
  IconDrink,
  IconArrowRight,
} from "@/components/ui/Icons";

const REWARDS = [
  {
    Icon: IconUtensils,
    title: "Canteen Meal Discounts",
    pts: "150 pts",
    desc: "₱20 - ₱50 off your lunch or snack at the Wildcat Cafeteria and participating kiosks.",
    speed: -0.07,
  },
  {
    Icon: IconPrinter,
    title: "Free Printing Passes",
    pts: "75 pts",
    desc: "10 free printed black & white pages at library and student center printing hubs.",
    speed: 0.08,
  },
  {
    Icon: IconBag,
    title: "CIT-U Wildcat Merch",
    pts: "400 pts",
    desc: "Exclusive maroon & gold stickers, custom lanyards, enamel pins, and eco-totes.",
    speed: -0.05,
  },
  {
    Icon: IconDrink,
    title: "Free Drink Upgrades",
    pts: "100 pts",
    desc: "Free size upsize on juices, milk tea, or coffee at student plaza beverage stalls.",
    speed: 0.09,
  },
];

export function RewardsSection() {
  return (
    <section id="rewards" className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Parallax speed={-0.05}>
            <span className="text-xs font-bold uppercase tracking-widest text-tangerine">
              Student Perks
            </span>
            <h2 className="mt-2 text-2xl font-black text-ink sm:text-4xl">
              Real Rewards for Being Responsible
            </h2>
            <p className="mt-3 text-sm text-body sm:text-base">
              Every piece of properly sorted trash translates into savings and campus treats.
            </p>
          </Parallax>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REWARDS.map((r) => {
            const Icon = r.Icon;
            return (
              <Parallax key={r.title} speed={r.speed} className="h-full">
                <TiltCard
                  maxTilt={12}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface/90 p-5 shadow-sm hover:border-saffron hover:shadow-xl hover:shadow-garnet/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-garnet transition-transform duration-300 group-hover:scale-110 group-hover:text-saffron">
                        <Icon size={22} />
                      </span>
                      <span className="rounded-full border border-saffron/40 bg-highlight px-2.5 py-1 text-xs font-black text-highlight-ink shadow-xs transition-transform group-hover:scale-105">
                        {r.pts}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-ink transition-colors group-hover:text-garnet">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-soft">{r.desc}</p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-line pt-3 text-xs font-bold text-garnet transition-colors group-hover:text-ember">
                    <span>Claim perk</span>
                    <IconArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </TiltCard>
              </Parallax>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default RewardsSection;