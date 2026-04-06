import React from 'react';
import { motion } from "framer-motion";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const pageData = {
  benefits: [
    {
      title: "Hybrid Work",
      body: "Work with flexibility while staying connected to a collaborative team rhythm.",
    },
    {
      title: "Growth-Focused",
      body: "You’ll sharpen your thinking, expand your skillset, and take on meaningful responsibility.",
    },
    {
      title: "Real Impact",
      body: "Your work won’t sit in a deck. It will influence campaigns, performance, and client growth.",
    },
    {
      title: "Flexible Hours",
      body: "We care more about quality output and accountability than rigid clock-watching.",
    },
    {
      title: "Learning Support",
      body: "We encourage experimentation, strategic thinking, and continuous improvement.",
    },
    {
      title: "Strong Team",
      body: "Join a team that values clear communication, ownership, and ambition.",
    },
  ],
};

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

const GraphicDesign = () => {
  return (
    <section id='graphic-design' className="py-20 md:py-24">
      <Container>
        <SectionHeader
          center
          eyebrow="Graphic Design"
          title="What you get"
          body="We invest in the team’s growth, well-being, and environment so people can do their best work."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {pageData.benefits.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[1.75rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-[#414042]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#5E645F]">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default GraphicDesign;