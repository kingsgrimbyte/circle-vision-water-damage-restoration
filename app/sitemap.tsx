import { MetadataRoute } from "next";
import contentData from "@/components/Content/ContactInfo.json";

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = contentData.baseUrl;

  return [
    {
      sitemap: `${baseUrl}sitemap-main/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      sitemap: `${baseUrl}sitemap-blogs/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      sitemap: `${baseUrl}sitemap-subdomains/sitemap.xml`,
      lastModified: new Date(),
    },
  ];
}
