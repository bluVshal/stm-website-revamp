import React from 'react'
import PeopleAndCultureHero from './components/PeopleAndCultureHero';
import CultureSection from './components/CultureSection';
import LifeAtSTMSection from './components/LifeAtSTMSection';
import BenefitsSection from './components/BenefitsSection';
import FitSection from './components/FitSection';
import CareersSection from './components/CareersSection';

const PeopleAndCulture = () => {
  return (
     <main className="min-h-screen bg-[#FFFFFF] text-[#414042]">
      <PeopleAndCultureHero />
      <CultureSection />
      <FitSection />
      <LifeAtSTMSection />
      <BenefitsSection />
      <CareersSection />
    </main>
  )
}

export default PeopleAndCulture