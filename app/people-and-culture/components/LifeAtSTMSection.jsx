import React from 'react';
import { motion } from "framer-motion";

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

const LifeAtSTMSection = () => {

  const items = new Array(6).fill(0);

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
      <h2 className="text-3xl font-semibold tracking-tight text-[#EFEFEF] md:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-8 text-[#FFF]">{body}</p>}
    </motion.div>
  );
}


  return (
    <section className="bg-[#414042] py-20 text-white md:py-24">
      <Container>
        <SectionHeader
          center
          eyebrow="Life at STM"
          title="A glimpse inside the team"
          body="We work hard, move fast, and celebrate wins together. Here are a few moments from our journey so far."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {items.map((_, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,#313431,#1F211F)] p-3"
            >
              <div className="h-56 rounded-[1.3rem] bg-[radial-gradient(circle_at_20%_20%,rgba(141,197,62,0.20),transparent_18%),linear-gradient(135deg,#5A5E59,#2C2F2C)]" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default LifeAtSTMSection