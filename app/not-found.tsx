import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        padding: "130px 24px 90px",
        background: "var(--ink)",
        position: "relative",
        overflow: "clip",
        textAlign: "center",
      }}
    >
      <div style={{ position: "relative", maxWidth: 600 }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(3rem, 9vw, 6rem)",
            fontWeight: 500,
            marginBottom: 16,
            color: "var(--mint-2)",
          }}
        >
          404
        </p>
        <h1 className="display h2" style={{ margin: "0 0 18px" }}>
          This page didn't make it to <em>production</em>.
        </h1>
        <p className="lede" style={{ marginInline: "auto" }}>
          The address you followed doesn't exist on this site. Try the
          technologies we manufacture, or start an enquiry.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
          <Link href="/" className="btn btn--primary btn--sm">
            Back to Home <span className="arrow">→</span>
          </Link>
          <Link href="/technologies" className="btn btn--ghost btn--sm">
            Explore Our Technologies
          </Link>
        </div>
      </div>
    </main>
  );
}
