// app/sitemap.ts
import type { MetadataRoute } from "next";
import contentData from "@/components/Content/ContactInfo.json";
import subdomainMap from "@/components/Content/subDomainUrlContent.json";

export default function sitemap(): MetadataRoute.Sitemap {
  // Ensure we only have the host (no protocol / trailing slash)
  const host = String(contentData.host)
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  const subdomains = Object.keys(subdomainMap); // e.g. ["tx","ca","ny", ...]

  // Pages you want per subdomain
  const staticPaths = ["/", "/about", "/services", "/contact"];

  const now = new Date();

  const entries: MetadataRoute.Sitemap = subdomains.flatMap((sd) =>
    staticPaths.map((path) => ({
      url: `https://${sd}.${host}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
    }))
  );

  return entries;
}
