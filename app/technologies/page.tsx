import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import ProductExplorer from "@/components/ProductExplorer";
import Parallax from "@/components/Parallax";
import { TECHNOLOGIES } from "@/lib/technologies";
import { PRODUCT_CATEGORIES, type FormatKey } from "@/lib/products";
import { PAGE_META } from "@/lib/site";

export const metadata: Metadata = {
  title: PAGE_META.technologies.title,
  description: PAGE_META.technologies.description,
  alternates: { canonical: "/technologies" },
};

// one unique image per deep-dive, none reused elsewhere on the site
const DETAIL_IMG: Record<string, { src: string; alt: string }> = {
  gummies: {
    src: "/images/gummies-jar.jpg",
    alt: "Gummy candies in a glass jar",
  },
  otf: {
    src: "/images/chrome-waves.jpg",
    alt: "Liquid chrome waves catching light",
  },
  softgels: {
    src: "/images/softgels-marble.jpg",
    alt: "Translucent capsules arranged on marble",
  },
  liposomal: {
    src: "/images/drops-collide.jpg",
    alt: "Two drops of liquid colliding in macro",
  },
};

export default function TechnologiesPage() {
  const compat = (format: FormatKey) =>
    PRODUCT_CATEGORIES.filter((c) => c.formats.includes(format)).map((c) => c.name);

  return (
    <main id="main">
      <PageHero
        crumb="Technologies"
        title={
          <>
            Four Formats. <em>Endless</em> Possibilities.
          </>
        }
        lede="The right format can make or break a product. We help you choose the one that suits your active ingredients, your audience and your market."
      />

      {/* At a glance */}
      <section className="section section--deep" style={{ paddingTop: "clamp(50px,7vw,90px)" }}>
        <div className="wrap">
          <div className="section-head" style={{ position: "relative" }}>
            <Reveal variant="up">
              <p className="eyebrow">Compare</p>
              <h2 className="display h3" style={{ marginTop: 20 }}>
                Which format suits your actives?
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up">
            <div className="glass" style={{ overflow: "auto", WebkitOverflowScrolling: "touch" }}>
              <table className="cmp-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--fs-sm)", minWidth: 760 }}>
                <thead>
                  <tr>
                    {["Format", "Character", "Best suited for", "Packaging", "Customisation"].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        style={{
                          padding: "16px 20px",
                          borderBottom: "1px solid var(--hair-2)",
                          textAlign: "left",
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--fs-xs)",
                          fontWeight: 600,
                          color: "var(--tx)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      f: "Vegan Gummies",
                      c: "Plant-based, pectin-set, great taste",
                      s: "Vitamins, minerals, herbal extracts, probiotics*",
                      p: "Bottles, jars, pouches",
                      x: "Shapes, colours, flavours, coatings; sugar-free & low-sugar",
                    },
                    {
                      f: "Oral Thin Films",
                      c: "Ultra-thin strips, dissolve in seconds, no water",
                      s: "B12, D3, melatonin, caffeine, herbal actives*",
                      p: "Individually sealed sachets",
                      x: "Portable, fast-onset dosing",
                    },
                    {
                      f: "Softgels",
                      c: "Smooth, easy to swallow, sealed shells",
                      s: "Omega-3, vitamin D & E, CoQ10, herbal oils",
                      p: "Bottles, blister packs",
                      x: "Sizes, shapes, colours; gelatin or plant-based shells",
                    },
                    {
                      f: "Liposomal",
                      c: "Actives in phospholipid layers for stability",
                      s: "Vitamin C, glutathione, iron, curcumin, CoQ10*",
                      p: "Liquids, sprays, inputs for other formats",
                      x: "Masks bitter or metallic tastes",
                    },
                  ].map((r) => (
                    <tr key={r.f}>
                      <th scope="row" style={{ padding: "16px 20px", borderBottom: "1px solid var(--hair)", textAlign: "left", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "var(--fs-lg)", color: "var(--tx)", whiteSpace: "nowrap" }}>
                        {r.f}
                      </th>
                      {[r.c, r.s, r.p, r.x].map((cell, j) => (
                        <td key={j} style={{ padding: "16px 20px", borderBottom: "1px solid var(--hair)", color: "var(--tx-muted)", verticalAlign: "top" }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="note" style={{ marginTop: 18 }}>
            *Ingredient suitability depends on formulation stability studies. Our R&amp;D team
            will advise on feasibility.
          </p>
        </div>
      </section>

      {/* Format deep-dives */}
      <section className="section--deep" style={{ borderTop: "1px solid var(--hair)" }}>
        <div className="wrap">
          {TECHNOLOGIES.map((t) => (
            <div className="tdetail" id={t.id} key={t.id}>
              <Reveal variant="left">
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span className="num" style={{ fontSize: "var(--fs-sm)" }}>
                      {t.index}
                    </span>
                    <span className="chip">{t.tagline}</span>
                  </div>
                  <h2 className="display h2" style={{ margin: "20px 0 18px" }}>
                    {t.name}
                  </h2>
                  <p className="lede">{t.longIntro}</p>
                  <ul className="flist">
                    {t.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <p className="mono-label" style={{ marginTop: 26, marginBottom: 12 }}>
                    Commonly requested categories
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {compat((t.id === "otf" ? "OTF" : t.shortName) as FormatKey).slice(0, 5).map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
                    <Link
                      href={`/contact?format=${encodeURIComponent(
                        t.id === "otf" ? "Oral Thin Films" : t.shortName
                      )}`}
                      className="btn btn--primary btn--sm"
                    >
                      Discuss {t.shortName} <span className="arrow">→</span>
                    </Link>
                    <Link href="/technologies#categories" className="btn btn--ghost btn--sm">
                      See example products <span className="arrow">→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
              <Reveal variant="right" delay={130} className="tdetail__viz">
                <Image
                  src={DETAIL_IMG[t.id].src}
                  alt={DETAIL_IMG[t.id].alt}
                  fill
                  sizes="(max-width: 940px) 90vw, 500px"
                />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PRODUCT CATEGORIES (merged) ============ */}
      <section className="section section--paper" id="categories">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div style={{ position: "relative" }}>
              <Reveal variant="up">
                <p className="eyebrow eyebrow--paper">Products · Formulation library</p>
                <h2 className="display h2" style={{ marginTop: 22 }}>
                  Ready-to-Launch Formulations Across <em style={{ color: "var(--coral-deep)" }}>Wellness Categories</em>
                </h2>
              </Reveal>
            </div>
            <Reveal variant="up" delay={110}>
              <p className="lede lede--paper">
                Choose from our tested formulations or let us build one from
                scratch. Each category is available in one or more of our four
                formats.
              </p>
            </Reveal>
          </div>

          <Reveal variant="up">
            <ProductExplorer />
          </Reveal>
          <p className="note note--paper" style={{ marginTop: 20 }}>
            Example products indicate potential product applications, subject
            to formulation feasibility and applicable regulations.
          </p>

          <div className="split" style={{ marginTop: "clamp(60px,8vw,110px)", alignItems: "stretch" }}>
            <Reveal variant="left">
              <div
                style={{
                  border: "1px solid var(--bone-line)",
                  borderRadius: "var(--r-lg)",
                  padding: "clamp(30px,4vw,52px)",
                  background: "var(--bone-panel)",
                  height: "100%",
                  display: "grid",
                  gap: 18,
                  alignContent: "start",
                }}
              >
                <p className="eyebrow eyebrow--paper">Not something listed?</p>
                <h3 className="display h3" style={{ maxWidth: "24ch" }}>
                  Share your ingredient list and target market, and our R&amp;D team will check feasibility.
                </h3>
                <Link href="/contact?service=Custom%20Formulation" className="btn btn--primary btn--sm" style={{ justifySelf: "start" }}>
                  Start a Custom Formulation <span className="arrow">→</span>
                </Link>
                <hr className="rule rule--paper" style={{ margin: "10px 0" }} />
                <span className="placeholder-pill">Product catalogue PDF, pending from client</span>
                <p className="note note--paper">
                  A downloadable catalogue will appear here once the official
                  document is supplied. Request a copy directly from our team.
                </p>
                <Link href="/contact?category=Catalogue%20request" className="btn btn--paper-ghost btn--sm" style={{ justifySelf: "start" }}>
                  Request a Catalogue <span className="arrow">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal variant="right" delay={130}>
              <div style={{ display: "grid", gap: 18 }}>
                <div className="frame">
                  <Parallax strength={22}>
                    <Image
                      src="/images/gummies-macro.jpg"
                      alt="Colourful translucent gummy candies in macro detail"
                      width={1600}
                      height={1200}
                    />
                  </Parallax>
                </div>
                <div className="frame" style={{ transform: "rotate(0.9deg)" }}>
                  <Parallax strength={18}>
                    <Image
                      src="/images/orange-macro.jpg"
                      alt="Orange slices in macro detail"
                      width={1600}
                      height={1200}
                    />
                  </Parallax>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Which format fits your ingredients?"
        copy="Share your ingredient list, target market and product requirements with our R&D team, we will advise on feasibility and the best format."
      />
    </main>
  );
}
