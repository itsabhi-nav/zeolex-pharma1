import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { PAGE_META } from "@/lib/site";

export const metadata: Metadata = {
  title: PAGE_META.global.title,
  description: PAGE_META.global.description,
  alternates: { canonical: "/global" },
};

const STEPS = [
  { title: "Share the destination", copy: "Tell us the country or market where the product is intended to be sold." },
  { title: "Review requirements", copy: "Discuss product documents and market-specific requirements before production." },
  { title: "Confirm the product", copy: "Agree the formula, format, packaging and manufacturing scope." },
  { title: "Plan dispatch", copy: "Align production timing and shipping arrangements for the order." },
];

export default function GlobalPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Export"
        title={
          <>
            Export support starts with your <em>destination market.</em>
          </>
        }
        lede="Zoelex Pharma manufactures in Pune, India. Share your target market early so product and documentation requirements can be discussed."
      />

      <section className="section section--deep">
        <div className="wrap split">
          <Reveal variant="left">
            <p className="eyebrow eyebrow--paper">For international enquiries</p>
            <h2 className="display h2" style={{ margin: "18px 0" }}>
              Plan market requirements before production.
            </h2>
            <p className="lede lede--paper">
              Import and product requirements differ by destination. Tell us
              where the product will be sold and what you plan to manufacture;
              our team can review the relevant product and documentation scope.
            </p>
            <p className="lede lede--paper" style={{ marginTop: 16 }}>
              Availability, export documents and shipping arrangements are
              confirmed for each enquiry.
            </p>
            <Link href="/contact" className="btn btn--primary btn--sm" style={{ marginTop: 24 }}>
              Start an export enquiry <span className="arrow">→</span>
            </Link>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="frame">
              <Image
                src="/images/containers.jpg"
                alt="Cargo containers stacked at a commercial port"
                width={1600}
                height={1200}
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--moss">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow">A practical starting point</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                Four things to align before dispatch.
              </h2>
            </Reveal>
          </div>
          <div className="export-steps">
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 65}>
                <article className="export-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Planning a product for another market?"
        copy="Share your destination, product idea and preferred format. We’ll confirm what can be supported."
      />
    </main>
  );
}
