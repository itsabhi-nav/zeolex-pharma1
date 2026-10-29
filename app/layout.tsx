import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import NavigationProgress from "@/components/NavigationProgress";
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
      <body id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <NavigationProgress />
        {children}
        <SiteFooter />
        <div className="floating-actions">
          <a
            className="floating-actions__button floating-actions__whatsapp"
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Zoelex Pharma on WhatsApp"
          >
            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.893c0 2.096.548 4.143 1.588 5.946L.053 24l6.304-1.654a11.933 11.933 0 0 0 5.69 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.815 11.815 0 0 0-3.481-8.413"
              />
            </svg>
          </a>
          <a className="floating-actions__button floating-actions__top" href="#top" aria-label="Back to top">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
