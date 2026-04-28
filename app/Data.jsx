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
        { label: "Mission and Purpose", href: "/about-us#mission-and-purpose" },
      ],
    },
    { label: "People And Culture", href: "/people-and-culture" },
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
      body: "We build technical, content, and authority systems to help your business achieve lasting search visibility.",
      link: "/services#seo",
    },
    {
      icon: Users,
      title: "CRM & Retention",
      body: "We design lifecycle journeys, segmentation strategies, and retention frameworks to help you increase customer value.",
      link: "/services#crm",
    },
    {
      icon: Sparkles,
      title: "Digital Marketing",
      body: "We create campaign messaging, landing page copy, and content systems focused on driving conversions.",
      link: "/services#digital-marketing",
    },
    {
      icon: BarChart3,
      title: "Analytics & CRO",
      body: "We provide measurement, attribution, experimentation, and conversion insights to help improve your performance.",
      link: "/services#analytics",
    },
    {
      icon: SplinePointer,
      title: "Graphic Design",
      body: "We develop brand identity, campaign creative, and presentation design to enhance your visual presence.",
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
