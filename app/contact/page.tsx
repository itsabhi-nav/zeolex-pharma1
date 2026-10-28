import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import EnquiryForm from "@/components/EnquiryForm";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQS } from "@/lib/content";
import { PAGE_META, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: PAGE_META.contact.title,
  description: PAGE_META.contact.description,
  alternates: { canonical: "/contact" },
};

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
    mainEntity: FAQS.map((f) => ({
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
            Let's Build Your <em>Next</em> Product
          </>
        }
        lede="Tell us about your idea and our team will respond within 24/48 hours."
      />

      <section className="section section--deep" style={{ paddingTop: "clamp(50px,7vw,90px)" }}>
        <div className="wrap contact-grid">
          <Reveal variant="left">
            <p className="eyebrow">Direct lines</p>
            <ul className="info-list" style={{ marginTop: 26 }}>
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
                <span className="k">Business hours</span>
                <p>{SITE.hours}</p>
              </li>
            </ul>
          </Reveal>
          <Reveal variant="right" delay={140}>
            <p className="eyebrow">Enquiry form</p>
            <h2 className="display h3" style={{ margin: "20px 0 28px" }}>
              Start your enquiry.
            </h2>
            <EnquiryForm
              defaultFormat={format}
              defaultService={service}
              categoryNote={category}
            />
          </Reveal>
        </div>
      </section>

      {/* ============ FAQS (merged) ============ */}
      <section className="section section--paper" id="faqs">
        <div className="wrap" style={{ maxWidth: 960 }}>
          <div className="section-head" style={{ position: "relative" }}>
            <Reveal variant="up">
              <p className="eyebrow eyebrow--paper">Frequently Asked Questions</p>
              <h2 className="display h2" style={{ marginTop: 22 }}>
                Straight answers, before you <em style={{ color: "var(--coral-deep)" }}>even ask</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up">
            <FAQAccordion items={FAQS} />
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
