import React from 'react'
import PortfolioPage from './Portfolio';
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

const OpenRoles = () => {
    return (
        <div className="rounded-[1.8rem] border border-white/70 bg-[#F6F8F7] p-8 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-12">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={fadeUp}>
                    <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
                        Open Roles
                    </span>
                </motion.div>
                <motion.h1
                    variants={fadeUp}
                    className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#414042] md:text-5xl"
                >
                    Opportunities to join the team:
                </motion.h1>
            </motion.div>
            <PortfolioPage />
        </div>
    )
}

export default OpenRoles