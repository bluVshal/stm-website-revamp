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

const ServicesLifeAtSTMSection = () => {

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
    <section id='seo' className="bg-[#414042] py-20 text-white md:py-24">
      <Container>
        <SectionHeader
          center
          eyebrow="SEO"
          title="Optimize Your Online Presence with Our SEO Services"
          body="Our SEO services are designed to help your business improve its online visibility, drive organic traffic, and increase conversions. We use a data-driven approach to develop customized SEO strategies that align with your business goals and target audience."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-3"
        >
        </motion.div>
      </Container>
    </section>
  )
};

export default ServicesLifeAtSTMSection;