import Image from "next/image";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/lib/products";

const FORMAT_LABELS: Record<string, string> = {
  Gummies: "Gummies",
  OTF: "Thin films",
  Softgels: "Softgels",
  Liposomal: "Liposomal",
};

const CATEGORY_IMAGES: Record<string, { src: string; alt: string }> = {
  "Vitamins & Minerals": {
    src: "/images/softgels-marble.jpg",
    alt: "Golden softgel capsules on a pale surface",
  },
  Immunity: {
    src: "/images/orange-macro.jpg",
    alt: "Close-up of fresh citrus fruit",
  },
  "Sleep & Stress": {
    src: "/images/ashwagandha.jpg",
    alt: "Green ashwagandha plants",
  },
  "Energy & Focus": {
    src: "/images/gummies-macro.jpg",
    alt: "Colourful gummy supplements",
  },
  "Beauty & Skin": {
    src: "/images/droplets.jpg",
    alt: "Water droplets on a fresh green leaf",
  },
  "Heart & Joint": {
    src: "/images/softgels-2.jpg",
    alt: "Amber softgel capsules",
  },
  "Digestive Health": {
    src: "/images/effervescent.jpg",
    alt: "A person taking a dissolvable supplement",
  },
  "Kids' Nutrition": {
    src: "/images/gummies-spill.jpg",
    alt: "Gummy supplements beside a clear container",
  },
  "Ayurvedic Range": {
    src: "/images/turmeric.jpg",
    alt: "Fresh turmeric root and turmeric powder",
  },
  "Women's Health": {
    src: "/images/gummies-jar.jpg",
    alt: "Gummy supplements in a clear jar",
  },
};

export default function ProductExplorer() {
  return (
    <div className="category-grid">
      {PRODUCT_CATEGORIES.map((category, index) => {
        const image = CATEGORY_IMAGES[category.name];

        return (
          <article className="category-card" key={category.name}>
            <div className="category-card__image">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <span className="category-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="category-card__content">
              <h3>{category.name}</h3>
              <span className="category-card__label">Example product ideas</span>
              <ul className="category-card__examples">
                {category.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <div className="category-card__formats">
                <span>Formats</span>
                <div>
                  {category.formats.map((format) => (
                    <span className="chip chip--paper" key={format}>
                      {FORMAT_LABELS[format]}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/contact?category=${encodeURIComponent(category.name)}`}
                className="category-card__link"
              >
                Discuss this category <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
