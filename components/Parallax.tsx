"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Subtle scroll parallax for imagery. The child drifts vertically
 * as the page scrolls. Disabled for reduced motion and touch
 * devices, where it renders as a normal static image.
 */
export default function Parallax({
  children,
  strength = 24,
  className = "",
  style,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = outer.current;
    const target = inner.current;
    if (!el || !target) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    )
      return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      const progress = (r.top + r.height / 2 - vh / 2) / vh; // -0.5..0.5-ish
      target.style.transform = `translateY(${(-progress * strength).toFixed(2)}px) scale(1.08)`;
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
  }, [strength]);

  return (
    <div ref={outer} className={className} style={{ overflow: "clip", ...style }}>
      <div
        ref={inner}
        style={{ willChange: "transform", transition: "transform 0.12s linear" }}
      >
        {children}
      </div>
    </div>
  );
}
