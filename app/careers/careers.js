import React from "react";

import Applications from "./Applications";
import CareersHero from "./careersHero";

export default function Careers() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#414042] py-10 ">
      <CareersHero />
      <Applications />
    </main>
  );
}
