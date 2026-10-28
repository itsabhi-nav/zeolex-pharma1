import Link from "next/link";
import type { ReactNode } from "react";

export default function PageHero({
  title,
  lede,
  crumb,
  children,
}: {
  title: ReactNode;
  lede?: string;
  crumb: string;
  children?: ReactNode;
}) {
  return (
    <section className="phero">
      <div className="wrap" style={{ position: "relative" }}>
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="display h1" style={{ marginTop: 30 }}>
          {title}
        </h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
