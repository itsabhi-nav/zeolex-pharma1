import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use (Draft) | Zoelex Pharma",
  description: "Draft terms of use for zoelexpharma.com, pending legal review.",
  alternates: { canonical: "/terms-of-use" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Terms of Use"
        title="Terms of Use"
      />
      <section className="section section--paper">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p className="note note--paper" style={{ marginBottom: 30 }}>
            DRAFT: must be reviewed and approved by Zoelex Pharma before
            publication.
          </p>
          <div
            style={{
              display: "grid",
              gap: 20,
              color: "var(--tx-paper-muted)",
              fontSize: "var(--fs-sm)",
              lineHeight: 1.7,
            }}
          >
            <p>
              The content of this website is for general information about
              Zoelex Pharma's manufacturing capabilities. It does not
              constitute an offer, a specification, or contractual terms;
              commercial terms are established in individual agreements.
            </p>
            <p>
              Product examples describe potential formulations, subject to
              formulation feasibility and applicable regulations. Products
              manufactured by Zoelex Pharma are dietary / nutraceutical
              supplements and are not intended to diagnose, treat, cure or
              prevent any disease.
            </p>
            <p>
              All content, branding and design of this site belong to Zoelex
              Pharma. Photography used on this site is sourced from open-
              licence providers and credited in the project's asset list; it is
              illustrative and does not depict the Zoelex facility or products.
            </p>
            <p>
              For questions about these terms, contact{" "}
              <a href="mailto:info@zoelexpharma.com" style={{ color: "var(--tx-paper)" }}>
                info@zoelexpharma.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
