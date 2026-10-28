"use client";

import Link from "next/link";
import { useState } from "react";
import { PRODUCT_CATEGORIES } from "@/lib/products";

const FORMAT_LABELS: Record<string, string> = {
  Gummies: "Gummies",
  OTF: "Thin Films",
  Softgels: "Softgels",
  Liposomal: "Liposomal",
};

export default function ProductExplorer({
  defaultOpen = 0,
}: {
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="explorer">
      {PRODUCT_CATEGORIES.map((cat, i) => {
        const isOpen = open === i;
        return (
          <div className="ex-row" data-open={isOpen} key={cat.name}>
            <h3 style={{ margin: 0 }}>
              <button
                className="ex-head"
                aria-expanded={isOpen}
                aria-controls={`cat-${i}`}
                id={`cat-h-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="cat">{cat.name}</span>
                <span className="fmt-chips" aria-label="Available formats">
                  {cat.formats.map((f) => (
                    <span className="chip chip--paper" key={f}>
                      {FORMAT_LABELS[f]}
                    </span>
                  ))}
                </span>
                <span className="caret" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className="ex-body"
              id={`cat-${i}`}
              role="region"
              aria-labelledby={`cat-h-${i}`}
            >
              <div>
                <div className="ex-pad">
                  <ul>
                    {cat.examples.map((ex) => (
                      <li key={ex}>{ex}</li>
                    ))}
                  </ul>
                  <div className="ex-cta">
                    <p className="mono-label mono-label--paper">Available in</p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {cat.formats.map((f) => (
                        <span className="chip chip--paper" key={f}>
                          {FORMAT_LABELS[f]}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/contact?category=${encodeURIComponent(cat.name)}`}
                      className="btn btn--primary btn--sm"
                    >
                      Enquire <span className="arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
