"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scaleIn } from "../Data";
import { Section } from "./Section";
import { Button } from "./Buttons";

export function CTASection() {
  return (
    <Section id="contact" className="bg-[#F6F8F7]">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="rounded-[2.25rem] bg-[linear-gradient(180deg,#EEF6E4_0%,#E7F2D8_100%)] p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-6"
      >
        <div className="rounded-[1.9rem] border border-white/70 bg-white p-8 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-14">
          <span className="inline-flex rounded-full bg-[#F1F4F2] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F]">
            Let&apos;s build your next growth phase
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-[#414042] sm:text-3xl md:text-5xl">
            Ready to grow with a partner that thinks beyond campaigns?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5E645F]">
            Use this area as a premium conversion moment with focused copy, strong buttons, and minimal distractions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button icon={<ArrowRight size={16} />}>Contact Us</Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
