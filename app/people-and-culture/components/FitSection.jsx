import React from 'react';
import { motion } from "framer-motion";
import { Container } from '@/app/Container';

import {
  CheckCircle2,
} from "lucide-react";
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

function SectionHeader({ eyebrow, title, body, center }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cx("mb-12 max-w-3xl", center && "mx-auto text-center")}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex rounded-full border border-[#E6EBE7] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-[#414042] md:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-8 text-[#FFF]">{body}</p>}
    </motion.div>
  );
}


const pageData = {
  fit: [
    "Problem-solvers, not task-doers",
    "People who think in systems",
    "Curious and data-driven minds",
    "Clear communicators",
    "Comfortable with responsibility",
  ],
  process: [
    {
      number: "01",
      title: "Apply",
      body: "Send your CV, portfolio, or LinkedIn profile with a short introduction.",
    },
    {
      number: "02",
      title: "Intro Call",
      body: "A quick conversation to understand your background, mindset, and fit.",
    },
    {
      number: "03",
      title: "Task / Case",
      body: "A practical exercise that reflects the kind of thinking the role requires.",
    },
    {
      number: "04",
      title: "Final Discussion",
      body: "A final alignment conversation around expectations, role scope, and next steps.",
    },
  ],
};

export default function FitSection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Who Thrives Here"
            title="The kind of people who tend to do well with us"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4"
          >
            {pageData.fit.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="group flex items-start gap-4 rounded-[1.5rem] border border-[#E6EBE7] bg-white p-5 shadow-[0_8px_24px_rgba(24,32,28,0.03)] transition-transform duration-450 hover:translate-x-8"
              >
                <div className="rounded-2xl bg-[#EAF5DA] p-2.5 text-[#5A7B24] transition group-hover:bg-[#C3E48B]">
                  <CheckCircle2 size={20} />
                </div>
                <span className="pt-1 text-base font-medium text-[#414042]">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
