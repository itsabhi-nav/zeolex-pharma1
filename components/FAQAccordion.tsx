"use client";

import { useState } from "react";

export default function FAQAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="faq__item" data-open={isOpen} key={item.q}>
            <h3 style={{ fontSize: "inherit", fontWeight: "inherit" }}>
              <button
                className="faq__q"
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                id={`faq-q-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span style={{ flex: 1 }}>{item.q}</span>
                <span className="sign" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>
            <div
              className="faq__a"
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
            >
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
