import type { MetadataRoute } from "next";

const ROUTES = [
  "",
  "/about",
  "/technologies",
  "/products",
  "/services",
  "/infrastructure-quality",
  "/why-zoelex",
  "/global-reach",
  "/faqs",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zoelexpharma.com";
  return ROUTES.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
