import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import ProcessTimeline from "@/components/ProcessTimeline";
import Parallax from "@/components/Parallax";
import Marquee from "@/components/Marquee";
import { DIFFERENTIATORS, PROCESS_STEPS } from "@/lib/content";
import { PAGE_META, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: PAGE_META.about.title,
  description: PAGE_META.about.description,
  alternates: { canonical: "/about" },
};

const VALUES = [
  { name: "Quality First", copy: "No shortcuts, every batch, every time." },
  { name: "Innovation", copy: "We look for better ways to deliver wellness." },
  {
    name: "Integrity",
    copy: "Transparent pricing, honest timelines, clear communication.",
  },
  { name: "Partnership", copy: "Your brand's success is our success." },
  {
    name: "Sustainability",
    copy: "Plant-based choices and responsible manufacturing.",
  },
];

const MISSION = [
  "Develop supplement formats that improve compliance and consumer experience.",
  "Uphold the highest standards of quality, safety and regulatory compliance.",
  "Help brands of every size launch and scale with speed and confidence.",
  "Invest continuously in research, technology and people.",
];

const AREAS = [
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
            Where <em>Science</em> Meets Everyday Wellness
          </>
        }
      />

      {/* Narrative */}
      <section className="section section--deep" style={{ paddingTop: "clamp(48px,7vw,90px)" }}>
        <div className="wrap">
          <div className="split">
            <Reveal variant="left">
              <p className="eyebrow">Who we are</p>
              <p
                className="lede"
                style={{
                  marginTop: 26,
                  fontSize: "var(--fs-xl)",
                  color: "var(--tx)",
                  maxWidth: "50ch",
                }}
              >
                Zoelex Pharma is a Pune-based manufacturer of novel drug
                delivery and nutraceutical products. We specialise in formats
                that make daily supplementation simpler and more enjoyable:
                vegan gummies, oral thin films, softgels and liposomal
                formulations.
              </p>
              <p className="lede" style={{ marginTop: 22 }}>
                We set out from a simple observation: many people skip their
                supplements because pills are hard to swallow or easy to
                forget. We work to change that with formats that taste good,
                work fast and fit into modern lives.
              </p>
              <p className="lede" style={{ marginTop: 22 }}>
                Today we partner with nutraceutical brands, Ayurvedic
                companies, pharma marketers and distributors in India and
                abroad, combining modern manufacturing science with the wisdom
                of Ayurveda to create products that are effective, safe and
                consistent batch after batch.
              </p>
            </Reveal>
            <Reveal variant="right" delay={140}>
              <div style={{ display: "grid", gap: 18 }}>
                <div className="frame" style={{ transform: "rotate(1.2deg)" }}>
                  <Parallax strength={24}>
                    <Image
                      src="/images/turmeric.jpg"
                      alt="Fresh turmeric roots, a traditional Ayurvedic herb carried into modern formats"
                      width={1600}
                      height={1200}
                    />
                  </Parallax>
                </div>
                <div className="glass" style={{ padding: "20px 24px", display: "grid", gap: 12 }}>
                  <span className="placeholder-pill">Founded in (year to be confirmed)</span>
                  <p className="mono-label" style={{ letterSpacing: "0.08em" }}>
                    Placeholder: the deck leaves the founding year incomplete
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee reverse />

      {/* Vision + Mission */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="split">
            <Reveal variant="left">
              <p className="eyebrow eyebrow--paper">Our vision</p>
              <blockquote
                className="display h2"
                style={{
                  margin: "28px 0 0",
                  borderLeft: "3px solid var(--coral-deep)",
                  paddingLeft: "clamp(22px,3vw,44px)",
                  textWrap: "balance",
                }}
              >
                To be a <em style={{ color: "var(--coral-deep)" }}>globally trusted</em>{" "}
                partner for innovative nutraceutical and Ayurvedic delivery
                formats.
              </blockquote>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <p className="eyebrow eyebrow--paper">Our mission</p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: 28 }}>
                {MISSION.map((m, i) => (
                  <li
                    key={m}
                    style={{
                      display: "flex",
                      gap: 16,
                      alignItems: "baseline",
                      padding: "17px 0",
                      borderBottom: "1px solid var(--bone-line)",
                      color: "var(--tx-paper-muted)",
                    }}
                  >
                    <span
                      className="mono-label"
                      style={{ color: "var(--coral-deep)", flex: "none" }}
                    >
                      {`M${i + 1}`}
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Values */}
          <div style={{ marginTop: "clamp(70px,9vw,120px)" }}>
            <div className="section-head" style={{ position: "relative" }}>
              <Reveal variant="up">
                <p className="eyebrow eyebrow--paper">Our values</p>
                <h2 className="display h2" style={{ marginTop: 22 }}>
                  What we hold <em style={{ color: "var(--coral-deep)" }}>the line</em> on.
                </h2>
              </Reveal>
            </div>
            <div className="values values--paper">
              {VALUES.map((v, i) => (
                <Reveal className="value" key={v.name} delay={(i % 4) * 70} variant="up">
                  <span className="vn" style={{ color: "var(--coral-deep)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{v.name}</h3>
                  <p>{v.copy}</p>
                </Reveal>
              ))}
              <Reveal className="value" delay={140} variant="up">
                <Link href="/contact" className="btn btn--primary btn--sm">
                  Work with us <span className="arrow">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY ZOELEX (merged) ============ */}
      <section className="section section--moss" id="why-zoelex">
        <div className="wrap">
          <div className="section-head" style={{ position: "relative" }}>
            <Reveal variant="up">
              <p className="eyebrow">Why choose us</p>
              <h2 className="display h2" style={{ marginTop: 22 }}>
                The partner behind <em>great</em> wellness brands.
              </h2>
            </Reveal>
          </div>
          <div className="rows" style={{ borderTop: 0 }}>
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.name} delay={i * 55} variant="up">
                <div className="row-item" style={{ cursor: "default" }}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{d.name}</h3>
                  <p>{d.copy}</p>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      border: "1px solid var(--hair-2)",
                      justifySelf: "end",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: i % 2 ? "var(--mint-2)" : "var(--coral)" }} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="note" style={{ marginTop: 20 }}>
            Vegan and clean-label claims apply to our plant-based gummy range
            with natural colours and flavours, not necessarily to every
            formulation. Gelatin options are available on request.
          </p>

          {/* How we work */}
          <div style={{ marginTop: "clamp(70px,9vw,120px)" }} id="how-we-work">
            <Reveal variant="up">
              <p className="eyebrow">How we work</p>
              <h2 className="display h3" style={{ marginTop: 20, marginBottom: 44 }}>
                Six stages from idea to doorstep.
              </h2>
            </Reveal>
            <Reveal variant="up">
              <ProcessTimeline />
            </Reveal>
            <div style={{ marginTop: 46, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {PROCESS_STEPS.map((s) => (
                <span key={s.name} className="chip">
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CAREERS (merged) ============ */}
      <section className="section section--paper" id="careers">
        <div className="wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <Reveal variant="left">
              <p className="eyebrow eyebrow--paper">Careers</p>
              <h2 className="display h2" style={{ margin: "22px 0 20px" }}>
                Grow <em style={{ color: "var(--coral-deep)" }}>with us</em>.
              </h2>
              <p className="lede lede--paper" style={{ marginBottom: 30 }}>
                At Zoelex Pharma, you'll work on products that reach people
                around the world. We value curiosity, ownership and a
                commitment to quality.
              </p>
              <p className="mono-label mono-label--paper" style={{ marginBottom: 14 }}>
                Areas we hire for
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: 480 }}>
                {AREAS.map((a) => (
                  <span key={a} className="chip chip--paper">
                    {a}
                  </span>
                ))}
              </div>
              <div className="frame" style={{ marginTop: 36, transform: "rotate(-1deg)" }}>
                <Parallax strength={20}>
                  <Image
                    src="/images/lab-scientists.jpg"
                    alt="Scientists collaborating at a laboratory bench"
                    width={1600}
                    height={1200}
                  />
                </Parallax>
              </div>
            </Reveal>
            <Reveal variant="right" delay={130}>
              <p className="eyebrow eyebrow--paper">Current openings</p>
              <div
                style={{
                  marginTop: 24,
                  border: "1px solid var(--bone-line)",
                  borderRadius: "var(--r-lg)",
                  padding: "clamp(28px,4vw,48px)",
                  background: "var(--bone-panel)",
                }}
              >
                <p className="display h3" style={{ marginBottom: 16, maxWidth: "24ch" }}>
                  No openings right now, we're always happy to hear from talented people.
                </p>
                <span className="placeholder-pill">Current openings, client adds roles here</span>
                <p className="note note--paper" style={{ marginTop: 14 }}>
                  This area is ready for live role listings as soon as positions
                  open.
                </p>
                <hr className="rule rule--paper" style={{ margin: "28px 0" }} />
                <p className="eyebrow eyebrow--paper">How to apply</p>
                <p style={{ marginTop: 14, color: "var(--tx-paper-muted)", maxWidth: "40ch" }}>
                  Send your CV with the role in the subject line:
                </p>
                <a
                  href={`mailto:${SITE.careersEmail}?subject=${encodeURIComponent("Application, [Role]")}`}
                  className="btn btn--primary btn--sm"
                  style={{ marginTop: 18 }}
                >
                  {SITE.careersEmail} <span className="arrow">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Building a range? Meet your manufacturer."
        copy="From first sample to full production, we work as an extension of your brand team."
      />
    </main>
  );
}
