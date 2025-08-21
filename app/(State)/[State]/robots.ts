import type { MetadataRoute } from 'next'
 import contentData from "@/components/Content/ContactInfo.json";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: contentData.baseUrl + '/sitemap.xml',
  }
}