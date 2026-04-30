"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { cx, fadeUp, stagger } from "../Data";
import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section
      className="app-bckgrnd sm:mt-10 max-w-8xl mx-auto"
      id="about"
      eyebrow="About"
      title="Our agency is designed to focus on performance, transparency, and helping your business."
      body="We bring together strategy, creative ideas, and clear results in one system. This helps brands grow with confidence and avoid scattered marketing efforts."
      innerClassName="rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur p-5 sm:p-6 md:p-8 lg:p-10"
      centerHeader
    >
        <div className="ml-64 mr-64 md:items-center lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[2rem] border border-[#E6EBE7] bg-white p-8 shadow-[0_8px_24px_rgba(24,32,28,0.04)] md:p-10 flex flex-col"
          >
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#858C86]">Why brands choose STM</div>
              <p className="mt-5 text-lg leading-8 text-[#5E645F]">
                We don't rely on aimless tactics. Instead, we create unified systems for acquisition, retention, analytics, and messaging.
                This approach gives you clearer priorities, actionable data, and quicker ways to improve.
              </p>
            </div>
            <div className="mt-6 grid gap-4">
              {[
                "Expertise in Africa",
                "Data-backed decision making",
                "Clear communication and delivery rhythm",
                "Built to scale, not just launch",
              ].map((item) => (
                <div key={item} className="group flex items-start gap-3 sm:gap-4 rounded-[1.25rem] sm:rounded-[1.5rem] border border-[#E6EBE7] bg-white p-4 sm:p-5 shadow-[0_8px_24px_rgba(24,32,28,0.03)] transition-transform duration-450 sm:hover:translate-x-4 lg:hover:translate-x-8 hover:bg-[#F6FAF3]">
                  <CheckCircle2 size={18} className="mt-0.5 text-[#8DC53E]" />
                  <span className="text-base font-medium text-[#414042]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
    </Section>
  );
}
