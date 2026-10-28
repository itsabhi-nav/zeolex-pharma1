export const SITE = {
  name: "Zoelex Pharma",
  legalName: "Zoelex Pharma",
  domain: "zoelexpharma.com",
  url: "https://zoelexpharma.com",
  tagline: "Wellness, Reimagined in Every Format.",
  description:
    "GMP, FSSAI & GLP certified manufacturer of vegan gummies, oral thin films, softgels and liposomal nutraceuticals in Pune. Private label & contract manufacturing worldwide.",
  address: {
    line1: "Office No. 1, S. No. 50/15/1, Samarth Sankul",
    line2: "Dhayari, Pune, Haveli",
    line3: "Maharashtra 411041, India",
    full:
      "Office No. 1, S. No. 50/15/1, Samarth Sankul, Dhayari, Pune, Haveli, Maharashtra 411041, India",
  },
  phone: "+91 93117 16003",
  phoneHref: "tel:+919311716003",
  whatsapp:
    "https://wa.me/919311716003?text=" +
    encodeURIComponent(
      "Hello Zoelex Pharma, I would like to discuss a nutraceutical manufacturing enquiry."
    ),
  email: "info@zoelexpharma.com",
  careersEmail: "careers@zoelexpharma.com",
  hours: "Monday to Saturday, 9:30 AM – 6:30 PM IST",
} as const;

export type NavItem = { href: string; label: string; index: string };

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/technologies", label: "Technologies", index: "03" },
  { href: "/manufacturing", label: "Manufacturing", index: "04" },
  { href: "/global", label: "Global", index: "05" },
  { href: "/contact", label: "Contact", index: "06" },
];

export const DISCLAIMER =
  "Products manufactured by Zoelex Pharma are dietary / nutraceutical supplements and are not intended to diagnose, treat, cure or prevent any disease.";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    path: "/",
    title:
      "Zoelex Pharma | Vegan Gummies, Oral Thin Films & Softgel Manufacturer in India",
    description: SITE.description,
  },
  about: {
    path: "/about",
    title: "About Us | Zoelex Pharma",
    description:
      "Zoelex Pharma is a Pune-based manufacturer of novel delivery and nutraceutical products, vegan gummies, oral thin films, softgels and liposomal formulations.",
  },
  technologies: {
    path: "/technologies",
    title: "Technologies | Zoelex Pharma",
    description:
      "Four advanced delivery formats, vegan gummies, oral thin films, softgels and liposomal formulations, plus ready-to-launch formulations across ten wellness categories.",
  },
  manufacturing: {
    path: "/manufacturing",
    title: "Manufacturing & Quality | Zoelex Pharma",
    description:
      "Contract manufacturing, private label, R&D, packaging, regulatory and export support, backed by GMP, FSSAI and GLP certified operations in Pune.",
  },
  global: {
    path: "/global",
    title: "Global Reach | Zoelex Pharma",
    description:
      "Made in India, trusted worldwide. Zoelex Pharma manufactures for brands in India and international markets with export-ready documentation.",
  },
  contact: {
    path: "/contact",
    title: "Contact Us | Zoelex Pharma",
    description:
      "Talk to Zoelex Pharma about your product idea. We respond within 24/48 hours, plus answers to the questions buyers ask most.",
  },
};
