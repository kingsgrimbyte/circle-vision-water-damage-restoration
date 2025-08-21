import { MetadataRoute } from "next";
import contentData from "@/components/Content/ContactInfo.json";
import serviceData from "@/components/Content/servicePage.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = contentData.baseUrl;
  const ServiceSlug: string[] = serviceData.serviceData.lists.map(
    (item: any) => item.slug
  );

  const ServiceURL = ServiceSlug.map((location) => ({
    url: `${baseUrl}services/${location}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}services/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...ServiceURL,
  ];
}
