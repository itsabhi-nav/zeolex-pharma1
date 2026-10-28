import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTABand from "@/components/CTABand";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";
import Parallax from "@/components/Parallax";
import { TECHNOLOGIES } from "@/lib/technologies";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import { SERVICES, DIFFERENTIATORS } from "@/lib/content";
import { PAGE_META } from "@/lib/site";

export const metadata = {
  title: PAGE_META.home.title,
  description: PAGE_META.home.description,
  alternates: { canonical: "/" },
};

const STACK_TINTS = ["stack__card--1", "stack__card--2", "stack__card--3", "stack__card--4"];

// one unique image per format, never repeated elsewhere on the site
const STACK_IMG: Record<string, { src: string; alt: string }> = {
  gummies: {
    src: "/images/gummies-spill.jpg",
    alt: "Vegan gummies spilling from a jar onto a bright surface",
  },
  otf: {
    src: "/images/films-pastel.jpg",
    alt: "Warm translucent glass forms catching soft light",
  },
  softgels: {
    src: "/images/softgels-vibrant.jpg",
    alt: "Golden softgel capsules in close-up",
  },
  liposomal: {
    src: "/images/oil-bubbles.jpg",
    alt: "Oil bubbles suspended in liquid, a macro view of encapsulation",
  },
};

export default function HomePage() {
  return (
    <main id="main">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <Image
            src="/images/lipo-copper.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
          />
          <div className="hero__scrim" />
        </div>
        <div className="wrap hero__inner">
          <h1 className="display h1">
            <span className="hero__line">
              <span>Wellness,</span>
            </span>
            <span className="hero__line">
              <span>reimagined in</span>
            </span>
            <span className="hero__line">
              <span>
                every <em>format</em>.
              </span>
            </span>
          </h1>
          <p className="lede hero__lede hero__meta">
            Zoelex Pharma manufactures vegan gummies, oral thin films,
            softgels and liposomal nutraceuticals for brands across the
            world, from formulation to finished pack.
          </p>
          <div className="hero__ctas">
            <Link href="/contact" className="btn btn--primary">
              Request a Quote <span className="arrow">→</span>
            </Link>
            <Link href="/technologies" className="btn btn--ghost">
              Explore Our Technologies <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ EDITORIAL INTRO ============ */}
      <section className="section section--deep">
        <div className="wrap">
          <div className="split">
            <Reveal variant="left">
              <div className="frame" style={{ transform: "rotate(-1.4deg)" }}>
                <Parallax strength={26}>
                  <Image
                    src="/images/effervescent.jpg"
                    alt="An effervescent tablet dissolving into a glass of water"
                    width={1600}
                    height={1200}
                  />
                </Parallax>
              </div>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <p className="eyebrow">The company</p>
              <h2 className="display h2" style={{ margin: "24px 0 28px" }}>
                Supplements should be <em>easy to take</em> as they are effective.
              </h2>
              <p className="lede" style={{ marginBottom: 20 }}>
                At Zoelex Pharma, we believe supplements should be as easy to
                take as they are effective. From our facility in Pune, India,
                we develop and manufacture next-generation nutraceutical and
                Ayurvedic products in formats people actually enjoy.
              </p>
              <p className="lede">
                Our GMP, FSSAI and GLP certified operations help brands launch
                faster, scale reliably and win consumer trust.
              </p>
              <div style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/about" className="btn btn--primary btn--sm">
                  Our Story <span className="arrow">→</span>
                </Link>
                <Link href="/about#why-zoelex" className="btn btn--ghost btn--sm">
                  Why Zoelex <span className="arrow">→</span>
                </Link>
              </div>
              <p className="hero__certs" style={{ marginTop: 22 }}>
                GMP · FSSAI · GLP certified
              </p>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="stats" style={{ marginTop: "clamp(64px, 9vw, 120px)" }}>
            <Reveal>
              <span className="big">
                <CountUp to={4} />
              </span>
              <span className="mono-label mono-label--paper">Advanced dosage formats</span>
            </Reveal>
            <Reveal delay={90}>
              <span className="big">3</span>
              <span className="mono-label mono-label--paper">Certified operations</span>
              <span className="note note--paper" style={{ marginTop: 2 }}>
                GMP · FSSAI · GLP
              </span>
            </Reveal>
            <Reveal delay={180}>
              <span className="big">
                <CountUp to={100} suffix="%" />
              </span>
              <span className="mono-label mono-label--paper">
                Vegan gummy options, pectin-based, gelatin-free
              </span>
            </Reveal>
            <Reveal delay={270}>
              <span className="big">
                <abbr title="Figure to be published once verified by the client" style={{ textDecoration: "none" }}>
                  XX<sup>+</sup>
                </abbr>
              </span>
              <span className="mono-label mono-label--paper">Countries served</span>
              <span className="note note--paper" style={{ marginTop: 2 }}>
                Pending verification
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ STICKY FORMAT STORY ============ */}
      <section className="section section--void" id="formats">
        <div className="wrap">
          <div className="section-head section-head--split" style={{ position: "relative" }}>
            <div>
              <Reveal variant="up">
                <p className="eyebrow">The technologies · a scroll story</p>
                <h2 className="display h2" style={{ marginTop: 22 }}>
                  Four formats. <em>One</em> partner.
                </h2>
              </Reveal>
            </div>
            <Reveal variant="up" delay={120}>
              <p className="lede">
                The format is the product experience. Keep scrolling, each
                delivery technology arrives with its own material character.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="stack" style={{ maxWidth: "var(--max-w)", marginInline: "auto" }}>
          {TECHNOLOGIES.map((t, idx) => (
            <article className={`stack__card ${STACK_TINTS[idx]}`} key={t.id}>
              <div>
                <div className="idx-line">
                  <span className="chip">{t.tagline}</span>
                </div>
                <h3>{t.name}</h3>
                <p className="big-copy">{t.longIntro}</p>
                <ul className="flist" style={{ marginTop: 26 }}>
                  {t.features.map((f) => (
                    <li key={f}>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 32 }}>
                  <Link
                    href={`/contact?format=${encodeURIComponent(
                      t.id === "otf" ? "Oral Thin Films" : t.shortName
                    )}`}
                    className="btn btn--sm btn--primary"
                  >
                    Discuss {t.shortName} <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
              <div className="stack__viz">
                <Image
                  src={STACK_IMG[t.id].src}
                  alt={STACK_IMG[t.id].alt}
                  fill
                  sizes="(max-width: 900px) 90vw, 480px"
                />
              </div>
            </article>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 18 }}>
          <p className="note">
            *Ingredient suitability depends on formulation stability studies.
            Our R&amp;D team will advise on feasibility.
          </p>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section section--deep">
        <div className="hairgrid" aria-hidden="true" style={{ maskImage: "radial-gradient(60% 80% at 20% 20%, #000, transparent)" }} />
        <div className="wrap">
          <div className="section-head" style={{ position: "relative" }}>
            <Reveal variant="up">
              <p className="eyebrow">The partnership</p>
              <h2 className="display h2" style={{ marginTop: 22, maxWidth: "22ch" }}>
                From a shared idea to a <em>shipped</em> product.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up">
            <ProcessTimeline />
          </Reveal>
          <div style={{ marginTop: 48 }}>
            <Link href="/about#why-zoelex" className="btn btn--ghost btn--sm">
              How we work <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES PREVIEW ============ */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div style={{ position: "relative" }}>
              <Reveal variant="up">
                <p className="eyebrow eyebrow--paper">Product categories</p>
                <h2 className="display h2" style={{ marginTop: 22 }}>
                  Wellness, across <em style={{ color: "var(--coral-deep)" }}>every shelf</em>.
                </h2>
              </Reveal>
            </div>
            <Reveal variant="up" delay={110}>
              <p className="lede lede--paper">
                Ten categories of tested formulations, each available in one
                or more of our four formats. Choose ready-made, or let R&amp;D
                build yours from scratch.
              </p>
            </Reveal>
          </div>
          <div className="cat-preview">
            {PRODUCT_CATEGORIES.map((c, i) => (
              <Reveal key={c.name} delay={(i % 5) * 70} variant="scale">
                <Link href={`/technologies#categories`} className="catcard">
                  <span className="num" style={{ color: "var(--coral-deep)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="catcard__name">{c.name}</span>
                  <span className="catcard__fmt">
                    {c.formats.length} format{c.formats.length > 1 ? "s" : ""}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 44 }}>
            <Link href="/technologies#categories" className="btn btn--primary btn--sm">
              Explore All Categories <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section section--void">
        <div className="wrap">
          <div className="section-head">
            <Reveal variant="up">
              <p className="eyebrow">Manufacturing services</p>
              <h2 className="display h2" style={{ marginTop: 22 }}>
                Everything after the <em>idea</em>.
              </h2>
            </Reveal>
          </div>
          <div className="grid-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.num} delay={(i % 3) * 90} variant="up">
                <Link
                  href={`/manufacturing#services`}
                  className="svc-mini"
                >
                  <span className="num">{s.num}</span>
                  <h3>{s.name}</h3>
                  <p>{s.value}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ QUALITY ============ */}
      <section className="section section--paper" style={{ paddingBlock: 0 }}>
        <div className="wrap">
          <div className="split" style={{ paddingBlock: "clamp(84px,11vw,150px)" }}>
            <Reveal variant="left">
              <div className="frame">
                <Parallax strength={22}>
                  <Image
                    src="/images/agar.jpg"
                    alt="Microbiology agar plates prepared for quality-control testing"
                    width={1600}
                    height={1200}
                  />
                </Parallax>
              </div>
            </Reveal>
            <Reveal variant="right" delay={140}>
              <p className="eyebrow eyebrow--paper">Infrastructure &amp; quality</p>
              <h2 className="display h2" style={{ margin: "22px 0 26px" }}>
                Built for <em style={{ color: "var(--coral-deep)" }}>precision</em>. Certified for trust.
              </h2>
              <ul className="checks checks--paper">
                {[
                  "Dedicated lines for gummies, oral thin films, softgels and liposomal products",
                  "Controlled temperature and humidity zones",
                  "In-house quality control laboratory",
                  "Raw-material testing and vendor qualification",
                  "Stability studies, batch traceability and COA with every lot",
                ].map((q) => (
                  <li key={q} style={{ color: "var(--tx-paper-muted)" }}>
                    {q}
                  </li>
                ))}
              </ul>
              <Link href="/manufacturing#quality" className="btn btn--primary btn--sm" style={{ marginTop: 28 }}>
                Inside Our Facility <span className="arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHY ZOELEX STRIP ============ */}
      <section className="section section--moss">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div style={{ position: "relative" }}>
              <Reveal variant="up">
                <p className="eyebrow">Why Zoelex</p>
                <h2 className="display h2" style={{ marginTop: 22 }}>
                  The partner behind <em>great</em> wellness brands.
                </h2>
              </Reveal>
            </div>
            <Reveal variant="up" delay={110}>
              <p className="lede">
                Format specialisation, certified quality and a global outlook
                the reasons brands build their ranges with us.
              </p>
            </Reveal>
          </div>
          <div className="values">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal className="value" key={d.name} delay={(i % 4) * 70} variant="up">
                <span className="vn">{String(i + 1).padStart(2, "0")}</span>
                <h3>{d.name}</h3>
                <p>{d.copy}</p>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 42 }}>
            <Link href="/about#why-zoelex" className="btn btn--primary btn--sm">
              Full business case <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <CTABand />

      {/* ============ TASTE STRIP ============ */}
      <Marquee reverse />
    </main>
  );
}
