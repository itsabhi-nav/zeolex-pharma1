import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { SERVICES } from "@/lib/content";
import { TECHNOLOGIES, type Format } from "@/lib/technologies";
import { PAGE_META } from "@/lib/site";

export const metadata = {
  title: PAGE_META.home.title,
  description: PAGE_META.home.description,
  alternates: { canonical: "/" },
};

const FORMAT_DETAILS: Record<Format, string> = {
  gummies: "Pectin-based, gelatin-free",
  otf: "Thin strips, no water needed",
  softgels: "For oils and fat-soluble actives",
  liposomal: "Phospholipid-based formulations",
};

const FORMAT_IMAGES: Record<Format, { src: string; alt: string }> = {
  gummies: {
    src: "/images/gummies-spill.jpg",
    alt: "Red gummy supplements spilling from a clear container",
  },
  otf: {
    src: "/images/effervescent.jpg",
    alt: "A person holding a dissolvable supplement",
  },
  softgels: {
    src: "/images/softgels-2.jpg",
    alt: "Amber softgel capsules in natural light",
  },
  liposomal: {
    src: "/images/droplets.jpg",
    alt: "Water droplets on a green leaf",
  },
};

const FLOW = [
  { title: "Enquiry", copy: "Share your product idea, target market and estimated volumes." },
  { title: "Consultation", copy: "Review suitable formats, formulation and packaging options." },
  { title: "Sampling", copy: "Review a product sample against the agreed brief." },
  { title: "Quote & agreement", copy: "Confirm project scope, pricing and planned timelines." },
  { title: "Production", copy: "Manufacture to the agreed specifications with quality checks." },
  { title: "Delivery", copy: "Plan dispatch with the relevant product and batch documentation." },
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <Image
            src="/images/unsplash-manufacturing.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__scrim" />
        </div>
        <div className="wrap hero__inner">
          <p className="eyebrow hero__eyebrow">
            Nutraceutical manufacturing <span aria-hidden="true">·</span> Pune, India
          </p>
          <h1 className="display h1">
            A manufacturing partner for your <em>next product.</em>
          </h1>
          <p className="lede hero__lede">
            Zoelex Pharma makes nutraceutical products for brands, supporting
            formulation, sampling and finished packs.
          </p>
          <div className="hero__ctas">
            <Link href="/contact" className="btn btn--primary">
              Discuss your product <span className="arrow">→</span>
            </Link>
            <Link href="/technologies" className="btn btn--ghost">
              Explore formats <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="format-marquee" aria-label="Formats we manufacture">
        <div className="format-marquee__track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="format-marquee__group" key={copy}>
              <span>Vegan Gummies</span>
              <i />
              <span>Oral Thin Films</span>
              <i />
              <span>Softgels</span>
              <i />
              <span>Liposomal Formulations</span>
              <i />
            </div>
          ))}
        </div>
      </div>

      <section className="trust-band" aria-label="Manufacturing overview">
        <div className="wrap trust-band__grid">
          <div className="trust-band__intro">
            <span className="trust-band__eyebrow">At a glance</span>
            <strong>Manufacturing for wellness brands</strong>
          </div>
          <div className="trust-band__item">
            <span>01</span>
            <strong>GMP</strong>
            <small>Certified operations</small>
          </div>
          <div className="trust-band__item">
            <span>02</span>
            <strong>FSSAI</strong>
            <small>Certified operations</small>
          </div>
          <div className="trust-band__item">
            <span>03</span>
            <strong>GLP</strong>
            <small>Certified operations</small>
          </div>
          <div className="trust-band__item trust-band__item--location">
            <span aria-hidden="true">⌖</span>
            <strong>Pune, India</strong>
            <small>Manufacturing base</small>
          </div>
        </div>
      </section>

      <section className="section section--paper" id="formats">
        <div className="wrap">
          <div className="section-head section-head--split">
            <Reveal>
              <p className="eyebrow eyebrow--paper">Product formats</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                Four formats. One manufacturing partner.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="lede lede--paper">
                Choose a format around your ingredients, audience and product brief.
                Our team can help you assess the fit.
              </p>
            </Reveal>
          </div>
          <div className="format-grid">
            {TECHNOLOGIES.map((format, index) => (
              <Reveal key={format.id} delay={index * 70}>
                <Link href={`/technologies#${format.id}`} className="format-card">
                  <span className="format-card__image">
                    <Image
                      src={FORMAT_IMAGES[format.id].src}
                      alt={FORMAT_IMAGES[format.id].alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
                    />
                    <span className="format-card__index">{format.index}</span>
                  </span>
                  <span className="format-card__body">
                    <span className="format-card__title">
                      <strong>{format.name}</strong>
                      <span aria-hidden="true">→</span>
                    </span>
                    <span className="format-card__copy">{format.summary}</span>
                    <span className="format-card__detail">{FORMAT_DETAILS[format.id]}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--moss home-services">
        <div className="wrap">
          <div className="section-head section-head--split">
            <Reveal>
              <p className="eyebrow">Support for your brand</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                From the first brief to a finished pack.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="lede">
                Work with one team across product development and manufacturing.
                Scope and timelines are confirmed for each brief.
              </p>
            </Reveal>
          </div>
          <div className="home-service-grid">
            {SERVICES.map((service, index) => (
              <Reveal key={service.num} delay={(index % 3) * 70}>
                <Link href="/manufacturing#services" className="home-service home-service--light">
                  <span className="format-card__number">{service.num}</span>
                  <h3>{service.name}</h3>
                  <p>{service.value}</p>
                  <span className="home-service__link">Explore service</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="wrap split">
          <Reveal variant="left">
            <div className="frame">
              <Image
                src="/images/lab-scientists.jpg"
                alt="Laboratory team working together at a bench"
                width={1600}
                height={1200}
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <p className="eyebrow eyebrow--paper">Quality and process</p>
            <h2 className="display h2" style={{ margin: "18px 0" }}>
              Quality is built into the process.
            </h2>
            <p className="lede lede--paper">
              Zoelex Pharma operates under GMP, FSSAI and GLP certifications.
              Product requirements and supporting documentation are reviewed
              with each manufacturing brief.
            </p>
            <ul className="checks checks--paper" style={{ marginTop: 20 }}>
              <li>Raw-material review and in-process checks</li>
              <li>Product testing and batch documentation</li>
              <li>Format and packaging requirements agreed before production</li>
            </ul>
            <Link
              href="/manufacturing#quality"
              className="btn btn--primary btn--sm"
              style={{ marginTop: 22 }}
            >
              How manufacturing works <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="eyebrow eyebrow--paper">How to get started</p>
              <h2 className="display h2" style={{ marginTop: 18 }}>
                A clear path from idea to production.
              </h2>
            </Reveal>
          </div>
          <ol className="flow-grid">
            {FLOW.map((step, index) => (
              <Reveal
                as="li"
                className="flow-step"
                key={step.title}
                delay={index * 70}
              >
                <span className="flow-step__num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <div className="process-note">
              <span className="process-note__mark" aria-hidden="true">i</span>
              <p>
                Product scope, feasibility, minimum quantities and timelines are
                reviewed with you before production is confirmed.
              </p>
              <Link href="/manufacturing">See manufacturing support <span aria-hidden="true">→</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Have a product brief?"
        copy="Share your idea, intended market and preferred format. Our team will get back within 24–48 hours with formulation options and a quote."
      />
    </main>
  );
}
