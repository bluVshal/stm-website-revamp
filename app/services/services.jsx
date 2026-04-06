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
    <main className="min-h-screen bg-[#FFFFFF] text-[#414042]">
      <ServicesHero />
      <DigitalMarketing />
      <GraphicDesign />
      <SEOSection />
      <CRM />
      <Analytics />
    </main>
  )
}

export default ServicePage;