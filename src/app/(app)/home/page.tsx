import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { Icon } from "@/components/Icon";
import { ProgressBar } from "@/components/ProgressBar";
import { currentUser, leaderboard, nearestBin, todaysMission, weeklyImpact } from "@/lib/mock-data";

export default function HomePage() {
  const remaining = todaysMission.goal - todaysMission.progress;
  const leader = leaderboard.rows[0];

  return (
    <>
      <AppHeader variant="home" />
      <main className="flex flex-col gap-4 px-4 pt-3 pb-28">
        {/* Student summary */}
        <section className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-xl leading-7 font-bold tracking-[-0.5px] text-primary-ink">Hi, {currentUser.firstName} 👋</h1>
              <p className="flex items-center gap-1 text-[13px] leading-5 text-ink-muted">
                <Icon name="college" width={13.75} height={11.25} />
                {currentUser.college}
              </p>
            </div>
            <span className="rounded bg-gold-soft/30 px-2 py-1 text-label font-bold text-accent">{currentUser.collegeTag}</span>
          </div>
          <div className="flex gap-2 border-t border-surface-strong/60 pt-1.5">
            <div className="flex flex-1 flex-col gap-0.5 p-1">
              <p className="text-label font-medium text-ink-muted uppercase">GARBO Points</p>
              <p className="flex items-baseline gap-1">
                <span className="text-xl leading-7 font-bold text-primary-ink">{currentUser.points.toLocaleString()}</span>
                <span className="text-caption font-bold text-accent">PTS</span>
              </p>
              <p className="text-label font-semibold text-success">≈ {currentUser.printCredits} Print Credits</p>
            </div>
            <div className="flex flex-1 flex-col gap-0.5 p-1">
              <p className="text-label font-medium text-ink-muted uppercase">Eco Streak</p>
              <p className="flex items-center gap-1">
                <span className="text-xl leading-7 font-bold text-ink">{currentUser.streakDays}</span>
                <span className="text-base leading-6 font-medium text-ink-muted">Days</span>
                <Icon name="flame" width={12} height={14.25} />
              </p>
              <p className="text-label font-bold text-accent">Active &amp; on track!</p>
            </div>
          </div>
        </section>

        {/* Primary action + quick actions */}
        <section className="flex flex-col gap-2">
          <Link href="/scan" className="flex items-center justify-between rounded-lg bg-primary p-4 shadow-raised">
            <span className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-lg bg-white/15">
                <Icon name="camera" width={23.333} height={21} />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-base leading-5 font-bold text-white">Scan Waste to Earn Points</span>
                <span className="text-[13px] leading-5 text-primary-tint opacity-90">Identify item &amp; find the right bin</span>
              </span>
            </span>
            <span className="flex size-9 items-center justify-center rounded-xl bg-accent">
              <Icon name="arrow-right-light" width={13.333} />
            </span>
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/map" className="flex min-w-0 items-center gap-2.5 rounded-lg bg-white p-3 shadow-card">
              <span className="flex size-9 shrink-0 items-center justify-center rounded bg-surface-sunken">
                <Icon name="navigate" width={15} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-base leading-6 font-bold text-ink">Find Nearest</span>
                <span className="block truncate text-label font-semibold text-success">
                  {nearestBin.distanceM}m away • {nearestBin.direction}
                </span>
              </span>
            </Link>
            <button type="button" className="flex min-w-0 items-center gap-2.5 rounded-lg bg-white p-3 text-left shadow-card">
              <span className="flex size-9 shrink-0 items-center justify-center rounded bg-surface-sunken">
                <Icon name="flag" width={12.5} height={14.167} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-base leading-6 font-bold text-ink">Report Issue</span>
                <span className="block truncate text-label font-medium text-ink-muted">Overflow or damage</span>
              </span>
            </button>
          </div>
        </section>

        {/* Today's mission */}
        <section className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-1.5 text-base leading-6 font-bold text-ink">
              <Icon name="mission" width={15} />
              Today&apos;s Mission
            </h2>
            <span className="rounded-sm bg-success-soft px-2 py-0.5 text-label font-bold text-success-ink">
              +{todaysMission.points} PTS
            </span>
          </div>
          <div className="flex flex-col gap-1.5 rounded bg-surface-muted p-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[15px] leading-6 font-semibold text-ink">{todaysMission.title}</p>
              <p className="shrink-0 text-label font-bold text-primary-ink">
                {todaysMission.progress} of {todaysMission.goal} completed
              </p>
            </div>
            <ProgressBar value={todaysMission.progress / todaysMission.goal} />
            <div className="flex items-center justify-between gap-4 pt-1">
              <p className="text-label font-semibold text-ink-muted">
                Only {remaining} item left to earn today&apos;s bonus!
              </p>
              <Link href="/missions" className="shrink-0 text-center text-label font-bold text-primary-ink">
                Complete Mission
                <br />→
              </Link>
            </div>
          </div>
        </section>

        {/* Weekly impact */}
        <section className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-1.5 text-base leading-6 font-bold text-ink">
              <Icon name="leaf" width={12.747} height={12.744} />
              Your Impact
            </h2>
            <span className="text-label font-semibold text-ink-muted">This Week</span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <ImpactTile value={weeklyImpact.itemsRecycled} label="Items Recycled" color="text-primary-ink" />
            <ImpactTile value={weeklyImpact.itemsDisposed} label="Items Properly Disposed" color="text-success" />
            <ImpactTile value={`${weeklyImpact.properSortingPercent}%`} label="Proper Sorting" color="text-accent" />
          </div>
        </section>

        {/* Leaderboard teaser */}
        <section className="flex items-center justify-between rounded-lg bg-gold-soft/30 p-3 shadow-card">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded bg-accent">
              <Icon name="trophy-light" width={15} />
            </span>
            <div className="min-w-0">
              <p className="text-label font-bold text-accent uppercase">GARBO Green Cup</p>
              <p className="truncate text-[15px] leading-6 font-bold text-ink">{leader.college} is #1!</p>
            </div>
          </div>
          <Link href="/missions" className="shrink-0 pl-2 text-label font-bold text-primary-ink">
            View Leaderboard →
          </Link>
        </section>
      </main>
      <BottomNav />
    </>
  );
}

function ImpactTile({ value, label, color }: { value: number | string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 rounded bg-surface-muted p-2.5 text-center">
      <span className={`text-xl leading-7 font-bold ${color}`}>{value}</span>
      <span className="text-label font-semibold text-ink-muted">{label}</span>
    </div>
  );
}
