import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CTABand({
  title = "Have a product idea? Let's build it together.",
  copy = "Share your product brief and target market to discuss suitable formats and next steps.",
}: {
  title?: React.ReactNode;
  copy?: string;
}) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal variant="blur">
          <p className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
            Start your enquiry
          </p>
          <h2 id="cta-title" className="display h1" style={{ marginTop: 26 }}>
            {title}
          </h2>
          <p>{copy}</p>
          <div className="cta__row">
            <Link href="/contact" className="btn btn--primary">
              Talk to Our Experts <span className="arrow">→</span>
            </Link>
            <Link href="/technologies#categories" className="btn btn--ghost">
              Browse Products <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
