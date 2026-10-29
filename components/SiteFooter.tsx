import Link from "next/link";
import Image from "next/image";
import { DISCLAIMER, NAV_ITEMS, SITE } from "@/lib/site";
import LocationMap from "@/components/LocationMap";

export default function SiteFooter() {
  const primaryLinks = NAV_ITEMS.filter((item) => item.href !== "/" && item.href !== "/contact");

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div className="foot__brand">
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
            <p>
              Contract and private-label manufacturing of gummies, oral thin
              films, softgels and liposomal products in Pune, India.
            </p>
            <Link href="/contact" className="foot__cta">
              Discuss a product <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="foot__navigation">
            <nav className="foot__nav" aria-label="Explore the site">
              <h2>Explore</h2>
              <ul>
                <li><Link href="/">Home</Link></li>
                {primaryLinks.map((item) => (
                  <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
                ))}
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>

            <nav className="foot__nav" aria-label="More information">
              <h2>More</h2>
              <ul>
                <li><Link href="/about#why-zoelex">Why Zoelex</Link></li>
                <li><Link href="/technologies#categories">Product Categories</Link></li>
                <li><Link href="/manufacturing#facility">Infrastructure</Link></li>
                <li><Link href="/manufacturing#quality">Quality Process</Link></li>
                <li><Link href="/about#careers">Careers</Link></li>
                <li><Link href="/contact#faqs">FAQs</Link></li>
              </ul>
            </nav>
          </div>

          <div className="foot__contact">
            <h2>Get in touch</h2>
            <a className="foot__contact-primary" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <a className="foot__contact-primary" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
            <a
              className="foot__whatsapp"
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <address>
              <span>{SITE.address.full}</span>
              <span>{SITE.hours}</span>
              <a href={`https://${SITE.domain}`} target="_blank" rel="noreferrer">
                {SITE.domain}
              </a>
            </address>
          </div>

          <div className="foot__map">
            <h2>Find us</h2>
            <LocationMap className="foot__map-preview" />
          </div>
        </div>

        <div className="foot__disc">
          <p className="legal">
            <strong>Disclaimer:</strong> {DISCLAIMER}
          </p>
          <div className="foot__legal-row">
            <span>© 2026 {SITE.name}. All rights reserved.</span>
            <nav aria-label="Legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-use">Terms of Use</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
