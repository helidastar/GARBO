import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { currentUser } from "@/lib/mock-data";

type AppHeaderProps =
  | { variant: "home" }
  | { variant: "section"; title: string }
  | { variant: "back"; title: string; backHref: string };

function Avatar({ size, ring = false }: { size: number; ring?: boolean }) {
  return (
    <Link
      href="/profile"
      aria-label="Open profile"
      className={`block overflow-hidden rounded-xl ${ring ? "shadow-[0_0_0_2px_rgba(112,16,38,0.2)]" : ""}`}
    >
      <Image src={currentUser.avatarUrl} alt="" width={size} height={size} className="rounded-xl" />
    </Link>
  );
}

export function AppHeader(props: AppHeaderProps) {
  if (props.variant === "home") {
    return (
      <header className="sticky top-0 z-30 bg-white/95 shadow-[0_1px_8px_0_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <Image src="/images/seal.png" alt="GARBO seal" width={36} height={54} className="h-[54px] w-9 object-contain" />
            <div>
              <p className="text-base leading-4 font-bold tracking-[-0.4px] text-primary-ink">GARBO GO</p>
              <p className="text-label font-semibold text-ink-muted uppercase">Campus Sustainability</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-xl bg-gold-soft/40 px-2.5 py-1">
              <Icon name="flame-small" width={10} height={11.875} />
              <span className="text-label font-bold text-accent-ink">{currentUser.streakDays} Days</span>
            </div>
            <Avatar size={36} ring />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-30 bg-canvas/90 shadow-[0_1px_8px_0_rgba(0,0,0,0.04)] backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {props.variant === "back" && (
            <Link href={props.backHref} aria-label="Go back" className="-ml-2 flex size-11 items-center justify-center">
              <Icon name="back" width={16} />
            </Link>
          )}
          <Image
            src="/images/seal-wide.png"
            alt="GARBO seal"
            width={props.variant === "back" ? 50 : 57}
            height={props.variant === "back" ? 28 : 32}
            className="object-contain"
          />
          {props.variant === "back" ? (
            <h1 className="text-base leading-6 font-semibold text-ink">{props.title}</h1>
          ) : (
            <div>
              <p className="text-label font-semibold text-accent uppercase">GARBO</p>
              <h1 className="text-base leading-4 font-semibold text-ink">{props.title}</h1>
            </div>
          )}
        </div>
        <Avatar size={32} />
      </div>
    </header>
  );
}
