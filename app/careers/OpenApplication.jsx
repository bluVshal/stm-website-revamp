import React from 'react'
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

function Button({ children, variant = "primary", className, ...props }) {
    const styles = {
        primary:
            "bg-[#8DC53E] text-[#414042] shadow-[0_8px_24px_rgba(24,32,28,0.08)] hover:bg-[#7FB436] hover:-translate-y-0.5",
        secondary:
            "border border-[#E6EBE7] bg-white text-[#414042] shadow-sm hover:bg-[#F8FAF9] hover:-translate-y-0.5",
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={cx(
                "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200",
                styles[variant],
                className
            )}
            {...props}
            type="button"
        >
            {children}
        </motion.button>
    );
}

function Container({ children, className }) {
    return <div className={cx("mx-auto max-w-7xl px-6 md:px-8", className)}>{children}</div>;
}
const OpenRoles = () => {
    return (
        <div>
            <Container>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="rounded-[2.1rem] p-5 md:p-6"
                >
                    <div className="rounded-[1.8rem] border border-white/70 bg-[#F6F8F7] p-8 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-12">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <motion.div variants={fadeUp}>
                                <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
                                    Open application
                                </span>
                            </motion.div>
                            <motion.h1
                                variants={fadeUp}
                                className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#414042] md:text-5xl"
                            >
                                Don’t see a role that fits?
                            </motion.h1>
                        </motion.div>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5E645F]">
                            We’re always open to meeting great talent. If you think you’d add value to the team, send us your profile anyway.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            <Button>Send Your CV</Button>
                            <Button variant="secondary">Say Hello</Button>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div >
    )
}

export default OpenRoles