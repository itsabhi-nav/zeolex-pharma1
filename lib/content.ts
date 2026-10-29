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
      "Manufacture your formulation to agreed specifications, with quality testing and batch documentation discussed for the project.",
    value: "Your formulation, made to the agreed specification.",
  },
  {
    num: "02",
    name: "Private Label / White Label",
    copy:
      "Explore suitable tested ready formulations for your brand. Product scope, branding and launch timing depend on the project.",
    value: "Ready-formulation options for your brand.",
  },
  {
    num: "03",
    name: "Formulation & R&D",
    copy:
      "Discuss custom formulas, taste and texture development, and stability studies against your product brief.",
    value: "Discuss formulation feasibility and product requirements.",
  },
  {
    num: "04",
    name: "Packaging & Design Support",
    copy:
      "Discuss bottles, jars, pouches, blister packs or sachets, label requirements and design-partner support.",
    value: "Packaging options aligned to format and market.",
  },
  {
    num: "05",
    name: "Regulatory & Documentation",
    copy:
      "Available documents may include COA, MSDS, stability data, product dossiers and applicable FSSAI or export documentation.",
    value: "Product and batch documentation, as applicable.",
  },
  {
    num: "06",
    name: "Export Support",
    copy:
      "Review destination-market requirements and the export documentation relevant to your product and shipment.",
    value: "Export requirements reviewed for your destination market.",
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
      "Four dosage formats for brands developing a nutraceutical product range.",
  },
  {
    name: "Certified Quality",
    copy: "GMP, FSSAI and GLP certified operations.",
  },
  {
    name: "Vegan & Clean-Label",
    copy:
      "Pectin-based gummies with gelatin-free options.",
  },
  {
    name: "Ayurveda + Modern Science",
    copy: "Traditional herbs delivered in modern, consumer-friendly formats.",
  },
  {
    name: "Flexible MOQs",
    copy: "Minimum order quantities are discussed for each format and project.",
  },
  {
    name: "Speed to Market",
    copy: "Discuss ready formulations and a production plan for your brief.",
  },
  {
    name: "Global Outlook",
    copy:
      "Discuss documentation and requirements for your intended market.",
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
    a: "Minimum order quantities vary by format and formulation. Share your brief to discuss current requirements.",
  },
  {
    q: "Do you offer private label manufacturing?",
    a: "Yes. You can choose from our ready formulations and launch under your own brand name.",
  },
  {
    q: "Can you develop a custom formulation?",
    a: "Share your brief with our team. Formulation feasibility and scope are reviewed for each product.",
  },
  {
    q: "Are your gummies vegan?",
    a: "Yes. Our gummies are pectin-based and gelatin-free. Gelatin options are available on request.",
  },
  {
    q: "What is an oral thin film?",
    a: "A thin strip that dissolves on the tongue. It is designed to be taken without water.",
  },
  {
    q: "How long from sample to production?",
    a: "Timelines depend on the formulation, sampling, order size and packaging requirements. Contact our team for an estimate.",
  },
  {
    q: "Do you export?",
    a: "Contact us with your destination market so product availability and documentation requirements can be discussed.",
  },
  {
    q: "Which certifications do you hold?",
    a: "We are GMP, FSSAI and GLP certified.",
  },
  {
    q: "What is the shelf life of your products?",
    a: "Shelf life depends on the individual formulation and is confirmed through the relevant stability data.",
  },
] as const;
