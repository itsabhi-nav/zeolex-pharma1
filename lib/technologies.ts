export type Format = "gummies" | "otf" | "softgels" | "liposomal";

export type Technology = {
  id: Format;
  index: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  longIntro: string;
  features: string[];
  chips: string[];
};

export const TECHNOLOGIES: Technology[] = [
  {
    id: "gummies",
    index: "01",
    name: "Vegan Gummies",
    shortName: "Gummies",
    tagline: "Plant-based · Great taste",
    summary:
      "Pectin-based gummies with gelatin-free, sugar-free and low-sugar options.",
    longIntro:
      "Plant-based, pectin-set gummies that taste great and deliver accurate doses. Free from gelatin and suitable for vegetarian and vegan consumers.",
    features: [
      "Custom shapes, colours, flavours and coatings, sugar-sanded or oil-coated options",
      "Sugar-free and low-sugar options",
      "Suitable for vitamins, minerals, herbal extracts, probiotics* and more",
      "Packed in bottles, jars or pouches",
    ],
    chips: ["Pectin-set", "Gelatin-free", "Bottles · Jars · Pouches"],
  },
  {
    id: "otf",
    index: "02",
    name: "Oral Thin Films",
    shortName: "Films",
    tagline: "Dissolves on the tongue",
    summary: "Thin strips that dissolve on the tongue, without water.",
    longIntro:
      "Thin strips that dissolve on the tongue and are designed to be taken without water.",
    features: [
      "Portable, individually sealed sachets",
      "An option for people who prefer not to swallow tablets",
      "Suitable for vitamins (B12, D3), melatonin, caffeine, herbal actives and more*",
      "Individually sealed sachets for freshness and portability",
    ],
    chips: ["Water-free", "Fast onset", "Sealed sachets"],
  },
  {
    id: "softgels",
    index: "03",
    name: "Softgels",
    shortName: "Softgels",
    tagline: "Oils · Fat-soluble actives",
    summary:
      "Ideal for oils and fat-soluble actives, with an easy-to-swallow format.",
    longIntro:
      "Smooth, easy-to-swallow capsules ideal for oils and fat-soluble nutrients.",
    features: [
      "Excellent for omega-3, vitamin D, vitamin E, CoQ10 and herbal oils",
      "Protects sensitive actives from oxygen and light",
      "Gelatin and plant-based shell options",
      "Range of sizes, shapes and colours",
    ],
    chips: ["Oil-soluble", "Sealed shells", "Multiple sizes"],
  },
  {
    id: "liposomal",
    index: "04",
    name: "Liposomal Formulations",
    shortName: "Liposomal",
    tagline: "Phospholipid-based",
    summary:
      "Phospholipid-based formulations in liquid and spray options.",
    longIntro:
      "Actives enclosed in phospholipid layers to support better absorption and stability.",
    features: [
      "Suitable for vitamin C, glutathione, iron, curcumin, CoQ10 and more*",
      "Available as liquids, sprays or as inputs for other formats",
      "Masks bitter or metallic tastes",
    ],
    chips: ["Phospholipid layers", "Liquids & sprays", "Taste masking"],
  },
];

export const techById = (id: string) =>
  TECHNOLOGIES.find((t) => t.id === id);
