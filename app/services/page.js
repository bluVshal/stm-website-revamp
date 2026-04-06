import React from 'react';
import { NavBar } from '../components/NavBar';
import ServicePage from './services';
import { Footer } from '../Footer';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#F6F8F7] text-[#414042]">
      <NavBar />
      <ServicePage />
      <Footer />
    </div>
  )
}

export default Page;