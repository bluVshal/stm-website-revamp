"use client";

import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { TrustStrip } from "./components/TrustStrip";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { ProcessSection } from "./components/ProcessSection";
import { MetricsSection } from "./components/MetricsSection";
import { CareersSection } from "./components/CareersSection";
import { CTASection } from "./components/CTASection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./Footer";

export default function STMPremiumUILibrary() {
  return (
    <div className="min-h-screen bg-[#F6F8F7] text-[#202220]">
      <NavBar />
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <MetricsSection />
      <CareersSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
