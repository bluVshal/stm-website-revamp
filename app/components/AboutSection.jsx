"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { cx, fadeUp, stagger } from "../Data";
import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A modern agency model built around performance, clarity, and long-term growth."
      body="We connect strategy, creative thinking, and measurable execution into one integrated system so brands can scale with more confidence and less channel fragmentation."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[2rem] border border-[#E6EBE7] bg-white p-8 shadow-[0_8px_24px_rgba(24,32,28,0.04)] md:p-10"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#858C86]">Why brands choose STM</div>
          <p className="mt-5 text-lg leading-8 text-[#5E645F]">
            Instead of disconnected tactics, we build coherent systems across acquisition, retention, analytics, and messaging. That
            means clearer priorities, cleaner reporting, and faster improvement cycles.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Strategy aligned to business goals",
              "Data-backed decision making",
              "Clear communication and delivery rhythm",
              "Built to scale, not just launch",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#F8FAF9] p-4">
                <CheckCircle2 size={18} className="mt-0.5 text-[#8DC53E]" />
                <span className="text-sm font-medium text-[#414042]">{item}</span>
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
              body: "Every channel supports commercial goals, not just activity metrics.",
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
