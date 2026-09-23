"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Parallax } from "@/components/ui/Parallax";
import {
  IconBuilding,
  IconUtensils,
  IconLaptop,
  IconTrees,
  IconBook,
  IconActivity,
  IconArrowRight,
} from "@/components/ui/Icons";
import { ROUTES } from "@/lib/constants";

const BIN_LOCATIONS = [
  { name: "GLE Building Lobby", status: "Active • 4 Bins", Icon: IconBuilding },
  { name: "Wildcat Canteen", status: "Active • 6 Bins", Icon: IconUtensils },
  { name: "NGE Building 2nd Floor", status: "Active • 3 Bins", Icon: IconLaptop },
  { name: "Main Campus Quadrangle", status: "Active • 5 Bins", Icon: IconTrees },
  { name: "University Library", status: "Active • 2 Bins", Icon: IconBook },
  { name: "Gymnasium & Covered Court", status: "Active • 4 Bins", Icon: IconActivity },
];

export function CampusBand() {
  return (
    <section id="locations" className="border-y border-line bg-tint py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Parallax speed={-0.08}>
            <span className="text-xs font-bold uppercase tracking-widest text-garnet">
              Around CIT-U Campus
            </span>
            <h2 className="mt-2 text-2xl font-black text-ink sm:text-3xl">
              Where are the Smart Bins located?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-body">
              GARBO smart bins are stationed across high-traffic spots around CIT-U. Simply walk up, scan, and drop your recyclables.
            </p>
            <div className="mt-5">
              <Link
                href={ROUTES.register ?? "/register"}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-garnet transition-all duration-200 hover:text-ember hover:underline active:scale-95"
              >
                <span>Register now to start scanning</span>
                <IconArrowRight size={13} />
              </Link>
            </div>
          </Parallax>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
          {BIN_LOCATIONS.map((loc, idx) => {
            const Icon = loc.Icon;
            return (
              <Parallax key={loc.name} speed={idx % 2 === 0 ? -0.04 : 0.05}>
                <div className="group flex items-center gap-3 rounded-xl border border-line bg-surface p-3.5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-saffron hover:shadow-md cursor-pointer active:scale-98">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tint text-garnet transition-transform group-hover:scale-110 group-hover:text-saffron">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-ink transition-colors group-hover:text-garnet">{loc.name}</div>
                    <div className="text-[11px] font-semibold text-success flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                      {loc.status}
                    </div>
                  </div>
                </div>
              </Parallax>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default CampusBand;