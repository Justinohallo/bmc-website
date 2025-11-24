import { Providers } from "../providers/ThemeProvider";
import Script from "next/script";
import type { Metadata, Viewport } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bitcoinmerchants.org';
const ogImageUrl = `${siteUrl}/assets/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bitcoin Merchant Community",
  description: "The Bitcoin Merchant Community is a growing global community of small businesses helping one another defeat 3% credit card fees by accepting bitcoin",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Bitcoin Merchant Community",
    description: "The Bitcoin Merchant Community is a growing global community of small businesses helping one another defeat 3% credit card fees by accepting bitcoin",
    url: siteUrl,
    siteName: 'Bitcoin Merchant Community',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Bitcoin Merchant Community',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bitcoin Merchant Community",
    description: "The Bitcoin Merchant Community is a growing global community of small businesses helping one another defeat 3% credit card fees by accepting bitcoin",
    images: {
      url: ogImageUrl,
      alt: 'Bitcoin Merchant Community',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  minimumScale: 1.0,
  maximumScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/gaq1ohg.css' />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="6395c060-67aa-4094-978d-917c9551b8e4"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

