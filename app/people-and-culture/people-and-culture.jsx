import React from 'react'
import PeopleAndCultureHero from './components/PeopleAndCultureHero';
import CultureSection from './components/CultureSection';
import LifeAtSTMSection from './components/LifeAtSTMSection';
import BenefitsSection from './components/BenefitsSection';

const PeopleAndCulture = () => {
  return (
     <main className="min-h-screen bg-[#FFFFFF] text-[#414042]">
      <PeopleAndCultureHero />
      <CultureSection />
      <LifeAtSTMSection />
      <BenefitsSection />
    </main>
  )
}

export default PeopleAndCulture