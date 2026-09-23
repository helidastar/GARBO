import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { Icon } from "@/components/Icon";
import { ProgressBar } from "@/components/ProgressBar";
import { currentUser, dailyMissions, leaderboard, weeklyChallenge } from "@/lib/mock-data";

const rankStyle = ["bg-gold text-accent-deep", "bg-track text-ink", "bg-surface-strong text-ink"];

export default function MissionsPage() {
  const doneCount = dailyMissions.filter((m) => m.done).length;

  return (
    <>
      <AppHeader variant="section" title="Sustainability Missions" />
      <main className="flex flex-col gap-4 px-4 pb-28">
        {/* Impact ledger */}
        <section className="relative flex items-center justify-between overflow-hidden rounded-lg bg-surface-muted p-4 shadow-card">
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-gold/20 to-gold/0" />
          <div className="relative flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded bg-gold shadow-card">
              <Icon name="ledger-medal" width={16} height={21} />
            </span>
            <div>
              <p className="text-label font-semibold text-accent uppercase">Your Impact Ledger</p>
              <p className="text-base leading-5 font-semibold text-ink">
                {currentUser.pointsThisWeek} pts earned
                <br />
                this week
              </p>
            </div>
          </div>
          <span className="relative rounded bg-primary px-2 py-1 text-caption font-semibold text-white shadow-card">
            Level {currentUser.level} {currentUser.levelTitle}
          </span>
        </section>

        {/* Today's missions */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="flex items-center gap-1 text-xl leading-7 font-semibold text-ink">
              <Icon name="mission-lg" width={16.667} />
              Today&apos;s Missions
            </h2>
            <span className="rounded-xl bg-surface-sunken px-2 py-1 text-label font-semibold text-ink-muted">
              {doneCount} of {dailyMissions.length} Done
            </span>
          </div>
          {dailyMissions.map((mission) =>
            mission.done ? (
              <div key={mission.title} className="flex items-center justify-between rounded-lg bg-surface-muted p-4 opacity-90 shadow-card">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded bg-success-deep">
                    <Icon name="check-mint" width={18.333} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-base leading-6 font-semibold text-ink line-through opacity-80">{mission.title}</p>
                    <p className="flex items-center gap-1 text-[13px] leading-5 font-semibold text-leaf">
                      <Icon name="check-small" width={14.667} height={14} />
                      {mission.description}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-xl bg-success-soft px-2 py-1 text-label font-bold text-success">+{mission.points} pts</span>
              </div>
            ) : (
              <div key={mission.title} className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-card">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded bg-surface-strong">
                      <Icon name="mission-recycle" width={19.275} height={19.25} />
                    </span>
                    <div>
                      <p className="text-base leading-6 font-semibold text-ink">{mission.title}</p>
                      <p className="text-[13px] leading-5 text-ink-muted">{mission.description}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-xl bg-gold-soft/50 px-2 py-1 text-label font-bold text-accent">+{mission.points} pts</span>
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-label font-semibold text-ink-muted">Target Progress</span>
                    <span className="text-label font-semibold text-primary-ink">
                      {mission.progress} / {mission.goal} completed
                    </span>
                  </div>
                  <ProgressBar value={mission.progress / mission.goal} />
                </div>
                <div className="flex justify-end pt-1">
                  <button type="button" className="flex items-center gap-1 rounded bg-primary px-4 py-2 shadow-card">
                    <span className="text-caption font-semibold text-white">Continue</span>
                    <Icon name="arrow-right-sm" width={12} />
                  </button>
                </div>
              </div>
            ),
          )}
        </section>

        {/* Weekly challenge */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="flex items-center gap-1 text-xl leading-7 font-semibold text-ink">
              <Icon name="challenge-flame" width={13.333} height={15.833} />
              Weekly Challenge
            </h2>
            <span className="text-label font-bold text-accent">Resets Sunday</span>
          </div>
          <div className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-card">
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-1 pt-1.5">
                <p className="text-label font-semibold text-accent uppercase">{weeklyChallenge.category}</p>
                <p className="text-xl leading-7 font-semibold text-ink">{weeklyChallenge.title}</p>
                <p className="text-[13px] leading-5 text-ink-muted">{weeklyChallenge.description}</p>
              </div>
              <span className="shrink-0 rounded-xl bg-accent px-2 py-1 text-label font-bold text-gold shadow-card">
                +{weeklyChallenge.points} pts
              </span>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-surface-muted p-3">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1 text-base leading-6 font-semibold text-ink">
                  <Icon name="bolt" width={13.333} height={16.667} />
                  {weeklyChallenge.daysActive} / 7 Days Active
                </p>
                <span className="text-label font-medium text-ink-muted">Keep it burning!</span>
              </div>
              <div className="grid grid-cols-7 gap-1 pt-1">
                {weeklyChallenge.days.map((d, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span className={`text-label ${d.state === "today" ? "font-bold text-primary-ink" : "font-semibold text-ink-muted"}`}>
                      {d.day}
                    </span>
                    <span
                      className={`flex size-8 items-center justify-center rounded ${
                        d.state === "done" ? "bg-gold shadow-card" : d.state === "today" ? "bg-primary shadow-card" : "bg-track"
                      }`}
                    >
                      {d.state === "locked" ? (
                        <Icon name="lock" width={10.667} height={14} />
                      ) : (
                        <Icon name={d.state === "today" ? "day-check-white" : "day-check"} width={12.225} height={9.019} />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Green Cup */}
        <section className="flex flex-col gap-2 pb-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="flex items-center gap-1 text-xl leading-7 font-semibold text-ink">
              <Icon name="trophy" width={15} />
              The Green Cup
            </h2>
            <span className="text-label font-semibold text-primary-ink">{leaderboard.term}</span>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-card">
            <div className="flex items-center justify-between pb-1">
              <div>
                <p className="text-label font-semibold text-accent uppercase">Inter-College Rivalry</p>
                <p className="text-base leading-6 font-semibold text-ink">GARBO Green Cup Leaderboard</p>
              </div>
              <span className="flex size-9 items-center justify-center rounded-xl bg-gold-soft">
                <Icon name="ribbon" width={8.333} height={16.667} />
              </span>
            </div>
            <ol className="flex flex-col gap-2">
              {leaderboard.rows.map((row, i) => (
                <li
                  key={row.rank}
                  className={`flex items-center justify-between gap-2 rounded p-3 shadow-card ${row.isMine ? "bg-surface-muted" : "bg-white"}`}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className={`flex size-8 shrink-0 items-center justify-center rounded-xl text-caption font-bold ${rankStyle[i]}`}>
                      {row.rank}
                    </span>
                    <div className="min-w-0">
                      <p className="flex items-center gap-1 text-base leading-6 font-semibold text-ink">
                        <span className="truncate">{row.college}</span>
                        {row.isMine && <Icon name="star-badge" width={13.333} alt="Your college" />}
                      </p>
                      <p className="text-label font-semibold text-ink-muted">{row.contributors.toLocaleString()} Active Contributors</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className={`text-base leading-6 font-bold ${row.isMine ? "text-accent" : "text-ink"}`}>{row.points.toLocaleString()}</p>
                    <p className="text-label font-semibold text-ink-muted">pts</p>
                  </div>
                </li>
              ))}
            </ol>
            <button type="button" className="flex items-center justify-center gap-2 rounded bg-surface-sunken px-4 py-3 shadow-card">
              <span className="text-base leading-6 font-semibold text-ink">View Full Leaderboard</span>
              <Icon name="list" width={13.5} height={15} />
            </button>
          </div>
        </section>
      </main>
      <BottomNav />
    </>
  );
}
