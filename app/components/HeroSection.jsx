"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "../Data";
import { Container } from "../Container";
import { Button } from "./Buttons";

export function HeroSection() {

  const [open, setOpen] = React.useState(false);

  function handleContactBtn() {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    } else {
      window.location.href = "/#contact";
    }
  }

  function handleServicesBtn() {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    } else {
      window.location.href = "/#services";
    }
  }


  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-16 md:px-8 md:pb-28 md:pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_70%_20%,rgba(141,197,62,0.22),transparent_26%),linear-gradient(180deg,#FFFFFF_0%,#F6F8F7_100%)]" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E6EBE7] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm backdrop-blur">
                <Sparkles size={14} className="text-[#8DC53E]" /> Growth Marketing Company
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#414042] md:text-6xl xl:text-7xl"
            >
              We build digital growth systems for ambitious brands.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8 text-[#5E645F] md:text-xl">
              Performance marketing, SEO, CRM, and strategic execution designed for brands that want measurable growth,
              sharper positioning, and better conversion economics.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button icon={<ArrowRight size={16} />} onClick={handleServicesBtn}>
                View Services
              </Button>
              <Button variant="secondary" onClick={handleContactBtn}>
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
