import Image from "next/image";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { Icon } from "@/components/Icon";
import { ProgressBar } from "@/components/ProgressBar";
import { badgeTotals, badges, currentUser, profileStats } from "@/lib/mock-data";

const menu = [
  { icon: "history", size: [16.25, 13.333], title: "Disposal History", subtitle: "Recent activity & logs across campus", trailing: "time" },
  { icon: "gift", size: [16.667, 15.833], title: "Redeem Points & Rewards", subtitle: "Cafeteria vouchers, library credits", trailing: "dot" },
  { icon: "warning", size: [18.333, 15.833], title: "Reported Issues Status", subtitle: "Full bin alerts & contamination tickets", trailing: "resolved" },
  { icon: "settings", size: [16.542, 14.167], title: "Account Settings", subtitle: "Student verification, notifications", trailing: null },
] as const;

export default function ProfilePage() {
  return (
    <>
      <AppHeader variant="section" title="Student Profile" />
      <main className="flex flex-col gap-4 px-4 pb-28">
        {/* Profile card */}
        <section className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-white p-4 shadow-card">
          <Image src="/images/watermark.svg" alt="" width={112} height={120} className="absolute -right-6 -bottom-8" />
          <div className="relative flex gap-4">
            <div className="relative shrink-0">
              <Image src={currentUser.avatarUrl} alt={currentUser.displayName} width={80} height={80} className="rounded-lg shadow-card" />
              <span className="absolute -right-1.5 -bottom-1.5 flex items-center gap-0.5 rounded-sm bg-gold px-1 py-0.5">
                <Icon name="shield" width={8} height={10} />
                <span className="text-[10px] leading-4 font-bold tracking-[0.5px] text-accent-deep uppercase">LVL {currentUser.level}</span>
              </span>
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="flex items-center gap-1 text-xl leading-7 font-semibold text-ink">
                {currentUser.displayName}
                <Icon name="verified-lg" width={16.5} height={15.75} alt="Verified student" />
              </p>
              <p className="truncate text-[13px] leading-5 text-ink-muted">
                ID: #{currentUser.studentId} • {currentUser.college}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="flex items-center gap-1 rounded-sm bg-surface-sunken px-2 py-1">
                  <Icon name="coins" width={14.667} height={10.667} />
                  <span className="text-caption font-semibold text-ink">
                    {currentUser.points.toLocaleString()} <span className="text-ink-muted">PTS</span>
                  </span>
                </span>
                <span className="flex items-center gap-1 rounded-sm bg-gold-soft px-2 py-1">
                  <Icon name="flame-streak" width={10} height={11.25} />
                  <span className="text-caption font-semibold text-accent-ink">{currentUser.streakDays}-Day Streak</span>
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-1.5 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-label font-semibold text-ink-muted uppercase">Academic Term Rank • Tier {currentUser.tier}</span>
              <span className="text-label font-medium text-ink">
                {currentUser.pointsToNextLevel} pts to Level {currentUser.level + 1}
              </span>
            </div>
            <ProgressBar value={currentUser.levelProgress} trackClassName="bg-surface-sunken" />
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-2">
          <StatTile label="Disposed" value={profileStats.disposed} unit="items" valueColor="text-ink">
            <span className="flex items-center gap-0.5 text-label font-medium text-mint">
              <Icon name="trend-up" width={9.333} />+{profileStats.disposedThisWeek} this wk
            </span>
          </StatTile>
          <StatTile label="Recycled" value={profileStats.recycled} unit="units" valueColor="text-success-deep">
            <span className="text-label text-ink-muted">{profileStats.recycledRatio} ratio</span>
          </StatTile>
          <StatTile label="Missions" value={profileStats.missionsDone} unit="done" valueColor="text-primary">
            <span className="flex items-center gap-0.5 text-label font-medium text-accent">
              <Icon name="ribbon-small" width={5.833} height={11.667} />
              {profileStats.missionsPercentile}
            </span>
          </StatTile>
        </section>

        {/* Badges */}
        <section className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-base leading-6 font-semibold text-ink">
              <Icon name="ribbon-gold" width={8.333} height={16.667} />
              Earned Badges
            </h2>
            <span className="text-label font-medium text-ink-muted">
              {badgeTotals.unlocked} of {badgeTotals.total} unlocked
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {badges.map((badge) => (
              <div key={badge.name} className="flex min-h-[111px] flex-col justify-between rounded bg-surface-muted p-3">
                <div className="flex items-start justify-between">
                  <span
                    className={`flex size-9 items-center justify-center rounded-sm text-lg ${
                      badge.state === "active" ? "bg-gold-soft" : badge.state === "progress" ? "bg-track opacity-80" : "bg-surface-sunken"
                    }`}
                  >
                    {badge.emoji}
                  </span>
                  <BadgeState state={badge.state} progress={badge.progress} />
                </div>
                <div className="flex flex-col gap-0.5 pt-2">
                  <p className="text-sm leading-[17.5px] font-semibold text-ink">{badge.name}</p>
                  {badge.state === "progress" ? (
                    <ProgressBar value={badge.progress ?? 0} className="mt-1 h-1.5" trackClassName="bg-surface-sunken" barClassName="bg-accent" />
                  ) : (
                    <p className="truncate text-caption tracking-normal text-ink-muted">{badge.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Menu */}
        <section className="overflow-hidden rounded-lg bg-white shadow-card">
          {menu.map((item, i) => (
            <button
              key={item.title}
              type="button"
              className={`flex w-full items-center justify-between gap-2 p-4 text-left ${i > 0 ? "border-t border-surface-muted" : ""}`}
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded bg-surface-muted">
                  <Icon name={item.icon} width={item.size[0]} height={item.size[1]} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] leading-6 font-semibold text-ink">{item.title}</span>
                  <span className="block truncate text-[13px] leading-5 text-ink-muted">{item.subtitle}</span>
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                {item.trailing === "time" && (
                  <span className="rounded-sm bg-surface-sunken px-2 py-0.5 text-label font-medium text-ink">2h ago</span>
                )}
                {item.trailing === "dot" && <span className="size-2 rounded-xl bg-primary" aria-label="New rewards" />}
                {item.trailing === "resolved" && (
                  <span className="rounded-sm bg-success-soft px-2 py-0.5 text-label font-medium text-success-ink">1 Resolved</span>
                )}
                <Icon name="chevron-right" width={5.55} height={9} />
              </span>
            </button>
          ))}
        </section>

        {/* Institutional validation */}
        <section className="flex items-center gap-3 rounded-lg bg-surface-muted p-4">
          <Icon name="institution" width={22} height={23} className="shrink-0" />
          <div>
            <p className="text-label font-semibold text-ink-muted uppercase">Institutional Validation</p>
            <p className="text-caption leading-[19.5px] tracking-normal text-ink-muted">
              Activity is automatically credited to the {currentUser.college} Sustainable Campus Honor Roll for Academic Year
              2024–2025.
            </p>
          </div>
        </section>
      </main>
      <BottomNav />
    </>
  );
}

function StatTile({
  label,
  value,
  unit,
  valueColor,
  children,
}: {
  label: string;
  value: number;
  unit: string;
  valueColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between rounded bg-white p-3">
      <p className="text-label font-semibold text-ink-muted uppercase">{label}</p>
      <p className="flex items-baseline gap-1 pt-1">
        <span className={`text-2xl leading-8 font-bold tracking-[-0.24px] ${valueColor}`}>{value}</span>
        <span className="text-label font-semibold text-ink-muted">{unit}</span>
      </p>
      <div className="pt-2">{children}</div>
    </div>
  );
}

function BadgeState({ state, progress }: { state: "earned" | "active" | "progress"; progress?: number }) {
  if (state === "earned") {
    return <span className="rounded-sm bg-surface-sunken px-1.5 py-0.5 text-[10px] leading-4 font-bold text-mint uppercase">Earned</span>;
  }
  if (state === "active") {
    return <span className="rounded-sm bg-gold-soft px-1.5 py-0.5 text-[10px] leading-4 font-bold text-accent-ink uppercase">Active</span>;
  }
  return (
    <span className="rounded-sm bg-surface-strong px-1.5 py-0.5 text-[10px] leading-4 font-bold text-ink-muted">
      {Math.round((progress ?? 0) * 100)}%
    </span>
  );
}
