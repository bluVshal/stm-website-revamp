"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp, stagger, siteData } from "../Data";
import { Section } from "./Section";
import { Button } from "./Buttons";

export function CareersSection() {
  return (
    <Section
      id="careers"
      eyebrow="Careers"
      title="Join a team shaping smarter digital growth."
      body="Present the agency as a place for strategic thinkers, creative problem-solvers, and performance-minded marketers."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[2rem] border border-[#E6EBE7] bg-white p-8 shadow-[0_8px_24px_rgba(24,32,28,0.04)] md:p-10"
        >
          <p className="text-lg leading-8 text-[#5E645F]">
            We build teams around curiosity, accountability, and measurable impact. The culture block works best when it reinforces
            energy, ambition, and the quality of client work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => location.href='/careers#open-roles'} >
              View Roles
            </Button>
            <Button variant="secondary">
              Send Your CV
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5"
        >
          {siteData.culture.map((item) => (
            <motion.div key={item} variants={fadeUp} whileHover={{ y: -4 }} className="rounded-[1.75rem] border border-[#E6EBE7] bg-[#F8FAF9] p-6">
              <div className="flex items-center gap-3 text-[#414042]">
                <div className="rounded-2xl bg-[#EAF5DA] p-3 text-[#5A7B24]">
                  <Sparkles size={18} />
                </div>
                <span className="text-base font-semibold">{item}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
