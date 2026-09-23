import { CampusBand } from "@/components/marketing/CampusBand";
import { CompeteSection } from "@/components/marketing/CompeteSection";
import { FinalCta } from "@/components/marketing/FinalCta";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { RewardsSection } from "@/components/marketing/RewardsSection";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <CompeteSection />
      <RewardsSection />
      <CampusBand />
      <FinalCta />
    </>
  );
}