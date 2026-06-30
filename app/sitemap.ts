import type { MetadataRoute } from "next";
import { getNews } from "@/lib/content";

export const dynamic = "force-static";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://menyamya.gov.pg";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), priority: 1 },
    { url: `${BASE_URL}/about/`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/district-profile/`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/programs/`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/news/`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/publications/`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/services/`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/gallery/`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE_URL}/contact/`, lastModified: new Date(), priority: 0.7 },
  ];

  const newsRoutes: MetadataRoute.Sitemap = getNews().map((item) => ({
    url: `${BASE_URL}/news/${item.slug}/`,
    lastModified: new Date(item.date),
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
