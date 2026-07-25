import type { MetadataRoute } from "next";

import { services, suburbs } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.panaplumbing.com.au";
  const staticRoutes = ["", "/services", "/areas", "/about", "/gallery", "/blog", "/contact", "/quote"];

  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...services.map((service) => ({ url: `${base}/services/${service.slug}`, lastModified: new Date() })),
    ...suburbs.map((suburb) => ({ url: `${base}/areas/${suburb.toLowerCase().replace(/\s+/g, "-")}`, lastModified: new Date() }))
  ];
}
