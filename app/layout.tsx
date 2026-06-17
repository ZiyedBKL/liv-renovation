import type { Metadata } from "next";
import { Bebas_Neue, Inter, EB_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { constructionBusinessJsonLd, SITE } from "@/lib/schema-org";

const bebas = Bebas_Neue({
  variable: "--font-display-stack",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-stack",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "LIV Rénovation — Artisan polyvalent Île-de-France · 7j/7 · Devis gratuit",
    template: "%s · LIV Rénovation",
  },
  description: SITE.description,
  keywords: [
    "artisan Île-de-France",
    "dépannage urgent Paris IDF",
    "rénovation appartement IDF",
    "peinture appartement Paris",
    "serrurier 7j/7 Île-de-France",
    "plombier urgence IDF",
    "vitrerie Paris",
    "électricien IDF",
    "rénovation salle de bain IDF",
    "rénovation cuisine IDF",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "LIV Rénovation — Artisan polyvalent Île-de-France",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LIV Rénovation — Artisan IDF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LIV Rénovation",
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      data-theme="premium-artisan"
      className={`${bebas.variable} ${inter.variable} ${ebGaramond.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(constructionBusinessJsonLd()),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
