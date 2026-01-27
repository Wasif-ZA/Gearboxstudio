"use client";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TechStackSection } from "./components/TechStackSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TemplatesSection } from "./components/TemplatesSection";
import { PricingSection } from "./components/PricingSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TechStackSection />
        <FeaturesSection />
        <TemplatesSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
