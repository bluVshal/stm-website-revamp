import {
  BarChart3,
  Briefcase,
  Building2,
  Globe,
  Layers3,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const cx = (...classes) => classes.filter(Boolean).join(" ");

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const siteData = {
  nav: ["About", "Services", "Work", "Process", "Careers", "Contact"],
  stats: [
    { value: "+184%", label: "Lead growth" },
    { value: "4.2x", label: "ROAS" },
    { value: "+230%", label: "SEO visibility" },
  ],
  trust: ["Fintech", "Professional Services", "B2B SaaS", "E-commerce"],
  services: [
    {
      icon: Search,
      title: "SEO Strategy",
      body: "Technical, content, and authority growth systems built for sustainable search visibility.",
    },
    {
      icon: Target,
      title: "Paid Media",
      body: "Performance campaigns across paid search, social, and display with rigorous optimization.",
    },
    {
      icon: Users,
      title: "CRM & Retention",
      body: "Lifecycle journeys, segmentation, and retention frameworks that increase customer value.",
    },
    {
      icon: Sparkles,
      title: "Creative & Content",
      body: "Campaign messaging, landing page copy, and content systems shaped around conversion.",
    },
    {
      icon: BarChart3,
      title: "Analytics & CRO",
      body: "Measurement, attribution, experimentation, and conversion insights that sharpen performance.",
    },
    {
      icon: Globe,
      title: "Growth Strategy",
      body: "Channel planning and market positioning aligned to commercial outcomes and scale.",
    },
  ],
  industries: [
    {
      icon: Building2,
      title: "Corporate & Professional",
      body: "Clear positioning and measurable pipeline growth for service-led brands.",
    },
    {
      icon: Briefcase,
      title: "Consumer & Lifestyle",
      body: "Acquisition, creative testing, and lifecycle marketing that improve revenue efficiency.",
    },
    {
      icon: Layers3,
      title: "Tech & Digital",
      body: "Go-to-market systems that balance brand clarity with performance execution.",
    },
  ],
  process: [
    {
      number: "01",
      title: "Discover",
      body: "Audit the market, funnel, channels, and opportunity gaps.",
    },
    {
      number: "02",
      title: "Plan",
      body: "Shape a practical roadmap tied to KPIs and business goals.",
    },
    {
      number: "03",
      title: "Execute",
      body: "Launch campaigns, content, testing, and reporting systems.",
    },
    {
      number: "04",
      title: "Scale",
      body: "Double down on what performs and refine continuously.",
    },
  ],
  metrics: [
    { value: "+230%", label: "Organic visibility" },
    { value: "4.2x", label: "Return on ad spend" },
    { value: "-38%", label: "Cost per acquisition" },
    { value: "+62%", label: "Qualified lead growth" },
  ],
  culture: ["Hybrid collaboration", "Growth-focused culture", "High-impact client work"],
};
