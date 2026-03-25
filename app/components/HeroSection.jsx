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
              className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#202220] md:text-6xl xl:text-7xl"
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
              <span className="font-medium text-[#202220]">Trusted across sectors:</span>
              {siteData.trust.map((item) => (
                <span key={item} className="rounded-full border border-[#E6EBE7] bg-white px-3 py-1.5 shadow-sm">
                  {item}
                </span>
              ))}
            </motion.div> */}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="relative mx-auto w-full max-w-2xl"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-5 shadow-[0_24px_60px_rgba(24,32,28,0.12)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(141,197,62,0.18),transparent_22%),linear-gradient(180deg,rgba(246,248,247,0.3),rgba(255,255,255,0.9))]" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between rounded-2xl border border-[#E6EBE7] bg-[#F8FAF9] px-4 py-3">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-[0.14em] text-[#858C86]">Growth dashboard</div>
                    <div className="mt-1 text-sm font-semibold text-[#202220]">Campaign performance overview</div>
                  </div>
                  <div className="rounded-full bg-[#EAF5DA] px-3 py-1 text-xs font-semibold text-[#4B5F27]">Live</div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-3xl border border-[#E6EBE7] bg-[#202220] p-6 text-white">
                    <div className="text-xs uppercase tracking-[0.14em] text-white/60">Acquisition velocity</div>
                    <div className="mt-4 text-5xl font-semibold tracking-tight">4.2x</div>
                    <div className="mt-2 text-sm text-white/70">Return on ad spend over 90 days</div>
                    <div className="mt-8 h-28 rounded-2xl bg-[linear-gradient(180deg,rgba(141,197,62,0.35),rgba(141,197,62,0.02))]" />
                  </div>

                  <div className="grid gap-4">
                    {siteData.stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + index * 0.1, duration: 0.45 }}
                        whileHover={{ y: -4, rotate: index % 2 === 0 ? -1 : 1 }}
                        className="rounded-3xl border border-[#E6EBE7] bg-white p-5 shadow-[0_8px_24px_rgba(24,32,28,0.05)]"
                      >
                        <div className="text-xs uppercase tracking-[0.14em] text-[#858C86]">Performance</div>
                        <div className="mt-2 text-3xl font-semibold tracking-tight text-[#202220]">{stat.value}</div>
                        <div className="mt-1 text-sm text-[#5E645F]">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
