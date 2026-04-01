"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, siteData } from "../Data";
import { Section } from "./Section";

export function IndustryCard({ icon: Icon, title, body }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[1.75rem] border border-[#E6EBE7] bg-white shadow-[0_8px_24px_rgba(24,32,28,0.04)]"
    >
      <div className="relative h-40 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(141,197,62,0.28),transparent_24%),linear-gradient(135deg,#414042,#2C2E2C)]">
        <motion.div whileHover={{ scale: 1.04 }} className="absolute inset-0" />
        <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-white backdrop-blur">
          <Icon size={20} />
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-xl font-semibold tracking-tight text-[#414042]">{title}</h3>
        <p className="mt-3 text-base leading-7 text-[#5E645F]">{body}</p>
      </div>
    </motion.div>
  );
}

export function IndustriesSection() {
  return (
    <Section
      id="work"
      eyebrow="Industries"
      title="We work across ambitious sectors."
      body="The agency is positioned as a broad growth partner first, with specialized capability across several industries."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {siteData.industries.map((item) => (
          <IndustryCard key={item.title} {...item} />
        ))}
      </motion.div>
    </Section>
  );
}
