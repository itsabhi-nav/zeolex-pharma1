"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progressRef.current)
        progressRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <header className="hdr">
        <div className="hdr__bar">
          <Link href="/" className="brand" aria-label="Zoelex Pharma home">
            <Image
              src="/images/logo-wordmark.png"
              alt="Zoelex Pharma"
              width={634}
              height={230}
              className="brand__wordmark"
              priority
            />
          </Link>
          <nav className="hnav" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hdr__cta">
            <Link href="/contact" className="btn btn--primary btn--sm">
              Request a Quote
            </Link>
            <button
              className="burger"
              aria-expanded={open}
              aria-controls="mnav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="mnav" id="mnav">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="mnav__link">
                  <span>{item.index}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mnav__foot">
            <a href={SITE.whatsapp} className="btn btn--primary" target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
            <a href={`mailto:${SITE.email}`} className="btn btn--ghost">
              {SITE.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
