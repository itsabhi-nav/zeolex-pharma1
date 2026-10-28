export type FormatKey = "Gummies" | "OTF" | "Softgels" | "Liposomal";

export type ProductCategory = {
  name: string;
  examples: string[];
  formats: FormatKey[];
};

/** Format availability must exactly match the approved content deck. */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    name: "Vitamins & Minerals",
    examples: ["Multivitamin", "Vitamin D3", "B12", "Biotin", "Zinc", "Iron"],
    formats: ["Gummies", "OTF", "Softgels", "Liposomal"],
  },
  {
    name: "Immunity",
    examples: ["Vitamin C", "Elderberry", "Zinc + C", "Giloy"],
    formats: ["Gummies", "Liposomal"],
  },
  {
    name: "Sleep & Stress",
    examples: ["Melatonin", "Ashwagandha", "Magnesium", "L-Theanine"],
    formats: ["Gummies", "OTF"],
  },
  {
    name: "Energy & Focus",
    examples: ["Caffeine", "B-Complex", "Ginseng"],
    formats: ["Gummies", "OTF"],
  },
  {
    name: "Beauty & Skin",
    examples: ["Biotin", "Collagen support", "Glutathione", "Hair & Nails"],
    formats: ["Gummies", "Liposomal"],
  },
  {
    name: "Heart & Joint",
    examples: ["Omega-3", "CoQ10", "Turmeric / Curcumin"],
    formats: ["Softgels", "Liposomal"],
  },
  {
    name: "Digestive Health",
    examples: ["Apple Cider Vinegar", "Fibre", "Probiotics"],
    formats: ["Gummies"],
  },
  {
    name: "Kids' Nutrition",
    examples: ["Kids Multivitamin", "Omega", "Vitamin D"],
    formats: ["Gummies", "OTF"],
  },
  {
    name: "Ayurvedic Range",
    examples: ["Ashwagandha", "Shilajit", "Triphala", "Tulsi", "Moringa"],
    formats: ["Gummies", "Softgels", "OTF"],
  },
  {
    name: "Women's Health",
    examples: ["Iron + Folic Acid", "PCOS support", "Prenatal"],
    formats: ["Gummies", "Softgels"],
  },
];
