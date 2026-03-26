"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Pointer, TextCursor } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary: "bg-[#8DC53E] text-[#202220]",
    secondary: "border border-[#E6EBE7] bg-white"
  };

  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className={`px-6 py-3 rounded-xl font-semibold ${styles[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

function Card({ title }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-[#E6EBE7] bg-white p-6 text-center shadow-sm"
    >
      <span className="font-semibold">{title}</span>
    </motion.div>
  );
}



export default function NotFound() {

  function handleGoBackBtn() {
    window.location.href = "/";
  }

  return (
    <div className="relative min-h-screen bg-[#F6F8F7] text-[#202220] flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(141,197,62,0.25),transparent)] blur-3xl" />

      {/* Floating Visual */}
      <motion.div
      />

      {/* Main Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl"
      >
        <motion.div
          variants={fadeUp}
          className="text-[120px] font-bold tracking-tight bg-gradient-to-r from-[#202220] to-[#8DC53E] text-transparent bg-clip-text"
        >
          404
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-semibold">
          This page doesn’t exist — but better paths do.
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-4 text-lg text-[#5E645F]">
          We couldn’t find what you’re looking for. Let’s get you somewhere useful.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button onClick={handleGoBackBtn}>
            Go Back Home
          </Button>
        </motion.div>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-10 w-full max-w-md relative"
      >
        <input
          placeholder="Search the site..."
          className="w-full px-5 py-3 rounded-xl border border-[#E6EBE7] focus:outline-none"
        />
        <Search className="absolute right-4 top-3.5 text-gray-400" size={18} />
      </motion.div>

      {/* Smart Links */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mt-12 grid md:grid-cols-4 gap-4 max-w-5xl w-full"
      >
        <Card title="SEO Services" />
        <Card title="CRM Solutions" />
        <Card title="Careers" />
        <Card title="Contact" />
      </motion.div>

    </div>
  );
}