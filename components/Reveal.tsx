"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale" | "blur" | "clip";

type Props = {
  children: ReactNode;
  delay?: number;
  variant?: Variant;
  as?: "div" | "section" | "li" | "article" | "blockquote" | "figure";
  className?: string;
  style?: CSSProperties;
};

/**
 * Scroll-triggered directional reveal. Content streams in from
 * different directions per section for a choreographed feel.
 * Falls back to fully visible under prefers-reduced-motion or
 * when JS is unavailable (CSS keeps the base state visible only
 * once IO fires; the base class hides it, so a <noscript> rule
 * is included in the document head to force visibility).
 */
export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  className = "",
  style,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.setAttribute("data-visible", "true");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "true");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -4% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal--${variant} ${className}`.trim()}
      style={{ "--rd": `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
