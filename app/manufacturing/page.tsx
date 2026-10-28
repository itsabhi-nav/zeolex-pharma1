import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { QUALITY_STEPS, SERVICES } from "@/lib/content";
import { PAGE_META } from "@/lib/site";

export const metadata: Metadata = {
  title: PAGE_META.manufacturing.title,
  description: PAGE_META.manufacturing.description,
  alternates: { canonical: "/manufacturing" },
};

export default function ManufacturingPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Manufacturing"
        title={
          <>
            From formulation to finished <em>pack.</em>
          </>
        }
        lede="Contract and private-label nutraceutical manufacturing in Pune, India. Explore the support available for your product."
      >
        <div className="page-hero-links">
          <Link href="#services" className="btn btn--primary btn--sm">View manufacturing support</Link>
          <Link href="/contact" className="btn btn--ghost btn--sm">Discuss a product</Link>
        </div>
      </PageHero>

      <section className="section section--moss manufacturing-services" id="services">
        <div className="wrap">
          <div className="section-head section-head--split">
            <Reveal>
              <p className="eyebrow">Manufacturing support</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                Choose the support your brief needs.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="lede">
                Available services depend on the product, format and intended
                market. We confirm scope with you before moving ahead.
              </p>
            </Reveal>
          </div>
          <div className="home-service-grid">
            {SERVICES.map((service, index) => (
              <Reveal key={service.num} delay={(index % 3) * 70}>
                <article className="home-service home-service--light">
                  <span className="format-card__number">{service.num}</span>
                  <h3>{service.name}</h3>
                  <p>{service.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--void">
        <div className="wrap split">
          <Reveal variant="left">
            <div className="frame">
              <Image
                src="/images/lab-equipment.jpg"
                alt="Laboratory equipment arranged on a workbench"
                width={1600}
                height={1200}
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <p className="eyebrow eyebrow--paper">Quality and documentation</p>
            <h2 className="display h2" style={{ margin: "18px 0" }}>
              Quality information for each stage.
            </h2>
            <p className="lede lede--paper">
              Zoelex Pharma operates under GMP, FSSAI and GLP certifications.
              Testing and product documentation are discussed against the
              requirements of each brief.
            </p>
            <ul className="certification-list" aria-label="Certifications">
              <li>
                <strong>GMP</strong>
                <span>Manufacturing</span>
              </li>
              <li>
                <strong>FSSAI</strong>
                <span>Food safety</span>
              </li>
              <li>
                <strong>GLP</strong>
                <span>Laboratory</span>
              </li>
            </ul>
            <p className="note note--paper" style={{ marginTop: 14 }}>
              Certificate scope and supporting records can be discussed with our team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper quality-section" id="quality">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow eyebrow--paper">Quality process</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                A sequence of checks, from input to dispatch.
              </h2>
            </Reveal>
          </div>
          <div className="quality-grid">
            {QUALITY_STEPS.map((step, index) => (
              <Reveal key={step.num} delay={index * 55}>
                <article className="quality-step">
                  <span className="format-card__number">{step.num.padStart(2, "0")}</span>
                  <h3>{step.name}</h3>
                  <p>{step.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Let’s discuss your manufacturing brief."
        copy="Share your format, ingredients and target market. We’ll confirm the relevant scope and next steps."
      />
    </main>
  );
}
