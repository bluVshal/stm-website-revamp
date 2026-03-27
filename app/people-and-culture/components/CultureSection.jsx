import React from 'react';
import { motion } from "framer-motion";
import {
  Briefcase,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

function Container({ children, className }) {
  return <div className={cx("mx-auto max-w-7xl px-6 md:px-8", className)}>{children}</div>;
}

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

const pageData = {
  culture: [
    {
      icon: Sparkles,
      title: "Strategy-first",
      body: "We solve the right problems before jumping into execution. Every channel has a purpose.",
    },
    {
      icon: Briefcase,
      title: "Performance-led",
      body: "Decisions are driven by data, testing, and curiosity. We optimize relentlessly.",
    },
    {
      icon: HeartHandshake,
      title: "No fluff",
      body: "We value clarity, efficiency, and real impact over busy work and corporate noise.",
    },
  ],
}


const CultureSection = () => {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeader
          center
          eyebrow="Culture"
          title="How we work"
          body="Our culture is built on clarity, ownership, and a bias for measurable progress. We care about the thinking behind the work as much as the results."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {pageData.culture.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)]"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-[#EAF5DA] p-3 text-[#5A7B24]">
                  <Icon size={18} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#414042]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#5E645F]">{item.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default CultureSection