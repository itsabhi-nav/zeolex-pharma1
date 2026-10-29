import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import EnquiryForm from "@/components/EnquiryForm";
import FAQAccordion from "@/components/FAQAccordion";
import LocationMap from "@/components/LocationMap";
import { FAQS } from "@/lib/content";
import { PAGE_META, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: PAGE_META.contact.title,
  description: PAGE_META.contact.description,
  alternates: { canonical: "/contact" },
};

const CONTACT_FAQS = FAQS.filter((faq) =>
  [
    "What is your minimum order quantity (MOQ)?",
    "Do you offer private label manufacturing?",
    "Can you develop a custom formulation?",
    "Are your gummies vegan?",
    "What is an oral thin film?",
    "How long from sample to production?",
    "Do you export?",
    "Which certifications do you hold?",
    "What is the shelf life of your products?",
  ].includes(faq.q)
);

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; format?: string; service?: string }>;
}) {
  const sp = await searchParams;
  const category = sp.category ? decodeURIComponent(sp.category) : undefined;
  const format = ["Gummies", "Oral Thin Films", "Softgels", "Liposomal", "Not sure"].includes(
    sp.format ?? ""
  )
    ? sp.format
    : undefined;
  const service = ["Private Label", "Contract Manufacturing", "Custom Formulation"].includes(
    sp.service ?? ""
  )
    ? sp.service
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CONTACT_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main id="main">
      <PageHero
        crumb="Contact"
        title={
          <>
            Discuss your <em>next product.</em>
          </>
        }
        lede="Ask about contract manufacturing, private label or a custom formulation. Share a few details and our team will respond within 24–48 hours with formulation options and a quote."
      />

      <section className="section section--deep" style={{ paddingTop: "clamp(50px,7vw,90px)" }}>
        <div className="wrap contact-grid">
          <Reveal variant="left" className="contact-info-panel">
            <p className="eyebrow eyebrow--paper">Contact Zoelex Pharma</p>
            <ul className="info-list" style={{ marginTop: 26 }}>
              <li>
                <span className="k">Phone / WhatsApp</span>
                <p>
                  <a href={SITE.phoneHref}>{SITE.phone}</a>
                  {" · "}
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                </p>
              </li>
              <li>
                <span className="k">Email</span>
                <p>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              </li>
              <li>
                <span className="k">Website</span>
                <p>
                  <a href={`https://${SITE.domain}`} target="_blank" rel="noreferrer">
                    {SITE.domain}
                  </a>
                </p>
              </li>
              <li>
                <span className="k">Address</span>
                <p>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                  <br />
                  {SITE.address.line3}
                </p>
              </li>
              <li>
                <span className="k">Business hours</span>
                <p>{SITE.hours}</p>
              </li>
            </ul>
            <div className="contact-brief">
              <span className="contact-brief__label">To help us prepare</span>
              <p>
                Include your preferred format, ingredients, target market and
                estimated quantity.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100} className="contact-form-panel">
            <p className="eyebrow eyebrow--paper">Product enquiry</p>
            <h2 className="display h3" style={{ margin: "16px 0 24px" }}>
              Tell us what you’re planning.
            </h2>
            <EnquiryForm
              defaultFormat={format}
              defaultService={service}
              categoryNote={category}
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--paper contact-location">
        <div className="wrap">
          <div className="contact-location__card">
            <div className="contact-location__details">
              <p className="eyebrow eyebrow--paper">Visit us</p>
              <h2 className="display h2" style={{ marginTop: 14 }}>
                Find Zoelex Pharma.
              </h2>
              <address>
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
                <br />
                {SITE.address.line3}
              </address>
              <p className="contact-location__hours">{SITE.hours}</p>
            </div>
            <LocationMap
              className="contact-location__map"
              label="Open Zoelex Pharma's Pune location in Google Maps"
            />
          </div>
        </div>
      </section>

      {/* ============ FAQS (merged) ============ */}
      <section className="section section--paper" id="faqs">
        <div className="wrap" style={{ maxWidth: 960 }}>
          <div className="section-head" style={{ position: "relative" }}>
            <Reveal variant="up">
              <p className="eyebrow eyebrow--paper">Common questions</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                Before you get in touch.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up">
            <FAQAccordion items={CONTACT_FAQS} />
          </Reveal>
          <Reveal variant="up" delay={110}>
            <div
              style={{
                marginTop: 52,
                border: "1px solid var(--bone-line)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(26px,3.6vw,44px)",
                background: "var(--bone-panel)",
                display: "flex",
                gap: 22,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ maxWidth: "48ch" }}>
                <p className="eyebrow eyebrow--paper">Still deciding?</p>
                <p style={{ marginTop: 12, color: "var(--tx-paper-muted)" }}>
                  Questions about a specific ingredient, format or market? Our
                  team answers every product enquiry directly.
                </p>
              </div>
              <Link href="/contact" className="btn btn--primary btn--sm">
                Ask Us Directly <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
