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

export default function DigitalMarketing() {
  return (
    <div id='digital-marketing'>
      <section className="bg-[#414042] relative flex min-h-[600px] items-center justify-center overflow-hidden px-4 py-8 sm:py-12 md:min-h-[720px] md:py-16 lg:min-h-[820px]">
        <div className='relative w-full rounded-lg overflow-hidden object-center'>
          <Container>
            <div className="items-center rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur sm:p-6 md:p-8 lg:p-10">
              <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
                <motion.div variants={fadeUp}>
                  <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
                    Digital Marketing
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  className="mx-auto mt-4 sm:mt-6 max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] sm:leading-[1.05] md:leading-[1.02] tracking-[-0.04em] text-[#414042]"
                >
                  <span>Getting your brand in front of the right people at the right time is key.</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  We create and manage marketing campaigns across platforms like Google, Facebook, Instagram, and more. Whether it’s ads, content, or strategy, we focus on bringing in real customers—not just clicks.
                </motion.p>

                <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
                  Our Social Media Services
                </motion.h2>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  We deliver measurable impact on all social media platforms by combining innovative implementation with strategic thinking.
                </motion.p>

                <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
                  Strategy for Organic Growth
                </motion.h2>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  We create organised content strategies and engagement techniques to enhance brand visibility and foster long-term audience growth.
                </motion.p>

                <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
                  Paid Advertising & Social Media Strategy
                </motion.h2>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  Our staff creates data-driven plans that align with your company's goals, ensuring that each campaign delivers significant results.
                </motion.p>

                <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
                  Creation and Management of Ads
                </motion.h2>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  We develop effective ad creatives and oversee campaigns from conception to implementation to optimise reach, engagement, and conversions.
                </motion.p>

                <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
                  Content Development and Creative Guidance
                </motion.h2>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  We create captivating content, such as images, video ideas, and screenplays, designed to draw viewers in and effectively convey your brand.
                </motion.p>

                <motion.h2 variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-2xl leading-7 sm:leading-8 text-[#5E645F] font-bold">
                  Influencer Marketing & Content Cooperation
                </motion.h2>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  To ensure authenticity, relevance, and measurable impact, we identify and partner with the best influencers to spread your message.
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
