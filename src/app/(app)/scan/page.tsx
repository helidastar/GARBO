import Image from "next/image";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { Icon } from "@/components/Icon";
import { currentUser, nearestBin, scanResult } from "@/lib/mock-data";

export default function ScanPage() {
  return (
    <>
      <AppHeader variant="back" title="Scan Waste" backHref="/home" />
      <main className="flex flex-col pb-6">
        {/* Scanner */}
        <section className="flex flex-col gap-3 px-4 py-3">
          <div className="flex items-center justify-between rounded-lg bg-surface-muted px-4 py-2 shadow-card">
            <p className="flex items-center gap-1 text-caption font-semibold tracking-[0.6px] text-ink-muted uppercase">
              <Icon name="scanner" width={16.667} />
              Live Vision Scanner
            </p>
            <div className="flex items-center gap-1">
              <button type="button" className="flex items-center gap-1 rounded-sm bg-canvas px-2 py-1 shadow-card">
                <Icon name="retake" width={10.667} />
                <span className="text-label font-semibold text-ink">Retake</span>
              </button>
              <button type="button" className="flex items-center gap-1 rounded-sm bg-surface-sunken px-2 py-1">
                <Icon name="upload" width={10.667} height={13.333} />
                <span className="text-label font-semibold text-ink-muted">Upload</span>
              </button>
            </div>
          </div>

          <div className="relative h-[284px] overflow-hidden rounded-lg bg-track shadow-raised">
            <Image src="/images/scan-sample.png" alt="Camera preview of a plastic cup" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-b from-primary-ink/30 via-primary-ink/0 to-canvas/80" />

            <div className="absolute inset-x-4 top-4 flex items-start justify-between">
              <span className="flex items-center gap-1.5 rounded-xl bg-canvas/90 px-2 py-1 shadow-card">
                <span className="size-2 rounded-xl bg-leaf" />
                <span className="text-label font-semibold text-success uppercase">Target Acquired</span>
              </span>
              <span className="rounded-sm bg-canvas/90 px-2 py-1 text-label font-semibold text-ink-muted shadow-card">0.4s sync</span>
            </div>

            <div className="absolute inset-x-4 top-[38px] flex justify-center">
              <div className="relative flex size-48 items-center justify-center rounded-lg shadow-[0_0_0_9999px_rgba(24,29,26,0.2)]">
                <span className="absolute -top-1 -left-1 size-6 border-t-2 border-l-2 border-white" />
                <span className="absolute -top-1 -right-1 size-6 border-t-2 border-r-2 border-white" />
                <span className="absolute -bottom-1 -left-1 size-6 border-b-2 border-l-2 border-white" />
                <span className="absolute -right-1 -bottom-1 size-6 border-r-2 border-b-2 border-white" />
                <span className="flex items-center gap-1 rounded-sm bg-canvas/95 px-3 py-1.5 shadow-raised backdrop-blur-xs">
                  <Icon name="check-circle" width={15} />
                  <span className="text-caption font-bold text-ink">{scanResult.confidence}% Confidence</span>
                </span>
              </div>
            </div>

            <div className="absolute inset-x-4 bottom-3 flex items-center justify-between gap-2 rounded bg-canvas/95 p-2 shadow-card backdrop-blur-xs">
              <span className="flex min-w-0 items-center gap-2">
                <Icon name="cup" width={21.5} height={28.5} className="shrink-0" />
                <span className="truncate text-base leading-6 font-semibold text-ink">{scanResult.item}</span>
              </span>
              <span className="shrink-0 rounded-sm bg-surface-sunken px-1 py-0.5 text-label font-semibold text-ink-muted uppercase">
                {scanResult.tag}
              </span>
            </div>
          </div>
        </section>

        {/* Verdict + actions */}
        <section className="flex flex-col gap-4 px-4">
          <div className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-raised">
            <div className="flex items-center justify-between">
              <p className="text-label font-semibold tracking-[1.1px] text-ink-muted uppercase">Classification Verdict</p>
              <span className="flex items-center gap-1 rounded-sm bg-success-soft px-2 py-1">
                <Icon name="recycle-badge" width={12.266} height={12.25} />
                <span className="text-label font-bold tracking-[0.275px] text-[#00210f] uppercase">{scanResult.verdict}</span>
              </span>
            </div>
            <div className="flex gap-3 rounded bg-surface-sunken p-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary shadow-card">
                <Icon name="bin-light" width={16} height={18} />
              </span>
              <div>
                <h2 className="text-xl leading-7 font-semibold text-ink">{scanResult.bin}</h2>
                <p className="pt-px text-[15px] leading-[20.6px] text-ink-muted">{scanResult.instructions}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {scanResult.steps.map((step) => (
                <div key={step.label} className="flex items-center gap-2 rounded-sm bg-surface-muted p-2">
                  <Icon name={step.icon} width={step.size[0]} height={step.size[1]} />
                  <div>
                    <p className="text-label font-semibold text-ink-muted uppercase">{step.label}</p>
                    <p className="text-[13px] leading-5 font-semibold text-ink">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="/map" className="flex h-14 items-center justify-between rounded bg-primary px-4 shadow-raised">
              <span className="flex min-w-0 items-center gap-2">
                <Icon name="navigate-light" width={16} height={19} />
                <span className="min-w-0">
                  <span className="block text-base leading-5 font-bold text-white">Find Nearest Bin</span>
                  <span className="block truncate text-[13px] leading-5 text-primary-soft">
                    Station {nearestBin.code} ({nearestBin.name}) • {nearestBin.distanceM}m away
                  </span>
                </span>
              </span>
              <Icon name="arrow-right-white" width={14.667} />
            </Link>
            <Link href="/map" className="flex h-12 items-center justify-center gap-2 rounded bg-surface-strong px-4">
              <Icon name="qr" width={15} />
              <span className="text-base leading-6 font-semibold text-ink">Confirm Disposal at Bin (Scan QR)</span>
            </Link>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-surface-muted p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-xl bg-gold-soft">
                <Icon name="medal" width={12} height={15.75} />
              </span>
              <div>
                <p className="text-label font-semibold text-ink-muted uppercase">Impact Reward</p>
                <p className="text-base leading-6 font-semibold text-ink">
                  +{scanResult.rewardPoints} Campus
                  <br />
                  EcoPoints
                </p>
              </div>
            </div>
            <p className="pr-6 text-caption font-bold text-accent">
              Semester Rank
              <br />#{currentUser.semesterRank}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
