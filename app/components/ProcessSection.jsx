"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, siteData } from "../Data";
import { Section } from "./Section";

export function ProcessSection() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="A clear path from strategy to scale."
      body="Every engagement follows a structure that keeps work focused, measurable, and easy to understand."
      className="bg-[#F6F8F7]"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid gap-6 xl:grid-cols-4"
      >
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-[#DDE4DE] xl:block" />
        {siteData.process.map((step) => (
          <motion.div
            key={step.number}
            variants={fadeUp}
            className="relative rounded-[1.75rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)]"
          >
            <motion.div
              whileInView={{ scale: [0.9, 1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#8DC53E] text-sm font-bold text-[#202220]"
            >
              {step.number}
            </motion.div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#202220]">{step.title}</h3>
            <p className="mt-3 text-base leading-7 text-[#5E645F]">{step.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
