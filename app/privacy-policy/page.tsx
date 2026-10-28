import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft) | Zoelex Pharma",
  description: "Draft privacy policy for Zoelex Pharma, pending legal review.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Privacy Policy"
        title="Privacy Policy"
      />
      <section className="section section--paper">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p className="note note--paper" style={{ marginBottom: 30 }}>
            DRAFT: this policy describes the website's current data practices
            and must be reviewed and approved by Zoelex Pharma before
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
              This website collects information only when you choose to send an
              enquiry: the details you enter in the contact form (name,
              company, email, phone, country, product interests, estimated
              quantity and message) and any information you provide by email,
              phone or WhatsApp.
            </p>
            <p>
              Enquiry details are used solely to respond to your request and to
              prepare quotations. They are not sold, rented or shared with
              third parties for marketing. Standard email and server logs may
              be processed for the operation and security of the site.
            </p>
            <p>
              At present the contact form hands off to your own email client;
              no form data is stored on this website. When a backend enquiry
              service is connected, this policy will be updated to describe
              that processing, retention and your rights.
            </p>
            <p>
              You can request access to, correction of, or deletion of your
              information at any time by writing to{" "}
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
