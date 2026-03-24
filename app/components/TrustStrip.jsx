"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../Data";
import { Container } from "../Container";

export function TrustStrip() {
  return (
    <div className="px-6 md:px-8">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-6 rounded-[2rem] border border-[#E6EBE7] bg-white p-6 shadow-[0_8px_24px_rgba(24,32,28,0.04)] md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <div className="text-sm font-medium text-[#202220]">Trusted by growth-focused brands across multiple industries</div>
            <div className="mt-2 text-sm leading-7 text-[#5E645F]">
              Strategic execution across search, paid, CRM, and conversion systems.
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {["50+ Campaigns", "Multi-channel Expertise", "KPI-led Growth"].map((item) => (
              <span key={item} className="rounded-full bg-[#F1F4F2] px-4 py-2 text-sm font-medium text-[#202220]">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
