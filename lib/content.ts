export type Service = {
  num: string;
  name: string;
  copy: string;
  value: string;
};

export const SERVICES: Service[] = [
  {
    num: "01",
    name: "Contract Manufacturing",
    copy:
      "Scale production with confidence. We manufacture your formulation to your specifications, with full batch documentation and quality testing.",
    value: "Your formula, made to spec, with the paperwork to prove it.",
  },
  {
    num: "02",
    name: "Private Label / White Label",
    copy:
      "Launch your own brand quickly using our proven formulations. Pick a product, add your branding, and go to market in weeks, not months.",
    value: "Ready formulations. Your brand on the shelf, fast.",
  },
  {
    num: "03",
    name: "Formulation & R&D",
    copy:
      "Our scientists develop custom formulas, optimise taste and texture, and run stability studies, balancing efficacy, cost and consumer appeal.",
    value: "From ingredient list to validated, stable formulation.",
  },
  {
    num: "04",
    name: "Packaging & Design Support",
    copy:
      "Bottles, jars, pouches, blister packs and sachets. We support label compliance and can connect you with design partners.",
    value: "The right pack for the format, market and price point.",
  },
  {
    num: "05",
    name: "Regulatory & Documentation",
    copy:
      "COA, MSDS, stability data, product dossiers and FSSAI / export documentation to help your product clear market requirements.",
    value: "Documentation that keeps your launch moving.",
  },
  {
    num: "06",
    name: "Export Support",
    copy:
      "We ship to brand owners and distributors worldwide and help with the paperwork required for international markets.",
    value: "Worldwide shipping with the paperwork handled.",
  },
];

export const PROCESS_STEPS = [
  {
    name: "Enquiry",
    copy: "Share your product idea, target market and volumes.",
  },
  {
    name: "Consultation",
    copy: "We recommend format, formula and packaging.",
  },
  {
    name: "Sampling",
    copy: "We develop samples for your approval.",
  },
  {
    name: "Quote & Agreement",
    copy: "Clear pricing and timelines.",
  },
  {
    name: "Production",
    copy: "Manufacturing with quality checks at every stage.",
  },
  {
    name: "Delivery",
    copy: "Tested, documented and dispatched anywhere in the world.",
  },
] as const;

export const DIFFERENTIATORS = [
  {
    name: "Format Specialists",
    copy:
      "Four advanced delivery formats under one roof, grow your range with a single partner.",
  },
  {
    name: "Certified Quality",
    copy: "GMP, FSSAI and GLP certified operations with full documentation.",
  },
  {
    name: "Vegan & Clean-Label",
    copy:
      "Plant-based gummies and natural colours and flavours for today's conscious consumer.",
  },
  {
    name: "Ayurveda + Modern Science",
    copy: "Traditional herbs delivered in modern, consumer-friendly formats.",
  },
  {
    name: "Flexible MOQs",
    copy:
      "Practical minimum order quantities for startups and established brands alike.",
  },
  {
    name: "Speed to Market",
    copy: "Ready formulations and an experienced team cut your launch time.",
  },
  {
    name: "Global Outlook",
    copy:
      "Export-ready documentation and experience serving international clients.",
  },
] as const;

export const QUALITY_STEPS = [
  {
    num: "1",
    name: "Raw material testing & vendor qualification",
    copy: "Every input is tested and every vendor qualified before use.",
  },
  {
    num: "2",
    name: "In-process checks at every critical step",
    copy: "Documented checks keep production inside specification.",
  },
  {
    num: "3",
    name: "Finished product testing",
    copy: "Potency, purity and microbial limits verified on every batch.",
  },
  {
    num: "4",
    name: "Stability studies",
    copy: "Shelf-life assurance across the product's intended life.",
  },
  {
    num: "5",
    name: "Full batch traceability & COA",
    copy: "A certificate of analysis accompanies every lot we dispatch.",
  },
] as const;

export const FAQS = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "MOQs depend on the format and formulation. Contact our team to discuss your product requirements.",
  },
  {
    q: "Do you offer private label manufacturing?",
    a: "Yes. You can choose from our ready formulations and launch under your own brand name.",
  },
  {
    q: "Can you develop a custom formulation?",
    a: "Absolutely. Our R&D team develops custom formulas, including taste, texture and stability optimisation.",
  },
  {
    q: "Are your gummies vegan?",
    a: "Yes. Our gummies are pectin-based and gelatin-free. Gelatin options are available on request.",
  },
  {
    q: "What is an oral thin film?",
    a: "A thin, stamp-sized strip that dissolves on the tongue in seconds, delivering nutrients without water or swallowing.",
  },
  {
    q: "How long from sample to production?",
    a: "Timelines depend on the formulation, sampling, order size and packaging requirements. Contact our team for an estimate.",
  },
  {
    q: "Do you export?",
    a: "Yes. We supply clients internationally and provide the required export documentation.",
  },
  {
    q: "Which certifications do you hold?",
    a: "We are GMP, FSSAI and GLP certified.",
  },
  {
    q: "What is the shelf life of your products?",
    a: "Shelf life depends on the individual formulation and is confirmed through stability studies. Most product categories are designed for 12–24 months; the exact period for your formulation is confirmed with supporting stability data.",
  },
] as const;
