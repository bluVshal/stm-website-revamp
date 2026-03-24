"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, siteData } from "../Data";
import { Section } from "./Section";

export function MetricsSection() {
  return (
    <Section id="results" className="pb-24 pt-0 md:pb-28">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-hidden rounded-[2rem] border border-[#2D302D] bg-[#202220] p-8 shadow-[0_24px_60px_rgba(24,32,28,0.14)] md:p-10"
      >
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            Results
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">Built for measurable outcomes.</h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Structure the section for real proof points and let performance become a visible part of the brand story.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {siteData.metrics.map((item) => (
            <motion.div key={item.label} variants={fadeUp} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{item.value}</div>
              <div className="mt-3 text-sm text-white/70">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
