import React from 'react';

import MissionAndPurpose from './components/missionAndPurpose';

import { motion } from "framer-motion";
import { scaleIn } from "../Data";
import { Section } from "../components/Section";
import AboutUsDetails from './components/aboutUsDetails';

const AboutUs = () => {
  return (
    <div>
      <Section className="bg-[#F6F8F7]">

        <motion.div
          id='about-us'
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2.25rem] bg-[linear-gradient(180deg,#EEF6E4_0%,#E7F2D8_100%)] p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-6"
        >
          <div className="rounded-[1.9rem] border border-white/70 bg-white p-8 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-14">
            <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-[#414042] sm:text-3xl md:text-5xl">
              Who We Are
            </h2>
            <div className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5E645F]">
              <AboutUsDetails />
            </div>
          </div>
        </motion.div>

         <motion.div
          id='mission-and-purpose'
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2.25rem] bg-[linear-gradient(180deg,#EEF6E4_0%,#E7F2D8_100%)] p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-6 mt-12"
        >
          <div className="rounded-[1.9rem] border border-white/70 bg-white p-8 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-14">
            <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-[#414042] sm:text-3xl md:text-5xl">
              Mission and Purpose
            </h2>
            <div className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5E645F]">
              <MissionAndPurpose />
            </div>
          </div>
        </motion.div>

      </Section>
    </div>
  )
};


export default AboutUs;