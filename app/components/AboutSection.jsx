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
      title="Our agency is designed to focus on performance, transparency, and helping your business grow over time."
      body="We bring together strategy, creative ideas, and clear results in one system. This helps brands grow with confidence and avoid scattered marketing efforts."
      innerClassName="rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur sm:p-6 md:p-8 lg:p-10"
      centerHeader
    >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
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
                This approach gives you clearer priorities, easier-to-read reports, and quicker ways to improve.
              </p>
            </div>
            <div className="mt-6 grid gap-4">
              {[
                "Expertise in Africa",
                "Data-backed decision making",
                "Clear communication and delivery rhythm",
                "Built to scale, not just launch",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#F8FAF9] p-4">
                  <CheckCircle2 size={18} className="mt-0.5 text-[#8DC53E]" />
                  <span className="text-base font-medium text-[#414042]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5"
          >
            {[
              {
                title: "Strategy-first",
                body: "Each channel is designed to help you reach your business goals, not just track activity.",
              },
              {
                title: "Performance-led",
                body: "Creative, content, and media decisions are shaped by evidence and iteration.",
              },
              {
                title: "Partner mindset",
                body: "We work like an extension of your internal team with transparent collaboration.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ x: -6 }}
                className={cx(
                  "rounded-[2rem] border border-[#E6EBE7] bg-white p-8 shadow-[0_8px_24px_rgba(24,32,28,0.05)]",
                  index === 1 && "lg:ml-8",
                  index === 2 && "lg:ml-16"
                )}
              >
                <div className="mb-4 inline-flex rounded-2xl bg-[#EAF5DA] p-3 text-[#5A7B24]">
                  <Sparkles size={18} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-[#414042]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#5E645F]">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </Section>
  );
}
