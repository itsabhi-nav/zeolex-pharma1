import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import ProcessTimeline from "@/components/ProcessTimeline";
import Parallax from "@/components/Parallax";
import { SERVICES, QUALITY_STEPS } from "@/lib/content";
import { PAGE_META } from "@/lib/site";

/** Minimal line icons, one per service, drawn on a 24 grid. */
const SVC_ICONS = [
  /* Contract Manufacturing — factory */
  <g key="factory">
    <path d="M4 21V11l4 2.8V11l4 2.8V11l4 2.8V6.5h4V21" />
    <path d="M2.5 21h19" />
  </g>,
  /* Private Label — tag */
  <g key="tag">
    <path d="M20.6 13.4 12 22l-9-9V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" />
    <circle cx="7.5" cy="7.5" r="1.4" />
  </g>,
  /* Formulation & R&D — flask */
  <g key="flask">
    <path d="M9.5 3h5M10 3v5.2L4.8 17.5a2.6 2.6 0 0 0 2.3 4h9.8a2.6 2.6 0 0 0 2.3-4L14 8.2V3" />
    <path d="M7.2 15h9.6" />
  </g>,
  /* Packaging — box */
  <g key="box">
    <path d="M21 8.2 12 3 3 8.2v7.6L12 21l9-5.2V8.2z" />
    <path d="M3.4 8.4 12 13.4l8.6-5M12 13.4V21" />
  </g>,
  /* Regulatory & Documentation — document */
  <g key="doc">
    <path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8L14 2.5z" />
    <path d="M13.5 2.5V8H19M8.5 13h7M8.5 16.5h7" />
  </g>,
  /* Export Support — globe */
  <g key="globe">
    <circle cx="12" cy="12" r="8.8" />
    <path d="M3.2 12h17.6" />
    <path d="M12 3.2c2.6 2.5 4 5.6 4 8.8s-1.4 6.3-4 8.8c-2.6-2.5-4-5.6-4-8.8s1.4-6.3 4-8.8z" />
  </g>,
];

export const metadata: Metadata = {
  title: PAGE_META.manufacturing.title,
  description: PAGE_META.manufacturing.description,
  alternates: { canonical: "/manufacturing" },
};

const CERTS = [
  { abbr: "GMP", full: "Good Manufacturing Practices" },
  { abbr: "FSSAI", full: "Food Safety & Standards Authority of India" },
  { abbr: "GLP", full: "Good Laboratory Practices" },
];

export default function ManufacturingPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Manufacturing"
        title={
          <>
            End-to-End Manufacturing, <em>Built Around</em> Your Brand
          </>
        }
        lede="Wherever your product is on its journey, a sketch, a formulation, a full range, these six capabilities carry it to the shelf."
      />

      {/* ============ SERVICES ============ */}
      <section className="section section--deep" id="services" style={{ paddingTop: "clamp(50px,7vw,90px)" }}>
        <div className="wrap">
          <div className="section-head" style={{ position: "relative" }}>
            <Reveal variant="up">
              <p className="eyebrow">What we do for brands</p>
              <h2 className="display h3" style={{ marginTop: 20 }}>
                Six capabilities, one roof.
              </h2>
            </Reveal>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.num} delay={(i % 3) * 90} variant="up">
                <article className="svc-card" id={s.num}>
                  <div className="svc-card__top">
                    <span className="svc-card__num" aria-hidden="true">
                      {s.num}
                    </span>
                    <span className="svc-card__icon" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {SVC_ICONS[i]}
                      </svg>
                    </span>
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.copy}</p>
                  <p className="svc-card__value">{s.value}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 46 }}>
            <Link href="/contact" className="btn btn--primary btn--sm">
              Discuss Your Product <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FACILITY ============ */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="split">
            <Reveal variant="left">
              <div style={{ display: "grid", gap: 18 }}>
                <div className="frame">
                  <Parallax strength={24}>
                    <Image
                      src="/images/droplets.jpg"
                      alt="Botanical ingredient shown close up, with water droplets on a green leaf"
                      width={1600}
                      height={1200}
                    />
                  </Parallax>
                </div>
                <div className="frame" style={{ transform: "rotate(0.9deg)" }}>
                  <Parallax strength={18}>
                    <Image
                      src="/images/lab-equipment.jpg"
                      alt="Laboratory glassware and analysis equipment on a bench"
                      width={1600}
                      height={1200}
                    />
                  </Parallax>
                </div>
              </div>
            </Reveal>
            <Reveal variant="right" delay={130}>
              <p className="eyebrow eyebrow--paper">Infrastructure &amp; quality</p>
              <h2 className="display h2" style={{ margin: "22px 0 24px" }}>
                Built for <em style={{ color: "var(--coral-deep)" }}>precision</em>. Certified for trust.
              </h2>
              <p className="lede lede--paper" style={{ marginBottom: 26 }}>
                Our Pune facility is designed for the specialised needs of
                novel delivery formats. Every stage, from raw material receipt
                to final dispatch, follows documented procedures and strict
                quality checks.
              </p>
              <ul className="checks checks--paper">
                {[
                  "Dedicated lines for gummies, oral thin films, softgels and liposomal products",
                  "Controlled temperature and humidity zones",
                  "In-house quality control laboratory",
                ].map((f) => (
                  <li key={f} style={{ color: "var(--tx-paper-muted)" }}>
                    {f}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: 28,
                  border: "1px solid var(--bone-line)",
                  borderRadius: "var(--r)",
                  padding: "22px 26px",
                  background: "var(--bone-panel)",
                  display: "grid",
                  gap: 12,
                }}
              >
                <span className="mono-label mono-label--paper">Facility figures</span>
                <span className="placeholder-pill">Installed capacity: X units/day per format, pending verified figures</span>
                <span className="placeholder-pill">Facility area: X sq. ft., pending verified figures</span>
                <p className="note note--paper" style={{ margin: 0 }}>
                  Real values will be published only once supplied by Zoelex
                  Pharma.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Certifications */}
          <div style={{ marginTop: "clamp(70px,9vw,120px)" }}>
            <div className="section-head" style={{ position: "relative" }}>
              <Reveal variant="up">
                <p className="eyebrow eyebrow--paper">Certifications</p>
                <h2 className="display h2" style={{ marginTop: 22 }}>
                  Certified operations, <em style={{ color: "var(--coral-deep)" }}>documented</em> everything.
                </h2>
              </Reveal>
            </div>
            <div className="stats" style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>
              {CERTS.map((c, i) => (
                <Reveal key={c.abbr} delay={i * 90}>
                  <span
                    className="display"
                    style={{ fontSize: "var(--fs-stat)", color: "var(--tx-paper)", display: "block", marginBottom: 12 }}
                  >
                    {c.abbr}
                  </span>
                  <span className="mono-label mono-label--paper" style={{ display: "block" }}>
                    {c.full}
                  </span>
                  <p style={{ color: "var(--tx-paper-muted)", fontSize: "var(--fs-sm)", marginTop: 12 }}>
                    Certified operations audited against {c.abbr} requirements.
                    {/* CONFIGURATION POINT: certificate number, issuing body,
                        validity dates and certificate image are supplied by the
                        client and must be verified before publication. */}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal variant="up">
              <p className="note note--paper" style={{ marginTop: 20 }}>
                Additional licences (ISO, HACCP, Halal, Kosher, AYUSH) are
                intentionally not displayed, they will be added only if
                actually held and verified.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ QUALITY PROCESS ============ */}
      <section className="section section--moss" id="quality">
        <div className="wrap">
          <div className="section-head section-head--split">
            <div style={{ position: "relative" }}>
              <Reveal variant="up">
                <p className="eyebrow">The quality process</p>
                <h2 className="display h2" style={{ marginTop: 22 }}>
                  Five checks between <em>raw material</em> and your customer.
                </h2>
              </Reveal>
            </div>
            <Reveal variant="up" delay={110}>
              <p className="lede">
                Quality is a sequence, not a stamp. Each stage hands verified
                material to the next, and every batch leaves with its own
                certificate of analysis.
              </p>
            </Reveal>
          </div>
          <Reveal variant="up">
            <div className="qflow">
              {QUALITY_STEPS.map((s) => (
                <div key={s.num}>
                  <span className="qn">{s.num}</span>
                  <h3>{s.name}</h3>
                  <p>{s.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div style={{ marginTop: 42, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact#faqs" className="btn btn--ghost btn--sm">
              Quality questions? Read the FAQs <span className="arrow">→</span>
            </Link>
            <Link href="/contact" className="btn btn--primary btn--sm">
              Request documentation <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Need COAs, MSDS or stability data with your enquiry?"
        copy="Our regulatory team prepares the documentation pack for your product and market."
      />
    </main>
  );
}
