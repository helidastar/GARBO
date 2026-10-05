import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GARBO: Throw it right, earn points",
    template: "%s | GARBO",
  },
  description:
    "Scan any piece of trash, find the right bin on campus, and earn points for sorting it correctly.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // lets the page draw under the notch; pt-safe / pb-safe handle the insets
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1C0F0F" },
  ],
};

export default function MarketingLayout({ children }: { children: ReactNode }) {
  // .theme-marketing switches on the landing page palette and fonts (see globals.css).
  // data-theme="light" keeps the page white even if the visitor's device is in
  // dark mode. Remove it to make the page follow the device setting.
  return (
    <div
      data-theme="light"
      className={`theme-marketing ${inter.variable} ${bricolage.variable} min-h-dvh font-sans`}
    >
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
