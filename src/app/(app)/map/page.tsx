"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { Icon } from "@/components/Icon";
import { mapBins, nearestBin, streamFilters, type BinStatus, type Stream } from "@/lib/mock-data";

const statusDot: Record<BinStatus, string> = {
  ok: "bg-success",
  filling: "bg-gold",
  full: "bg-danger",
};

const streamIcon: Record<Stream, { name: string; size: [number, number] }> = {
  recycle: { name: "stream-recycle", size: [14.018, 14] },
  compost: { name: "stream-compost", size: [12.667, 14.333] },
  general: { name: "stream-general", size: [10.667, 12] },
};

const filterIcon: Partial<Record<Stream, { name: string; size: [number, number] }>> = {
  recycle: { name: "filter-recycle", size: [14.018, 14] },
  compost: { name: "filter-compost", size: [12.667, 14.333] },
  general: { name: "stream-general", size: [10.667, 12] },
};

const rooms = [
  { label: "ROBOTICS LAB", inset: "22.5% 62.82% 60% 11.54%", svg: "room-left", labelLeft: "24.4%", labelTop: 116 },
  { label: "LECTURE 201", inset: "22.5% 7.69% 60% 70.51%", svg: "room-right", labelLeft: "81.3%", labelTop: 116 },
  { label: "MAKERSPACE", inset: "65% 62.82% 17.5% 11.54%", svg: "room-left", labelLeft: "24.4%", labelTop: 286 },
  { label: "STUDY LOUNGE", inset: "65% 7.69% 17.5% 70.51%", svg: "room-right", labelLeft: "81.3%", labelTop: 286 },
];

export default function MapPage() {
  const [filter, setFilter] = useState<Stream | "all">("all");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(false), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const visibleBins = mapBins.filter((bin) => filter === "all" || bin.stream === filter || bin.selected);

  return (
    <>
      <AppHeader variant="section" title="Campus Map" />
      <main className="pb-28">
        {/* Search + filters */}
        <div className="flex flex-col gap-2 px-4 pt-2 pb-3">
          <label className="flex h-11 items-center gap-2 rounded bg-white px-3 shadow-card">
            <Icon name="search" width={23} height={15} />
            <input
              type="search"
              placeholder="Search building, floor, or item (e.g. coffee cup)..."
              className="min-w-0 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-ink-subtle"
            />
            <button type="button" aria-label="Locate me" className="flex h-8 w-7 items-center justify-center">
              <Icon name="locate" width={16.425} />
            </button>
          </label>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            {streamFilters.map((f) => {
              const active = filter === f.key;
              const icon = f.key === "all" ? undefined : filterIcon[f.key];
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  aria-pressed={active}
                  className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 shadow-card ${active ? "bg-primary" : "bg-white"}`}
                >
                  {icon && !active && <Icon name={icon.name} width={icon.size[0]} height={icon.size[1]} />}
                  <span className={`text-caption font-semibold ${active ? "text-white" : "text-ink"}`}>{f.label}</span>
                  <span
                    className={`text-label font-semibold ${active ? "rounded-xl bg-white/20 px-1.5 py-0.5 text-white" : "text-ink-subtle"}`}
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Floor plan */}
        <div className="relative h-[400px] overflow-hidden bg-surface-sunken">
          <div className="absolute" style={{ inset: "20% 6.41% 15% 8.97%" }}>
            <Image src="/images/map/corridor.svg" alt="" fill />
          </div>
          {rooms.map((room) => (
            <div key={room.label}>
              <div className="absolute" style={{ inset: room.inset }}>
                <Image src={`/images/map/${room.svg}.svg`} alt="" fill />
              </div>
              <span
                className="absolute -translate-x-1/2 text-[9px] font-semibold tracking-[0.45px] whitespace-nowrap text-ink-subtle"
                style={{ left: room.labelLeft, top: room.labelTop }}
              >
                {room.label}
              </span>
            </div>
          ))}
          <span className="absolute top-[200px] left-[54%] text-[10px] font-bold tracking-[0.8px] whitespace-nowrap text-ink-muted">
            EAST ATRIUM (FL 2)
          </span>
          <div className="absolute" style={{ inset: "41.25% 37.69% 47.5% 53.85%" }}>
            <Image src="/images/map/guide-path.svg" alt="" fill />
          </div>

          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-xl bg-white/90 px-2.5 py-1 shadow-card backdrop-blur-sm">
            <span className="size-2 rounded-xl bg-mint" />
            <span className="text-label font-semibold text-ink-muted">Campus GPS Active</span>
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-xl bg-white/90 px-2.5 py-1 shadow-card backdrop-blur-sm">
            <Icon name="layers" width={11.25} height={11.906} />
            <span className="text-label font-semibold text-ink">Level 2: Tech Wing</span>
          </div>

          {/* You are here */}
          <div className="absolute top-[202px] left-[53.1%] flex items-center justify-center">
            <span className="absolute -top-2 -left-2 size-8 rounded-xl bg-primary-soft/50" />
            <span className="relative flex size-4 items-center justify-center rounded-xl border-2 border-white bg-primary shadow-raised">
              <span className="size-1.5 rounded-xl bg-white" />
            </span>
            <span className="absolute -bottom-6 -left-1.5 rounded-sm bg-white px-1.5 py-0.5 text-[9px] leading-4 font-bold text-primary shadow-card">
              You
            </span>
          </div>

          {visibleBins.map((bin) =>
            bin.selected ? (
              <div key={bin.code} className="absolute flex flex-col items-center" style={{ left: bin.left, top: bin.top }}>
                <span className="relative flex size-[35px] items-center justify-center rounded-xl bg-primary shadow-raised">
                  <Icon name="bin-station-light" width={15} height={10.875} />
                  <span className={`absolute -top-0.5 -right-1 size-3 rounded-xl border-2 border-white ${statusDot[bin.status]}`} />
                </span>
                <span className="mt-1 rounded-sm bg-ink px-1.5 text-[9px] leading-6 font-bold text-canvas shadow-card">{bin.code}</span>
              </div>
            ) : (
              <div key={bin.code} className="absolute flex flex-col items-center" style={{ left: bin.left, top: bin.top }}>
                <span className="relative flex size-7 items-center justify-center rounded-xl bg-white shadow-card">
                  <Icon name={streamIcon[bin.stream].name} width={streamIcon[bin.stream].size[0]} height={streamIcon[bin.stream].size[1]} />
                  <span className={`absolute -top-1 -right-1 size-2.5 rounded-xl ${statusDot[bin.status]}`} />
                </span>
                <span className="mt-0.5 rounded-sm bg-white px-1 text-[9px] leading-6 text-ink-muted">{bin.code}</span>
              </div>
            ),
          )}
        </div>

        {/* Selected bin */}
        <section className="relative z-10 mx-4 -mt-4 flex flex-col gap-3 rounded-lg bg-white p-4 shadow-raised">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="flex items-center gap-1.5 text-xl leading-[25px] font-semibold text-ink">
                Station {nearestBin.code}
                <Icon name="verified" width={16.5} height={15.75} alt="Verified station" />
              </h2>
              <p className="text-[13px] leading-5 text-ink-muted">{nearestBin.building}</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-xl bg-surface-muted px-2.5 py-1">
              <span className="size-2 rounded-xl bg-success" />
              <span className="text-label font-semibold text-ink">Ready ({nearestBin.fillPercent}% full)</span>
            </span>
          </div>
          <div className="flex items-center gap-4 rounded bg-surface-muted px-2 py-1">
            <span className="flex items-center gap-1.5 text-caption font-semibold text-ink">
              <Icon name="walk" width={9.75} height={16.125} />
              {nearestBin.distanceM}m away
            </span>
            <span className="text-[15px] leading-6 text-divider">•</span>
            <span className="flex items-center gap-1.5 text-[13px] leading-5 text-ink-muted">
              <Icon name="clock" width={15} />
              {nearestBin.walkTime}
            </span>
          </div>
          <div className="flex flex-col gap-1.5 pt-0.5">
            <p className="text-label font-semibold text-ink-subtle uppercase">Accepted Streams</p>
            <div className="flex flex-wrap gap-1">
              <StreamChip icon="accept-recycle" size={[13.142, 13.125]} label="Paper & Plastics" color="text-success" />
              <StreamChip icon="accept-compost" size={[11.875, 13.438]} label="Organic Compost" color="text-accent" />
              <StreamChip icon="accept-landfill" size={[10, 11.25]} label="Landfill Waste" color="text-ink-muted" />
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <button type="button" className="flex h-11 items-center justify-center gap-2 rounded bg-primary shadow-card">
              <Icon name="directions" width={13.333} height={15.833} />
              <span className="text-base leading-6 font-semibold text-white">Directions to Bin</span>
            </button>
            <button
              type="button"
              onClick={() => setToast(true)}
              className="flex h-10 items-center justify-center gap-2 rounded bg-surface-sunken"
            >
              <Icon name="confirm-star" width={15} />
              <span className="text-caption font-semibold text-ink">
                Confirm Disposal Here <span className="font-bold text-accent">(+10 pts)</span>
              </span>
            </button>
          </div>
        </section>
      </main>

      <div
        role="status"
        className={`fixed bottom-20 left-1/2 z-40 w-[calc(100%-32px)] max-w-[358px] -translate-x-1/2 transition-opacity duration-300 ${
          toast ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 rounded bg-toast p-3 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <Icon name="toast-check" width={16.667} />
          <p className="text-[13px] leading-5 font-medium text-[#edf2ed]">Disposal logged! +10 Campus Green credits earned.</p>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

function StreamChip({ icon, size, label, color }: { icon: string; size: [number, number]; label: string; color: string }) {
  return (
    <span className="flex items-center gap-1 rounded-sm bg-surface-sunken px-2.5 py-1">
      <Icon name={icon} width={size[0]} height={size[1]} />
      <span className={`text-caption font-semibold ${color}`}>{label}</span>
    </span>
  );
}
