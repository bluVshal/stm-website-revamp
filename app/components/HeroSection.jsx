"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeUp, scaleIn, stagger, siteData } from "../Data";
import { Container } from "../Container";
import { Button } from "./Buttons";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-16 md:px-8 md:pb-28 md:pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_70%_20%,rgba(141,197,62,0.22),transparent_26%),linear-gradient(180deg,#FFFFFF_0%,#F6F8F7_100%)]" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E6EBE7] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm backdrop-blur">
                <Sparkles size={14} className="text-[#8DC53E]" /> Growth Marketing Agency
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#414042] md:text-6xl xl:text-7xl"
            >
              We build digital growth systems for ambitious brands.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8 text-[#5E645F] md:text-xl">
              Performance marketing, SEO, CRM, and strategic execution designed for brands that want measurable growth,
              sharper positioning, and better conversion economics.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button icon={<ArrowRight size={16} />}>View Services</Button>
              <Button variant="secondary">Book a Meeting</Button>
            </motion.div>

            {/*<motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[#5E645F]">
              <span className="font-medium text-[#414042]">Trusted across sectors:</span>
              {siteData.trust.map((item) => (
                <span key={item} className="rounded-full border border-[#E6EBE7] bg-white px-3 py-1.5 shadow-sm">
                  {item}
                </span>
              ))}
            </motion.div> */}
          </motion.div>

       {/*   <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="relative mx-auto w-full max-w-2xl"
          >

            <p>Add content here</p>
          </motion.div>*/}
        </div>
      </Container>
    </section>
  );
}
