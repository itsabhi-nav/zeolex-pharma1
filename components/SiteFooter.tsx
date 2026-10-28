import Link from "next/link";
import Image from "next/image";
import { DISCLAIMER, NAV_ITEMS, SITE } from "@/lib/site";

export default function SiteFooter() {
  const quick = NAV_ITEMS.filter((i) => i.href !== "/" && i.href !== "/contact");
  return (
    <footer className="foot">
      <div className="wrap" style={{ position: "relative" }}>
        <div className="foot__grid">
          <div>
            <Link href="/" className="brand" style={{ paddingInline: 0 }}>
              <Image
                src="/images/zoelex-logo.jpg"
                alt="Zoelex Pharma"
                width={768}
                height={768}
                className="brand__logo"
              />
              <span className="brand__descriptor" aria-hidden="true">
                <strong>Zoelex Pharma</strong>
                <small>Nutraceutical manufacturing</small>
              </span>
            </Link>
            <p style={{ marginTop: 20, maxWidth: "40ch", fontSize: "var(--fs-base)" }}>
              Contract and private-label manufacturing of gummies, oral thin
              films, softgels and liposomal products in Pune, India.
            </p>
          </div>
          <nav aria-label="Quick links">
            <h2>Site</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {quick.map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>{i.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Deeper pages">
            <h2>Deep dives</h2>
            <ul>
              <li>
                <Link href="/about#why-zoelex">Why Zoelex</Link>
              </li>
              <li>
                <Link href="/technologies#categories">Product Categories</Link>
              </li>
              <li>
                <Link href="/manufacturing#quality">Quality Process</Link>
              </li>
              <li>
                <Link href="/about#careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact#faqs">FAQs</Link>
              </li>
            </ul>
          </nav>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </li>
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`https://${SITE.domain}`} target="_blank" rel="noreferrer">
                  {SITE.domain}
                </a>
              </li>
              <li style={{ fontSize: "var(--fs-xs)", lineHeight: 1.65 }}>
                {SITE.address.full}
              </li>
              <li style={{ fontSize: "var(--fs-xs)" }}>{SITE.hours}</li>
            </ul>
          </div>
        </div>
        <div className="foot__disc">
          <p className="legal">
            <strong style={{ color: "var(--tx)" }}>Disclaimer:</strong>{" "}
            {DISCLAIMER}
          </p>
          <p>
            © 2026 {SITE.name}. All rights reserved. ·{" "}
            <Link href="/privacy-policy">Privacy Policy</Link> ·{" "}
            <Link href="/terms-of-use">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
