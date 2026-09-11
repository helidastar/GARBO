"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icon";

const tabs = [
  { href: "/home", label: "Home", icon: "home", size: { active: [16.5, 16.5], idle: [20.167, 18.333] } },
  { href: "/map", label: "Map", icon: "map", size: { active: [16.5, 16.5], idle: [16.5, 16.5] } },
  { href: "/missions", label: "Missions", icon: "missions", size: { active: [20.167, 19.25], idle: [20.167, 19.25] } },
  { href: "/profile", label: "Profile", icon: "profile", size: { active: [18.333, 18.333], idle: [18.333, 18.333] } },
] as const;

function Tab({ tab, active }: { tab: (typeof tabs)[number]; active: boolean }) {
  const [w, h] = active ? tab.size.active : tab.size.idle;
  return (
    <Link
      href={tab.href}
      aria-current={active ? "page" : undefined}
      className="flex min-h-11 min-w-14 flex-col items-center justify-center gap-1"
    >
      <span className="flex h-5 items-center">
        <Icon name={`nav/${tab.icon}${active ? "-active" : ""}`} width={w} height={h} />
      </span>
      <span className={`text-label font-semibold ${active ? "text-primary" : "text-ink-muted"}`}>{tab.label}</span>
    </Link>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);
  const [home, map, missions, profile] = tabs;

  return (
    <nav
      aria-label="Main"
      className="fixed bottom-0 left-1/2 z-30 w-full max-w-[390px] -translate-x-1/2 bg-canvas/95 shadow-[0_-2px_12px_0_rgba(0,0,0,0.05)] backdrop-blur-md"
    >
      <div className="flex h-16 items-center justify-around px-1">
        <Tab tab={home} active={isActive(home.href)} />
        <Tab tab={map} active={isActive(map.href)} />
        <Link href="/scan" className="flex min-w-14 flex-col items-center justify-center">
          <span className="-mt-5 flex size-12 items-center justify-center rounded-xl bg-primary shadow-raised">
            <Icon name="nav/scan" width={21.667} />
          </span>
          <span className="pt-1 text-label font-bold text-primary-ink">Scan</span>
        </Link>
        <Tab tab={missions} active={isActive(missions.href)} />
        <Tab tab={profile} active={isActive(profile.href)} />
      </div>
    </nav>
  );
}
