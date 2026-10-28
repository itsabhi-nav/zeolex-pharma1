import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PAGE_META, SITE } from "@/lib/site";
import "./globals.css";

/**
 * Type system (client direction): Arial only, everywhere. No webfonts,
 * no Google Fonts, no fallback downloads. Hierarchy comes from weight,
 * size and spacing, not font family.
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://zoelexpharma.com"),
  title: {
    default: PAGE_META.home.title,
    template: "%s",
  },
  description: PAGE_META.home.description,
  openGraph: {
    siteName: "Zoelex Pharma",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <noscript>
          {/* Content must remain visible without JavaScript */}
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important;clip-path:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <a
          className="wa-float"
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Zoelex Pharma on WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm5.77 14.06c-.24.68-1.4 1.3-1.93 1.35-.52.05-1.01.24-3.4-.72-2.87-1.13-4.7-4.06-4.84-4.25-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.1 1-2.38.26-.29.57-.36.76-.36h.55c.18 0 .42-.06.65.5.24.57.8 1.97.88 2.11.07.14.12.31.02.5-.1.19-.15.3-.29.47-.15.17-.3.38-.44.5-.14.15-.29.3-.12.59.16.28.72 1.2 1.55 1.94 1.06.95 1.96 1.25 2.24 1.39.28.14.44.12.6-.07.17-.19.7-.82.88-1.1.19-.29.38-.24.64-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
