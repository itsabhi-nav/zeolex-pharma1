export const SITE = {
  name: "Zoelex Pharma",
  legalName: "Zoelex Pharma",
  domain: "zoelexpharma.com",
  url: "https://zoelexpharma.com",
  tagline: "Nutraceutical manufacturing for brands.",
  description:
    "Pune-based nutraceutical manufacturer offering contract manufacturing and private label across vegan gummies, oral thin films, softgels and liposomal formats.",
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
  hours: "Monday to Saturday, 9:30 AM to 6:30 PM IST",
} as const;

export type NavItem = { href: string; label: string; index: string };

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/technologies", label: "Formats", index: "03" },
  { href: "/manufacturing", label: "Manufacturing", index: "04" },
  { href: "/global", label: "Export", index: "05" },
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
    description:
      "Nutraceutical contract manufacturing and private label in Pune, India. Explore gummies, oral thin films, softgels and liposomal formats.",
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
      "Compare vegan gummies, oral thin films, softgels and liposomal formulations, with example wellness categories and ingredient applications.",
  },
  manufacturing: {
    path: "/manufacturing",
    title: "Manufacturing & Quality | Zoelex Pharma",
    description:
      "Explore Zoelex Pharma's contract manufacturing, private label, formulation, packaging and documentation support in Pune, India.",
  },
  global: {
    path: "/global",
    title: "Export Support | Zoelex Pharma",
    description:
      "Discuss nutraceutical manufacturing and export documentation for your destination market with Zoelex Pharma in Pune, India.",
  },
  contact: {
    path: "/contact",
    title: "Contact Us | Zoelex Pharma",
    description:
      "Contact Zoelex Pharma to discuss nutraceutical contract manufacturing, private label and product formats.",
  },
};
