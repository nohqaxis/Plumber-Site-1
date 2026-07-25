import type { Metadata } from "next";

import { business } from "@/lib/constants";

export function makeMetadata(title: string, description: string, path = ""): Metadata {
  const base = "https://www.panaplumbing.com.au";
  const url = `${base}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_AU",
      type: "website"
    }
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: business.name,
  areaServed: business.serviceRadius,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU"
  }
};
