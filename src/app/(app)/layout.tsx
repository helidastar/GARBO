/** Mobile frame shared by every student screen (390px wide, as designed in Figma). */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="relative mx-auto min-h-screen w-full max-w-[390px] bg-canvas shadow-sm">{children}</div>;
}
