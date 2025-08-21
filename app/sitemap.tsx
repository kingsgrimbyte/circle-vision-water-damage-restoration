import { MetadataRoute } from "next";
import contentData from "@/components/Content/ContactInfo.json";

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = contentData.baseUrl;

  return [
    {
      url: `${baseUrl}sitemap-main/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}sitemap-blogs/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}sitemap-subdomains/sitemap.xml`,
      lastModified: new Date(),
    },
  ];
}
