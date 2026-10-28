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

const CAPABILITIES = [
  {
    title: "Format-led manufacturing",
    copy: "Vegan gummies, oral thin films, softgels and liposomal formulations.",
  },
  {
    title: "Brand partnerships",
    copy: "Contract manufacturing and private-label options for nutraceutical brands.",
  },
  {
    title: "Product support",
    copy: "Discuss formulation, samples, packaging and documentation with one team.",
  },
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
              From there, our team discusses format suitability, formulation
              feasibility, samples and production requirements.
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
              <p className="eyebrow">How we support brands</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                Practical support at each stage.
              </h2>
            </Reveal>
          </div>
          <div className="home-service-grid">
            {CAPABILITIES.map((item, index) => (
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
        <div className="wrap careers-callout">
          <div>
            <p className="eyebrow eyebrow--paper">Careers</p>
            <h2 className="display h2" style={{ marginTop: 16 }}>
              Interested in working with us?
            </h2>
            <p className="lede lede--paper" style={{ marginTop: 12 }}>
              Send your details and area of interest to our team.
            </p>
          </div>
          <a
            href={`mailto:${SITE.careersEmail}?subject=${encodeURIComponent("Career enquiry")}`}
            className="btn btn--primary btn--sm"
          >
            {SITE.careersEmail} <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <CTABand
        title="Looking for a manufacturing partner?"
        copy="Tell us what you are building and we’ll help you understand the available options."
      />
    </main>
  );
}
