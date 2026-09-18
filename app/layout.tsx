import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://vebkonevents.com"),
  title: "Vebkon Events | Corporate Events, Brand Activations & Event Production",
  description:
    "Vebkon Events delivers corporate events, exhibitions, brand activations, customised stalls, fabrication, product launches, weddings and event production across multiple Indian states.",
  keywords: [
    "Event Management Company",
    "Corporate Events India",
    "Event Management Dehradun",
    "Event Management Lucknow",
    "Brand Activation Agency",
    "Exhibition Stall Fabrication",
    "Corporate Event Planner",
    "Product Launch Event",
    "Wedding Event Management",
    "Event Production Company",
    "Stage Setup",
    "Sound and Lighting",
    "Celebrity Management"
  ],
  authors: [{ name: "Vebkon Events" }],
  creator: "Vebkon Events",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vebkonevents.com",
    title: "Vebkon Events | Corporate Events, Brand Activations & Event Production",
    description:
      "Full-service event management, brand activation, custom fabrication, and turnkey production agency in Dehradun, Lucknow, and across India.",
    siteName: "Vebkon Events",
    images: [
      {
        url: "/logo/vebkon-logo.png",
        width: 949,
        height: 223,
        alt: "Vebkon Events Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vebkon Events | Corporate Events, Brand Activations & Event Production",
    description:
      "Full-service Indian event management, fabrication, and experiential production agency.",
    images: ["/logo/vebkon-logo.png"]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#D71920",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org ProfessionalService structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vebkon Events",
    image: "https://vebkonevents.com/logo/vebkon-logo.png",
    url: "https://vebkonevents.com",
    telephone: "+919756666623",
    priceRange: "₹₹₹",
    description:
      "Vebkon Events delivers corporate events, exhibitions, brand activations, customised stalls, fabrication, product launches, weddings and event production across multiple Indian states.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "East Tyagi Road, Race Course",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        postalCode: "248001",
        addressCountry: "IN"
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Vijyant Khand, Gomti Nagar",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226010",
        addressCountry: "IN"
      }
    ],
    areaServed: [
      "Uttar Pradesh",
      "Uttarakhand",
      "Delhi NCR",
      "Rajasthan",
      "Haryana",
      "Punjab",
      "Gujarat"
    ],
    sameAs: [
      "https://www.instagram.com/vebkon_events"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-surface-offwhite text-typography-main selection:bg-brand-red selection:text-white">
        <Navbar />
        <main className="flex-grow pt-[72px]">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

