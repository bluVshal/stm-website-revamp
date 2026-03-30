import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock3,
  Globe,
  HeartHandshake,
  MapPin,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import PortfolioPage from "../components/Portfolio";

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

const pageData = {
  fit: [
    "Problem-solvers, not task-doers",
    "People who think in systems",
    "Curious and data-driven minds",
    "Clear communicators",
    "Comfortable with responsibility",
  ],
  process: [
    {
      number: "01",
      title: "Apply",
      body: "Send your CV, portfolio, or LinkedIn profile with a short introduction.",
    },
    {
      number: "02",
      title: "Intro Call",
      body: "A quick conversation to understand your background, mindset, and fit.",
    },
    {
      number: "03",
      title: "Task / Case",
      body: "A practical exercise that reflects the kind of thinking the role requires.",
    },
    {
      number: "04",
      title: "Final Discussion",
      body: "A final alignment conversation around expectations, role scope, and next steps.",
    },
  ],
};

const handleClick = () => {
  window.location.href = "#open-roles";
}

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

function CareersHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 md:pb-24 md:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_75%_15%,rgba(141,197,62,0.20),transparent_25%),linear-gradient(180deg,#FFFFFF_0%,#F6F8F7_100%)]" />
      <Container>
        <div className="grid items-center gap-10 rounded-[2rem] border border-[#E6EBE7] bg-white/80 p-6 shadow-[0_16px_40px_rgba(24,32,28,0.06)] backdrop-blur md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="inline-flex rounded-full border border-[#E6EBE7] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F] shadow-sm">
                Careers at STM
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#414042] md:text-6xl"
            >
              Join a team building smarter <span className="text-[#7FAF2D] italic">digital growth</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8 text-[#5E645F]">
              We partner with ambitious brands, move fast, solve real problems, and focus on measurable results. If you like
              clarity, challenge, and impact, you’ll feel at home here.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#5E645F]">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#8DC53E]" />Hybrid-first</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#8DC53E]" />Performance-driven</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#8DC53E]" />Global team</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 h-48 rounded-[1.75rem] bg-[linear-gradient(135deg,#DCEBC1,#F7FAF5)] p-3 shadow-sm md:h-56">
              <div className="h-full rounded-[1.35rem] bg-[radial-gradient(circle_at_30%_20%,rgba(141,197,62,0.25),transparent_18%),linear-gradient(135deg,#2C2E2C,#4A4D4A)]">
                <img loading="lazy" src="/career-desktop2-small.avif" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-contain" />
              </div>
            </div>
            <div className="h-32 rounded-[1.5rem] bg-[linear-gradient(135deg,#EAF5DA,#F8FBF5)] p-3 shadow-sm md:h-36">
              <div className="h-full rounded-[1.2rem] bg-[linear-gradient(135deg,#414042,#353835)]">
                <img loading="lazy" src="/career-desktop-small.avif" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-cover" />
              </div>
            </div>
            <div className="h-32 rounded-[1.5rem] bg-[linear-gradient(135deg,#F3F6F3,#EAF5DA)] p-3 shadow-sm md:h-36">
              <div className="h-full rounded-[1.2rem] bg-[linear-gradient(135deg,#535752,#2A2D2A)]">
                <img loading="lazy" src="/career-desktop3-small.avif" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-cover" />
              </div>
            </div>
            <div className="col-span-2 ml-auto h-24 w-1/2 rounded-[1.4rem] bg-[linear-gradient(135deg,#F6F8F7,#EDF4E5)] p-3 shadow-sm">
              <div className="h-full rounded-[1.1rem] bg-[linear-gradient(135deg,#2B2E2B,#414441)]">
                <img loading="lazy" src="/inclusivity-small.avif" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function RolesSection() {
  return (
    <section id="open-roles" className="bg-[#F6F8F7] py-20 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Open Roles"
          title="Opportunities to join the team"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6"
        >
          < PortfolioPage />
        </motion.div>
      </Container>
    </section>
  );
}

function FitSection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Who Thrives Here"
            title="The kind of people who tend to do well with us"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4"
          >
            {pageData.fit.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-[1.5rem] border border-[#E6EBE7] bg-white p-5 shadow-[0_8px_24px_rgba(24,32,28,0.03)]"
              >
                <div className="rounded-2xl bg-[#EAF5DA] p-2.5 text-[#5A7B24]">
                  <CheckCircle2 size={18} />
                </div>
                <span className="pt-1 text-base font-medium text-[#414042]">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function SpontaneousApplicationSection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2.1rem] bg-[linear-gradient(180deg,#EEF6E4_0%,#E7F2D8_100%)] p-5 shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-6"
        >
          <div className="rounded-[1.8rem] border border-white/70 bg-white p-8 text-center shadow-[0_16px_40px_rgba(24,32,28,0.06)] md:p-12">
            <span className="inline-flex rounded-full bg-[#F1F4F2] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#5E645F]">
              Open application
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-[#414042] md:text-5xl">
              Don’t see a role that fits?
            </h2>
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
    </section>
  );
}

export default function Careers() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#414042]">
      <CareersHero />
      <RolesSection />
      <FitSection />
      <SpontaneousApplicationSection />
    </main>
  );
}
