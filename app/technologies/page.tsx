import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import ProductExplorer from "@/components/ProductExplorer";
import { TECHNOLOGIES, type Format } from "@/lib/technologies";
import { PRODUCT_CATEGORIES, type FormatKey } from "@/lib/products";
import { PAGE_META } from "@/lib/site";

export const metadata: Metadata = {
  title: PAGE_META.technologies.title,
  description: PAGE_META.technologies.description,
  alternates: { canonical: "/technologies" },
};

const FORMAT_KEYS: Record<Format, FormatKey> = {
  gummies: "Gummies",
  otf: "OTF",
  softgels: "Softgels",
  liposomal: "Liposomal",
};

const FORMAT_IMAGES: Record<Format, { src: string; alt: string }> = {
  gummies: {
    src: "/images/gummies-spill.jpg",
    alt: "Red gummy supplements spilling from a clear container",
  },
  otf: {
    src: "/images/effervescent.jpg",
    alt: "A person holding a dissolvable supplement",
  },
  softgels: {
    src: "/images/softgels-2.jpg",
    alt: "Amber softgel capsules in natural light",
  },
  liposomal: {
    src: "/images/droplets.jpg",
    alt: "Water droplets on a green leaf",
  },
};

export default function TechnologiesPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Product formats"
        title={
          <>
            Choose a format for your <em>product brief.</em>
          </>
        }
        lede="Explore the dosage forms Zoelex Pharma manufactures, and the product requirements each can support."
      />

      <section className="section section--deep" id="formats">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow eyebrow--paper">Four manufacturing formats</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                Choose the format that fits your product.
              </h2>
            </Reveal>
          </div>
          <div className="format-summary-grid">
            {TECHNOLOGIES.map((format) => {
              const categories = PRODUCT_CATEGORIES
                .filter((category) => category.formats.includes(FORMAT_KEYS[format.id]))
                .slice(0, 3)
                .map((category) => category.name);
              return (
                <Reveal key={format.id}>
                  <article className="format-summary" id={format.id}>
                    <div className="format-summary__image">
                      <Image
                        src={FORMAT_IMAGES[format.id].src}
                        alt={FORMAT_IMAGES[format.id].alt}
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                      />
                      <span>{format.index}</span>
                    </div>
                    <div className="format-summary__content">
                      <h2>{format.name}</h2>
                      <p>{format.summary}</p>
                      <ul className="format-points">
                        {format.features.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <div className="format-summary__categories">
                        <span className="mono-label mono-label--paper">Example categories</span>
                        <div className="format-summary__chips">
                          {categories.map((category) => (
                            <span className="chip chip--paper" key={category}>{category}</span>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={`/contact?format=${encodeURIComponent(
                          format.id === "otf" ? "Oral Thin Films" : format.shortName
                        )}`}
                        className="btn btn--primary btn--sm"
                      >
                        Discuss {format.shortName} <span className="arrow">→</span>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <p className="note note--paper" style={{ marginTop: 18 }}>
            Ingredient examples are for discussion only. Suitability, specifications and
            applicable requirements are reviewed for each brief.
          </p>
        </div>
      </section>

      <section className="section section--paper" id="categories">
        <div className="wrap">
          <div className="section-head section-head--split">
            <Reveal>
              <p className="eyebrow eyebrow--paper">Product categories</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                Browse by wellness category.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="lede lede--paper">
                Browse example product ideas and the formats that may be
                considered for each category.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <ProductExplorer />
          </Reveal>
          <p className="note note--paper" style={{ marginTop: 18 }}>
            Examples are starting points for discussion. Final product scope depends on
            formulation feasibility and applicable regulations.
          </p>
          <div className="custom-formulation">
            <div>
              <p className="eyebrow eyebrow--paper">Have a different idea?</p>
              <h3 className="display h3" style={{ marginTop: 12 }}>
                Ask us to review your brief.
              </h3>
            </div>
            <Link href="/contact?service=Custom%20Formulation" className="btn btn--primary btn--sm">
              Discuss a custom formulation <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Not sure which format fits?"
        copy="Share your ingredients and intended market. Our team can discuss feasibility and next steps."
      />
    </main>
  );
}
