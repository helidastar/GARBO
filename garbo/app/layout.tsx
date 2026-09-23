import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";

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
  viewportFit: "cover", // lets the app draw under the notch; pt-safe / pb-safe handle the insets
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1C0F0F" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // data-theme="light" keeps the page white even if the visitor's device is in
  // dark mode. Remove it to make the site follow the device setting.
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
