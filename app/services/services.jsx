'use client';

import React from 'react';
import ServicesHero from './components/ServicesHero';
import SEOSection from './components/SEOSection';
import GraphicDesign from './components/GraphicDesign';
import DigitalMarketing from './components/DigitalMarketing';
import CRM from './components/CRM';
import Analytics from './components/Analytics';

const ServicePage = () => {
  return (
    <main className="min-h-screen bg-[#F6F8F7] text-[#414042]">
      <ServicesHero />
      <SEOSection />
      <DigitalMarketing />
      <CRM />
      <GraphicDesign />
      <Analytics />
    </main>
  )
}

export default ServicePage;