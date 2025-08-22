// app/sitemap-subdomains/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import contentData from "@/components/Content/ContactInfo.json";
import subdomainMap from "@/components/Content/subDomainUrlContent.json";

export async function GET() {
  // Get the host without protocol or trailing slash
  const host = String(contentData.host)
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  const subdomains = Object.keys(subdomainMap); // e.g. ["tx", "ca", "ny", ...]

  // Static paths you want for each subdomain
  const staticPaths = ["/", "/about", "/services", "/contact"];

  const now = new Date().toISOString();

  // Build <url> entries
  const urls = subdomains
    .flatMap((sd) =>
      staticPaths.map(
        (path) => `<url>
  <loc>https://${sd}.${host}${path === "/" ? "" : path}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
  <priority>${path === "/" ? "1.0" : "0.7"}</priority>
</url>`
      )
    )
    .join("\n");

  // Full XML response
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
