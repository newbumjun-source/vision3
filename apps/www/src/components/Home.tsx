"use client";

import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { VisualBreakSection } from "@/components/sections/VisualBreakSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <main className="bg-canvas min-h-screen">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <FeaturesSection />
      <VisualBreakSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
