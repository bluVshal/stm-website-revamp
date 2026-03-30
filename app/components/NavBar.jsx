"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cx, siteData } from "../Data";
import { Button } from "./Buttons";

export function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <motion.header
        layout
        className={cx(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-4 md:px-6",
          scrolled
            ? "border-white/70 bg-white/80 shadow-[0_16px_40px_rgba(24,32,28,0.10)] backdrop-blur-xl"
            : "border-transparent bg-white/60 backdrop-blur-md"
        )}
      >
        <a href="/" className="flex items-center gap-3">
          <img loading="lazy" src="/STM-Consulting_Logo_(small).png" alt="STM Logo" className="h-auto w-auto" />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {siteData.nav.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative text-sm font-medium text-[#4B504C] transition hover:text-[#414042]"
            >
              {item}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-[#8DC53E] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button icon={<ArrowRight size={16} />}>Let&apos;s Talk</Button>
        </div>

        <button
          type="button"
          className="rounded-xl border border-[#E6EBE7] p-2 text-[#414042] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mx-auto mt-3 max-w-7xl rounded-2xl border border-[#E6EBE7] bg-white p-4 shadow-[0_16px_40px_rgba(24,32,28,0.08)] md:hidden"
        >
          <div className="grid gap-2">
            {siteData.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-xl px-3 py-2 text-sm font-medium text-[#414042] hover:bg-[#F1F4F2]">
                {item}
              </a>
            ))}
            <Button className="mt-2 w-full" icon={<ArrowRight size={16} />}>
              Let&apos;s Talk
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
