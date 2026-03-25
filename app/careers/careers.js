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
  culture: [
    {
      icon: Sparkles,
      title: "Strategy-first",
      body: "We solve the right problems before jumping into execution. Every channel has a purpose.",
    },
    {
      icon: Briefcase,
      title: "Performance-led",
      body: "Decisions are driven by data, testing, and curiosity. We optimize relentlessly.",
    },
    {
      icon: HeartHandshake,
      title: "No fluff",
      body: "We value clarity, efficiency, and real impact over busy work and corporate noise.",
    },
  ],
  benefits: [
    {
      title: "Hybrid Work",
      body: "Work with flexibility while staying connected to a collaborative team rhythm.",
    },
    {
      title: "Growth-Focused",
      body: "You’ll sharpen your thinking, expand your skillset, and take on meaningful responsibility.",
    },
    {
      title: "Real Impact",
      body: "Your work won’t sit in a deck. It will influence campaigns, performance, and client growth.",
    },
    {
      title: "Flexible Hours",
      body: "We care more about quality output and accountability than rigid clock-watching.",
    },
    {
      title: "Learning Support",
      body: "We encourage experimentation, strategic thinking, and continuous improvement.",
    },
    {
      title: "Strong Team",
      body: "Join a team that values clear communication, ownership, and ambition.",
    },
  ],
  roles: [
    {
      title: "SEO Specialist",
      type: "Full-time",
      location: "Hybrid / Remote",
      body: "Own technical and content-driven SEO initiatives across ambitious client accounts.",
    },
    {
      title: "Paid Media Manager",
      type: "Full-time",
      location: "Hybrid / Remote",
      body: "Plan, launch, and optimize paid campaigns with a strong focus on ROAS and efficiency.",
    },
    {
      title: "Content Strategist",
      type: "Full-time",
      location: "Remote",
      body: "Shape content systems, messaging, and landing page narratives that support performance.",
    },
  ],
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
  alert("Button clicked!");
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
      <h2 className="text-3xl font-semibold tracking-tight text-[#202220] md:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-8 text-[#5E645F]">{body}</p>}
    </motion.div>
  );
}

function Button({ children, variant = "primary", className }) {
  const styles = {
    primary:
      "bg-[#8DC53E] text-[#202220] shadow-[0_8px_24px_rgba(24,32,28,0.08)] hover:bg-[#7FB436] hover:-translate-y-0.5",
    secondary:
      "border border-[#E6EBE7] bg-white text-[#202220] shadow-sm hover:bg-[#F8FAF9] hover:-translate-y-0.5",
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
              className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#202220] md:text-6xl"
            >
              Join a team building smarter <span className="text-[#7FAF2D] italic">digital growth</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8 text-[#5E645F]">
              We partner with ambitious brands, move fast, solve real problems, and focus on measurable results. If you like
              clarity, challenge, and impact, you’ll feel at home here.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button onClick={handleClick} >
                View Open Roles
              </Button>
              <Button variant="secondary">Send Your CV</Button>
            </motion.div>
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
                <img src="/career-desktop2.jpg" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-contain" />
              </div>
            </div>
            <div className="h-32 rounded-[1.5rem] bg-[linear-gradient(135deg,#EAF5DA,#F8FBF5)] p-3 shadow-sm md:h-36">
              <div className="h-full rounded-[1.2rem] bg-[linear-gradient(135deg,#202220,#353835)]">
                <img src="/career-desktop.jpg" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-cover" />
              </div>
            </div>
            <div className="h-32 rounded-[1.5rem] bg-[linear-gradient(135deg,#F3F6F3,#EAF5DA)] p-3 shadow-sm md:h-36">
              <div className="h-full rounded-[1.2rem] bg-[linear-gradient(135deg,#535752,#2A2D2A)]">
                <img src="/career-desktop3.jpg" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-cover" />
              </div>
            </div>
            <div className="col-span-2 ml-auto h-24 w-1/2 rounded-[1.4rem] bg-[linear-gradient(135deg,#F6F8F7,#EDF4E5)] p-3 shadow-sm">
              <div className="h-full rounded-[1.1rem] bg-[linear-gradient(135deg,#2B2E2B,#414441)]">
                <img src="/inclusivity.jpg" alt="STM Team" className="h-auto w-auto rounded-[1.35rem] object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function CultureSection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeader
          center
          eyebrow="Culture"
          title="How we work"
          body="Our culture is built on clarity, ownership, and a bias for measurable progress. We care about the thinking behind the work as much as the results."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {pageData.culture.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)]"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-[#EAF5DA] p-3 text-[#5A7B24]">
                  <Icon size={18} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#202220]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#5E645F]">{item.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function LifeAtSTMSection() {
  const items = new Array(6).fill(0);
  return (
    <section className="bg-[#202220] py-20 text-white md:py-24">
      <Container>
        <SectionHeader
          center
          eyebrow="Life at STM"
          title="A glimpse inside the team"
          body="Use this area for photography, team moments, remote setups, work sessions, and brand-building visuals."
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
  );
}

function BenefitsSection() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeader
          center
          eyebrow="Benefits"
          title="What you get"
          body="We invest in the team’s growth, well-being, and environment so people can do their best work."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {pageData.benefits.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[1.75rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-[#202220]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#5E645F]">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
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
          {/* {pageData.roles.map((role) => (
            <motion.div
              key={role.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="grid gap-5 rounded-[1.85rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)] md:grid-cols-[1fr_auto] md:items-center"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-[#202220]">{role.title}</h3>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-[#5E645F]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#F1F4F2] px-3 py-1.5"><Clock3 size={14} />{role.type}</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#F1F4F2] px-3 py-1.5"><MapPin size={14} />{role.location}</span>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#5E645F]">{role.body}</p>
              </div>
              <Button className="md:min-w-[150px]">Apply Now</Button>
            </motion.div>
          ))}*/}

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
                <span className="pt-1 text-base font-medium text-[#202220]">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HiringProcessSection() {
  return (
    <section className="bg-[#F6F8F7] py-20 md:py-24">
      <Container>
        <SectionHeader
          center
          eyebrow="Hiring Process"
          title="A simple application journey"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid gap-6 xl:grid-cols-4"
        >
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-[#DDE4DE] xl:block" />
          {pageData.process.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative rounded-[1.75rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)]"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#8DC53E] text-sm font-bold text-[#202220]">
                <p className="font-semibold text-lg">{step.number}</p>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#202220]">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#5E645F]">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
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
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-[#202220] md:text-5xl">
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

function CareersFinalCTA() {
  return (
    <section className="pb-24 pt-4">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2rem] border border-[#E6EBE7] bg-[#202220] p-8 text-white shadow-[0_24px_60px_rgba(24,32,28,0.14)] md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Careers CTA
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Ready to build something meaningful?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                Start an exciting journey with us.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button>Apply Now</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function Careers() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#202220]">
      <CareersHero />
      <CultureSection />
      <LifeAtSTMSection />
      <BenefitsSection />
      <RolesSection />
      <FitSection />
      <HiringProcessSection />
      <SpontaneousApplicationSection />
      <CareersFinalCTA />
    </main>
  );
}
