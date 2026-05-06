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

function Container({ children, className }) {
  return <div className={cx("mx-auto max-w-7xl px-6 md:px-8", className)}>{children}</div>;
}

const SEOSection = () => {

  return (
    <div id="seo">
      <section className="services-bckgrnd relative flex min-h-[600px] items-center justify-center overflow-hidden px-4 py-8 sm:py-12 md:min-h-[720px] md:py-16 lg:min-h-[820px]">
        <div className='relative w-full rounded-lg overflow-hidden object-center'>
          <Container>
            <div className="items-center rounded-[1.25rem] sm:rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur sm:p-6 md:p-8 lg:p-10">
              <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center">
                <motion.div variants={fadeUp}>
                  <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
                    SEO
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  className="mx-auto mt-4 sm:mt-6 max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] sm:leading-[1.05] md:leading-[1.02] tracking-[-0.04em] text-[#414042]"
                >
                  <span>Dominate Search Rankings with STM SEO Services</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  Our SEO department delivers a full suite of services designed to strengthen your online presence and drive sustainable growth. We focus on high-quality link building to increase your website’s authority, helping it compete more effectively in search engine rankings. Through detailed keyword research, we identify high-trending and relevant search terms that position your brand to capture demand and dominate your market.
                </motion.p>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  We also manage technical SEO to ensure your website is fully optimized for search engine crawling, indexing, and performance. This includes enhancing site speed, improving structure, and ensuring a smooth user experience across all devices. Our team creates and optimizes landing pages aligned with user intent, turning traffic into measurable conversions.
                </motion.p>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  In addition, we implement strategic on-page and off-page SEO activities that help search engines better understand your content and connect it with what users are actively searching for. Every action is guided by data and aligned with Google’s best practices. We also implement advanced SEO strategies including Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO), ensuring your content is optimized not only for search engines but also for AI-driven search experiences.
                </motion.p>
                <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-[#5E645F]">
                  SEO is a long-term strategy, and when executed correctly, it delivers lasting visibility, consistent organic traffic, and sustainable business growth over time.
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
  )
};

export default SEOSection;