import React from "react";
import { motion } from "framer-motion";
import Applications from "./Applications";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

function Container({ children, className }) {
  return <div className={cx("mx-auto max-w-7xl px-6 md:px-8", className)}>{children}</div>;
}

function CareersHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 md:pb-24 md:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_75%_15%,rgba(141,197,62,0.20),transparent_25%),linear-gradient(180deg,#FFFFFF_0%,#F6F8F7_100%)]" />
      <Container>
        <div className="grid items-center gap-10 rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-6 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
                Careers at STM
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#414042] md:text-6xl"
            >
              Join a team building smarter <span className="text-[#7FAF2D] italic">digital growth</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8 text-[#5E645F]">
              We partner with ambitious brands, move fast, solve real problems, and focus on measurable results. If you like
              clarity, challenge, and impact, you’ll feel at home here.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 h-48 rounded-[1.75rem] bg-[linear-gradient(135deg,#DCEBC1,#F7FAF5)] p-3 shadow-sm md:h-56">
              <div className="h-full rounded-[1.35rem] bg-[radial-gradient(circle_at_30%_20%,rgba(141,197,62,0.25),transparent_18%),linear-gradient(135deg,#2C2E2C,#4A4D4A)]">
                <img loading="lazy" src="/career-desktop2-small.avif" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-contain" />
              </div>
            </div>
            <div className="h-32 rounded-[1.5rem] bg-[linear-gradient(135deg,#EAF5DA,#F8FBF5)] p-3 shadow-sm md:h-36">
              <div className="h-full rounded-[1.2rem] bg-[linear-gradient(135deg,#414042,#353835)]">
                <img loading="lazy" src="/career-desktop-small.avif" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-cover" />
              </div>
            </div>
            <div className="h-32 rounded-[1.5rem] bg-[linear-gradient(135deg,#F3F6F3,#EAF5DA)] p-3 shadow-sm md:h-36">
              <div className="h-full rounded-[1.2rem] bg-[linear-gradient(135deg,#535752,#2A2D2A)]">
                <img loading="lazy" src="/career-desktop3-small.avif" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default function Careers() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#414042] py-10">
      <CareersHero />
      <Applications />
    </main>
  );
}
