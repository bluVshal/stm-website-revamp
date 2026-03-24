"use client";

import { motion } from "framer-motion";
import { Globe, Mail, Phone, Send } from "lucide-react";
import { fadeUp, scaleIn } from "../Data";
import { Section } from "./Section";
import { Button } from "./Buttons";
import { Field } from "./Field";

export function ContactSection() {
  return (
    <Section className="pt-0">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-[#E6EBE7] bg-white p-8 shadow-[0_8px_24px_rgba(24,32,28,0.04)] md:p-10"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-[#202220]">Contact us</h3>
          <p className="mt-4 text-base leading-7 text-[#5E645F]">
            Use a clear, low-friction contact area with fast trust signals and refined form styling.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              { icon: Mail, label: "Email", value: "hello@stmagency.com" },
              { icon: Phone, label: "Phone", value: "+230 000 0000" },
              { icon: Globe, label: "Location", value: "Mauritius · Serving global brands" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl bg-[#F8FAF9] p-4">
                <div className="rounded-2xl bg-[#EAF5DA] p-3 text-[#5A7B24]">
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#202220]">{item.label}</div>
                  <div className="mt-1 text-sm text-[#5E645F]">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-[#E6EBE7] bg-white p-8 shadow-[0_8px_24px_rgba(24,32,28,0.05)] md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@company.com" type="email" />
            <Field label="Company" placeholder="Company name" />
            <Field label="Service" placeholder="SEO, Paid Media, CRM..." />
          </div>
          <div className="mt-5">
            <Field as="textarea" label="Message" placeholder="Tell us about your goals" rows={6} />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#858C86]">We usually reply within 1 business day.</p>
            <Button icon={<Send size={16} />}>Send Message</Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
