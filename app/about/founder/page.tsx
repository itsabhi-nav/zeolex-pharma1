import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Vidhatri Singh | Founder & CEO | Zoelex Pharma",
  description:
    "Meet Vidhatri Singh, Founder and CEO of Zoelex Pharma, with a focus on pharmaceutical formulation, regulatory pathways and scale-up.",
  alternates: { canonical: "/about/founder" },
};

const PROFILE_AREAS = [
  {
    number: "01",
    label: "Focus",
    value: "Formulation, regulatory pathways and scale-up",
  },
  {
    number: "02",
    label: "Experience",
    value: "Zoelex Pharmaceuticals",
  },
  {
    number: "03",
    label: "Education",
    value: "DY Patil",
  },
];

export default function FounderPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Founder"
        title={
          <>
            Meet <em>Vidhatri Singh.</em>
          </>
        }
        lede="Founder and CEO of Zoelex Pharma, with a professional focus on pharmaceutical formulation, regulatory pathways and scale-up."
      >
        <Link href="/about#purpose" className="founder-profile__back">
          <span aria-hidden="true">←</span> About Zoelex Pharma
        </Link>
      </PageHero>

      <section className="section section--paper founder-profile">
        <div className="wrap">
          <div className="founder-profile__layout">
            <Reveal variant="left">
              <div
                className="founder-profile__portrait"
                aria-hidden="true"
              >
                <span>VS</span>
                <small>Zoelex Pharma</small>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="founder-profile__content">
                <p className="eyebrow eyebrow--paper">Founder &amp; CEO</p>
                <h2 className="display h2">Vidhatri Singh</h2>
                <p className="founder-profile__intro">
                  A pharmaceutical entrepreneur whose work is described around
                  formulation, regulatory pathways and scale-up. At Zoelex
                  Pharma, that focus aligns with the work of developing
                  nutraceutical products and supporting brands through
                  manufacturing.
                </p>
                <div className="founder-profile__facts">
                  {PROFILE_AREAS.map((item) => (
                    <article className="founder-profile__fact" key={item.number}>
                      <span>{item.number}</span>
                      <div>
                        <p>{item.label}</p>
                        <h3>{item.value}</h3>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Build your next product with Zoelex."
        copy="Share your product brief with the team to discuss formulation, requirements and production."
      />
    </main>
  );
}
