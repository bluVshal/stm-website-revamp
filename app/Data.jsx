import {
  BarChart3,
  Briefcase,
  Building2,
  Layers3,
  Search,
  Sparkles,
  SplinePointer,
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
  nav: [
    { label: "About Us",
      children: [
        { label: "Who We Are", href: "/about-us#who-we-are" },
        { label: "What We Do", href: "/about-us#what-we-do" },
      ],
    },
    { label: "People And Culture" },
    {
      label: "Services",
      children: [
        { label: "SEO Strategy", href: "/services#seo" },
        { label: "Digital Marketing", href: "/services#digital-marketing" },
        { label: "CRM & Retention", href: "/services#crm" },
        { label: "Graphic Design", href: "/services#graphic-design" },
        { label: "Analytics & CRO", href: "/services#analytics" },
      ],
    },
    { label: "Careers" },
  ],
  services: [
    {
      icon: Search,
      title: "SEO Strategy",
      body: "Technical, content, and authority growth systems built for sustainable search visibility.",
      link: "/services#seo",
    },
    {
      icon: Users,
      title: "CRM & Retention",
      body: "Lifecycle journeys, segmentation, and retention frameworks that increase customer value.",
      linek: "/services#crm",
    },
    {
      icon: Sparkles,
      title: "Digital Marketing",
      body: "Campaign messaging, landing page copy, and content systems shaped around conversion.",
      link: "/services#digital-marketing",
    },
    {
      icon: BarChart3,
      title: "Analytics & CRO",
      body: "Measurement, attribution, experimentation, and conversion insights that sharpen performance.",
      link: "/services#analytics",
    },
    {
      icon: SplinePointer,
      title: "Graphic Design",
      body: "Brand identity, campaign creative, and presentation design that elevate your visual presence.",
      link: "/services#graphic-design",
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
  culture: ["Hybrid collaboration", "Growth-focused culture", "High-impact client work"],
};
