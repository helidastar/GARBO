"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";
import { IconSparkles, IconSmartphone } from "@/components/ui/Icons";
import { ROUTES } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="start" className="relative py-16 md:py-24">
      <Container>
        <Parallax speed={-0.08}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-garnet via-[#590c19] to-[#360810] px-6 py-14 text-center text-white shadow-xl transition-all duration-300 md:px-14 md:py-20">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-saffron/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-saffron/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-saffron transition-transform hover:scale-105">
                <IconSparkles size={13} /> Ready, Wildcats?
              </span>
              <h2 className="mt-3 text-2xl font-black sm:text-4xl">
                Keep CIT-U clean and start earning your perks today.
              </h2>
              <p className="mt-3 text-sm text-white/80 sm:text-base">
                Create an account in 30 seconds with your student details.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button
                  href={ROUTES.register ?? "/register"}
                  size="lg"
                  className="flex items-center gap-2 rounded-xl bg-saffron px-7 py-3 text-sm font-black text-[#590c19] shadow-lg shadow-saffron/30 transition-all duration-200 hover:bg-[#ffbe4d] hover:shadow-xl active:scale-95"
                >
                  <IconSmartphone size={16} /> Sign Up with Student ID
                </Button>
                <Button
                  href={ROUTES.login ?? "/login"}
                  variant="outline"
                  size="lg"
                  className="rounded-xl border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-white/20 hover:border-white active:scale-95"
                >
                  Student Login
                </Button>
              </div>
            </div>
          </div>
        </Parallax>
      </Container>
    </section>
  );
}

export default FinalCta;