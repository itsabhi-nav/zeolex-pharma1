import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { PAGE_META, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: PAGE_META.about.title,
  description: PAGE_META.about.description,
  alternates: { canonical: "/about" },
};

const DIFFERENTIATORS = [
  {
    title: "Format specialists",
    copy: "Four delivery formats under one roof to support a broader product range.",
  },
  {
    title: "Certified quality",
    copy: "GMP, FSSAI and GLP-certified operations with product and batch documentation discussed for each brief.",
  },
  {
    title: "Vegan & clean-label options",
    copy: "Pectin-based, gelatin-free gummies, with natural colours and flavours among the options discussed for a product brief.",
  },
  {
    title: "Ayurveda + modern science",
    copy: "Traditional herbs can be considered in modern, consumer-friendly formats.",
  },
  {
    title: "Flexible MOQs",
    copy: "Minimum order quantities are discussed according to format and project requirements.",
  },
  {
    title: "Speed to market",
    copy: "Ready formulations and an experienced team can help shorten a product’s path to launch.",
  },
  {
    title: "Global outlook",
    copy: "Export documentation and destination-market requirements can be discussed early.",
  },
];

const VALUES = [
  {
    title: "Quality first",
    copy: "No shortcuts — every batch, every time.",
  },
  {
    title: "Innovation",
    copy: "We look for better ways to deliver wellness.",
  },
  {
    title: "Integrity",
    copy: "Transparent pricing, honest timelines and clear communication.",
  },
  {
    title: "Partnership",
    copy: "Your brand’s success is our success.",
  },
  {
    title: "Sustainability",
    copy: "Plant-based choices and responsible manufacturing.",
  },
];

const MISSION_POINTS = [
  "Develop supplement formats that improve compliance and consumer experience.",
  "Uphold high standards of quality, safety and regulatory compliance.",
  "Help brands launch and scale with speed and confidence.",
  "Invest continuously in research, technology and people.",
];

const HIRING_AREAS = [
  "R&D and Formulation",
  "Quality Control & Assurance",
  "Production",
  "Regulatory Affairs",
  "Business Development & Exports",
  "Supply Chain",
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        crumb="About"
        title={
          <>
            Nutraceutical manufacturing, <em>made clearer.</em>
          </>
        }
        lede="Zoelex Pharma is a Pune-based manufacturer helping brands develop products in consumer-friendly supplement formats."
      />

      <section className="section section--deep" id="why-zoelex">
        <div className="wrap split">
          <Reveal variant="left">
            <p className="eyebrow eyebrow--paper">Who we are</p>
            <h2 className="display h2" style={{ margin: "18px 0" }}>
              A manufacturing partner for nutraceutical brands.
            </h2>
            <p className="lede lede--paper">
              We work with brands on contract manufacturing and private-label
              products across gummies, oral thin films, softgels and liposomal
              formats. Each project starts with the product brief: ingredients,
              audience, market and pack.
            </p>
            <p className="lede lede--paper" style={{ marginTop: 16 }}>
              We believe supplements should be as easy to take as they are to
              make. Our focus is on formats that can make daily supplementation
              simpler and more enjoyable; feasibility is reviewed for each brief.
            </p>
            <Link href="/contact" className="btn btn--primary btn--sm" style={{ marginTop: 24 }}>
              Talk to our team <span className="arrow">→</span>
            </Link>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="frame">
              <Image
                src="/images/lab-interior.jpg"
                alt="Pharmaceutical laboratory interior"
                width={1600}
                height={1200}
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--moss about-capabilities">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">Why brands work with us</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                The partner behind your next product.
              </h2>
            </Reveal>
          </div>
          <div className="home-service-grid">
            {DIFFERENTIATORS.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="home-service">
                  <span className="format-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" id="purpose">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow eyebrow--paper">Our purpose</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                What guides our work.
              </h2>
            </Reveal>
          </div>
          <div className="purpose-grid">
            <Reveal>
              <article className="purpose-card purpose-card--vision">
                <span className="purpose-card__index">01 / VISION</span>
                <p className="eyebrow eyebrow--paper">Our vision</p>
                <h3 className="display h3">
                  To be a globally trusted partner for innovative nutraceutical
                  and Ayurvedic delivery formats.
                </h3>
                <span className="purpose-card__rule" aria-hidden="true" />
              </article>
            </Reveal>
            <Reveal delay={70}>
              <article className="purpose-card purpose-card--mission">
                <span className="purpose-card__index">02 / MISSION</span>
                <p className="eyebrow eyebrow--paper">Our mission</p>
                <ul className="mission-list">
                  {MISSION_POINTS.map((point, index) => (
                    <li key={point}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          <div className="values-block">
            <div className="values-block__heading">
              <p className="eyebrow eyebrow--paper">Our values</p>
              <p className="values-block__intro">
                Principles that shape how we work with products, people and partners.
              </p>
            </div>
            <div className="purpose-values-grid">
              {VALUES.map((value, index) => (
                <article className="purpose-value-card" key={value.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <Reveal variant="left" className="founder-reveal">
            <article className="founder-card" aria-label="Founder and CEO">
              <div className="founder-card__portrait">
                <Image
                  src="/images/vidhatri-singh.jpg"
                  alt="Vidhatri Singh, Founder and CEO of Zoelex Pharma"
                  fill
                  sizes="(max-width: 640px) calc(100vw - 40px), 132px"
                />
              </div>
              <div className="founder-card__content">
                <p className="eyebrow eyebrow--paper">Founder</p>
                <h3 className="display h3" style={{ marginTop: 10 }}>Vidhatri Singh</h3>
                <p className="founder-card__title">Founder &amp; CEO, Zoelex Pharma</p>
                <p className="founder-card__story">
                  A pharmaceutical entrepreneur focused on formulation,
                  regulatory pathways and scale-up.
                </p>
              </div>
              <Link
                className="btn btn--primary btn--sm founder-card__link"
                href="/about/founder"
                aria-label="Read more about Vidhatri Singh"
              >
                Read more <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper" id="how-we-work">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <p className="eyebrow eyebrow--paper">How we work</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                Clear steps. Agreed requirements.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <ol className="about-steps">
                <li><span>01</span><p>Share the product brief and target market.</p></li>
                <li><span>02</span><p>Review format and formulation feasibility.</p></li>
                <li><span>03</span><p>Discuss samples, packaging and specifications.</p></li>
                <li><span>04</span><p>Confirm scope, quote and production plan.</p></li>
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--deep" id="careers">
        <div className="wrap">
          <div className="careers-callout">
            <div>
              <p className="eyebrow eyebrow--paper">Careers</p>
              <h2 className="display h2" style={{ marginTop: 16 }}>
                Grow with us.
              </h2>
              <p className="lede lede--paper" style={{ marginTop: 12 }}>
                Work on products that reach people around the world. Bring
                curiosity, ownership and a commitment to quality.
              </p>
              <p className="career-areas-label">
                Areas we hire for
              </p>
              <ul className="career-areas">
                {HIRING_AREAS.map((area) => <li key={area}>{area}</li>)}
              </ul>
              <p className="career-apply-note">
                Send your CV with your area of interest in the subject line.
                Ask us about current openings.
              </p>
            </div>
            <a
              href={`mailto:${SITE.careersEmail}?subject=${encodeURIComponent("Career enquiry - area of interest")}`}
              className="btn btn--primary btn--sm"
            >
              {SITE.careersEmail} <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <CTABand
        title="Looking for a manufacturing partner?"
        copy="Tell us what you are building and we’ll help you understand the available options."
      />
    </main>
  );
}
