import React from 'react';
import { motion } from "framer-motion";

const cx = (...classes) => classes.filter(Boolean).join(" ");

function Container({ children, className }) {
  return <div className={cx("mx-auto max-w-7xl px-6 md:px-8", className)}>{children}</div>;
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
    <div id='graphic-design'>
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden px-4 py-8 sm:py-12 md:min-h-[720px] md:py-16 lg:min-h-[820px]">
        <div className='relative w-full rounded-lg overflow-hidden object-center'>
          <Container>
            <div className="items-center rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur sm:p-6 md:p-8 lg:p-10">
              <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
                <motion.div variants={fadeUp}>
                  <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
                    Graphic Design
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  className="mx-auto mt-4 sm:mt-6 max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] sm:leading-[1.05] md:leading-[1.02] tracking-[-0.04em] text-[#414042]"
                >
                  <span>Where Graphic Design Meets Business Excellence</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  At STM Consulting, we craft bold, conversion-focused graphic design tailored specifically for corporates and businesses across a wide range of industries. From corporate branding and marketing collateral to digital assets and full brand identities, we understand the visual language that builds credibility and leaves a lasting impression. Our team combines creative excellence with a deep understanding of the business world to deliver designs that don't just look great - they perform. We stay ahead of design trends and industry innovations so that every asset we produce feels fresh, relevant, and perfectly aligned with the expectations of today's discerning business audience.
                </motion.p>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
                  Your Brand, Built for a Competitive Market.
                </motion.p>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  The business landscape moves fast, and standing out demands more than a polished logo. STM Consulting partners with startups, established businesses, and corporate enterprises to create cohesive visual experiences that elevate your brand at every touchpoint. Whether you're launching a new venture or refreshing an existing identity, we bring the strategic creativity and business acumen to make your brand impossible to ignore. From initial concept through to final delivery, we work closely with our clients to ensure every design decision is purposeful, on-brand, and built to drive real results in an increasingly competitive marketplace.
                </motion.p>
              </motion.div> 

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
              >
              </motion.div>
            </div>
          </Container>
        </div>
      </section >
    </div >
  );
}

export default GraphicDesign;
