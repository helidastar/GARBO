import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { IconPaw } from "@/components/ui/Icons";
import { ROUTES } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-tint/80 pb-safe text-sm text-soft">
      <Container className="grid gap-8 py-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="rounded-md bg-garnet px-2 py-0.5 text-[10px] font-black text-saffron">
              CIT-U CAMPUS
            </span>
          </div>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-soft">
            GARBO 2.0 — Student-led campus waste management and smart recycling system for Cebu Institute of Technology – University.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:col-span-6">
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-ink">App Links</h4>
            <ul className="mt-2.5 space-y-2 text-xs">
              <li><a href="#how" className="transition-colors hover:text-garnet hover:underline">How to Scan</a></li>
              <li><a href="#compete" className="transition-colors hover:text-garnet hover:underline">Wildcat Cup Leaderboard</a></li>
              <li><a href="#rewards" className="transition-colors hover:text-garnet hover:underline">Student Rewards</a></li>
              <li><a href="#locations" className="transition-colors hover:text-garnet hover:underline">Campus Bin Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-ink">Student Portal</h4>
            <ul className="mt-2.5 space-y-2 text-xs">
              <li><Link href={ROUTES.login ?? "/login"} className="transition-colors hover:text-garnet hover:underline">Student Log In</Link></li>
              <li><Link href={ROUTES.register ?? "/register"} className="transition-colors hover:text-garnet hover:underline">Create Account</Link></li>
              <li><Link href={ROUTES.contact ?? "/contact"} className="transition-colors hover:text-garnet hover:underline">Report a Full Bin</Link></li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-line/80 py-4">
        <Container className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-soft">
          <span>© {new Date().getFullYear()} GARBO 2.0 • Cebu Institute of Technology – University</span>
          <span className="flex items-center gap-1.5 font-semibold text-garnet">
            <span>Tops Again!</span>
            <IconPaw size={13} className="text-saffron" />
            <span>Maroon & Gold</span>
          </span>
        </Container>
      </div>
    </footer>
  );
}

export default SiteFooter;