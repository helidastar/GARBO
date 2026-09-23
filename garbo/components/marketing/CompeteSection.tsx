"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";
import { IconTrophy, IconCheck, IconMedal } from "@/components/ui/Icons";
import { ROUTES } from "@/lib/constants";

export function CompeteSection() {
  return (
    <section id="compete" className="relative overflow-hidden bg-gradient-to-br from-[#590c19] via-garnet to-[#3b060f] py-20 text-white">
      {/* Background Floating Orbs */}
      <Parallax speed={-0.3} className="pointer-events-none absolute -top-24 -left-24">
        <div className="h-80 w-80 rounded-full bg-saffron/25 blur-3xl" />
      </Parallax>
      <Parallax speed={0.25} className="pointer-events-none absolute -bottom-24 -right-24">
        <div className="h-80 w-80 rounded-full bg-saffron/20 blur-3xl" />
      </Parallax>

      <Container className="relative grid items-center gap-10 lg:grid-cols-12">
        {/* Left Column Copy */}
        <div className="lg:col-span-7">
          <Parallax speed={-0.08}>
            <span className="inline-flex items-center gap-2 rounded-full border border-saffron/40 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-saffron transition-transform hover:scale-105">
              <IconTrophy size={14} /> Inter-College Championship
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              The Wildcat Cup: Which college recycles best?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              Every bottle, can, or food container you properly dispose of earns points for your department. Will CEA take the crown, or will CCS, CMBA, CNAHS, or CASE claim this semester’s trophy?
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Live college standings updated with every bin scan",
                "Double-point flash events during CIT-U University Days",
                "Exclusive semester championship perks & department banner",
                "Individual Wildcat Top Recycler leaderboards",
              ].map((perk) => (
                <div key={perk} className="group flex items-center gap-3 transition-transform hover:translate-x-1">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron text-xs font-bold text-[#590c19] shadow-sm transition-transform group-hover:scale-110">
                    <IconCheck size={12} />
                  </span>
                  <span className="text-xs font-medium text-white/90 sm:text-sm">{perk}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={ROUTES.register ?? "/register"}
                size="lg"
                className="rounded-xl bg-saffron px-6 py-3 text-sm font-black text-[#590c19] shadow-lg shadow-saffron/30 transition-all duration-200 hover:bg-[#ffbe4d] hover:shadow-xl active:scale-95"
              >
                Join Your College Team
              </Button>
              <Button
                href={ROUTES.login ?? "/login"}
                variant="outline"
                size="lg"
                className="rounded-xl border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-white/20 hover:border-white active:scale-95"
              >
                View Full Standings
              </Button>
            </div>
          </Parallax>
        </div>

        {/* Right Column: Parallax Floating Leaderboard Card */}
        <div className="lg:col-span-5">
          <Parallax speed={0.12}>
            <div className="rounded-2xl border border-white/20 bg-black/30 p-5 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-base font-bold text-white">CIT-U Wildcat Cup</h3>
                  <p className="text-xs text-saffron">Semester 1 Standings</p>
                </div>
                <IconTrophy size={26} className="text-saffron animate-bounce" />
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  { rank: "1st", team: "College of Eng'g & Architecture (CEA)", pts: "12,450 pts", bar: "w-full", gold: true },
                  { rank: "2nd", team: "College of Computer Studies (CCS)", pts: "11,890 pts", bar: "w-[92%]" },
                  { rank: "3rd", team: "College of Mgt, Business & Acct (CMBA)", pts: "9,640 pts", bar: "w-[78%]" },
                  { rank: "4th", team: "College of Arts, Sci & Educ (CASE)", pts: "8,120 pts", bar: "w-[65%]" },
                  { rank: "5th", team: "College of Nursing & Allied Health (CNAHS)", pts: "7,430 pts", bar: "w-[60%]" },
                ].map((c) => (
                  <div
                    key={c.team}
                    className={`group rounded-xl p-3 transition-all duration-200 cursor-pointer ${
                      c.gold
                        ? "bg-saffron/20 border border-saffron/50 hover:bg-saffron/30 hover:scale-[1.02]"
                        : "bg-white/5 border border-transparent hover:bg-white/10 hover:border-white/20 hover:scale-[1.01]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="flex items-center gap-2">
                        {c.gold ? (
                          <IconMedal size={16} className="text-saffron" />
                        ) : (
                          <span className="text-white/60 w-4 text-center">{c.rank}</span>
                        )}
                        <span className="truncate max-w-[210px]">{c.team}</span>
                      </span>
                      <span className="font-mono text-saffron font-black group-hover:scale-105 transition-transform">
                        {c.pts}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-500 ${c.gold ? "bg-saffron" : "bg-white/40 group-hover:bg-white/70"} ${c.bar}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Parallax>
        </div>
      </Container>
    </section>
  );
}

export default CompeteSection;