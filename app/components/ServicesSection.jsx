"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp, stagger, siteData } from "../Data";
import { Section } from "./Section";

export function ServiceCard({ icon: Icon, title, body, link }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group rounded-[1.75rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)] transition hover:bg-[#F6FAF3] duration-450"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1F4F2] text-[#414042] transition group-hover:bg-[#C3E48B] group-hover:text-[#5A7B24] duration-450">
        <Icon size={20} />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#414042]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#5E645F]">{body}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#414042]">
        <a href={link} className="flex items-center gap-2">
          Explore service
          <ChevronRight size={16} className="transition group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Services designed to scale brands intelligently."
      body="From visibility to conversion to retention, each service is structured to improve the quality of growth, not just the volume of activity."
      className="bg-[#F6F8F7]"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {siteData.services.map((service) => (          
          <ServiceCard key={service.title} {...service} />
        ))}
      </motion.div>
    </Section>
  );
}
