import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Parallax from "@/components/Parallax";
import { PAGE_META, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: PAGE_META.global.title,
  description: PAGE_META.global.description,
  alternates: { canonical: "/global" },
};

const AUDIENCES = [
  "Nutraceutical & supplement brands",
  "D2C & e-commerce wellness startups",
  "Ayurvedic & herbal companies",
  "Pharma marketing & PCD companies",
  "Distributors & importers",
  "Sports nutrition & fitness brands",
  "Pharmacies & retail chains (private label)",
  "Doctors & clinics launching their own range",
];

const FLOW = [
  { n: "01", t: "Manufacture", c: "Produced on dedicated format lines in our Pune facility." },
  { n: "02", t: "Test", c: "Potency, purity and microbial checks on every batch." },
  { n: "03", t: "Document", c: "COA, MSDS and export paperwork prepared per market." },
  { n: "04", t: "Dispatch", c: "Shipped to brand owners and distributors worldwide." },
];

export default function GlobalPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Global"
        title={
          <>
            Made in India. <em>Trusted</em> Worldwide.
          </>
        }
        lede="From our base in Pune, we manufacture for brands in India and international markets."
      />

      {/* Narrative */}
      <section className="section section--deep" style={{ paddingTop: "clamp(50px,7vw,90px)" }}>
        <div className="wrap">
          <div className="split">
            <Reveal variant="left">
              <p className="eyebrow">The export posture</p>
              <h2 className="display h2" style={{ margin: "24px 0 24px" }}>
                One facility. International paperwork.{" "}
                <em>No friction</em> at the border of your market.
              </h2>
              <p className="lede" style={{ marginBottom: 20 }}>
                Exporting nutraceuticals is as much paperwork as production. We
                prepare export documentation alongside manufacturing, so your
                consignment arrives with what your market requires.
              </p>
              <p className="lede">
                Specific regions served will be published once confirmed by the
                company.
              </p>
              <div style={{ marginTop: 24 }}>
                <span className="placeholder-pill">
                  Regions served, e.g. Middle East, Southeast Asia, Africa, Europe, North America: to confirm
                </span>
              </div>
            </Reveal>
            <Reveal variant="right" delay={140}>
              <div className="frame">
                <Parallax strength={26}>
                  <Image
                    src="/images/softgels-marble.jpg"
                    alt="Stacked shipping containers at a port, international logistics"
                    width={1600}
                    height={1200}
                  />
                </Parallax>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="section-head" style={{ position: "relative" }}>
            <Reveal variant="up">
              <p className="eyebrow eyebrow--paper">We work with</p>
              <h2 className="display h2" style={{ marginTop: 22 }}>
                Whoever is building a <em style={{ color: "var(--coral-deep)" }}>wellness brand</em>.
              </h2>
            </Reveal>
          </div>
          <div className="values values--paper">
            {AUDIENCES.map((a, i) => (
              <Reveal className="value" key={a} delay={(i % 4) * 70} variant="up">
                <span className="vn" style={{ color: "var(--coral-deep)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontSize: "var(--fs-lg)" }}>{a}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section section--moss">
        <div className="wrap">
          <div className="section-head" style={{ position: "relative" }}>
            <Reveal variant="up">
              <p className="eyebrow">From line to landing</p>
              <h2 className="display h2" style={{ marginTop: 22 }}>
                How a batch <em>leaves</em> Pune.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up">
            <div className="qflow" style={{ gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}>
              {FLOW.map((f) => (
                <div key={f.n}>
                  <span className="qn">{f.n}</span>
                  <h3>{f.t}</h3>
                  <p>{f.c}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div style={{ marginTop: 46, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact?service=Contract%20Manufacturing" className="btn btn--primary btn--sm">
              Start an export enquiry <span className="arrow">→</span>
            </Link>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
              Message us on WhatsApp <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reserved strip */}
      <section className="section section--void" style={{ paddingBlock: "clamp(36px,5vw,56px)", borderTop: "1px solid var(--hair)" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span className="placeholder-pill">Client logos &amp; testimonials, reserved until verified</span>
          <p className="note" style={{ margin: 0 }}>
            Genuine client endorsements will appear here once supplied and
            approved.
          </p>
        </div>
      </section>

      <CTABand
        title="Wherever your market, we ship to it."
        copy="Tell us your market and we will confirm what documentation your consignment needs."
      />

      <style>{`@media (max-width: 980px) { .qflow { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 560px) { .qflow { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  );
}
