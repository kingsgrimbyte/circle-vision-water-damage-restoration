import { MetadataRoute } from 'next'
//  import CityData1 from "@/public/City.json";
 import contentData from "@/components/Content/ContactInfo.json"
import data from "@/components/Content/subDomainUrlContent.json";


export default function sitemap(): MetadataRoute.Sitemap {
  const BaseUrl = contentData.baseUrl
  const SubDomain:any = Object.keys(data)

  
  const SubDomainURL = SubDomain.map((location :any) => ({
    url: `https://${location}.${contentData.host}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
  return [
    {
      url: `${contentData.baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${contentData.baseUrl}locations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${contentData.baseUrl}services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${contentData.baseUrl}about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${contentData.baseUrl}contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${contentData.baseUrl}subdomains/sitemap.xml`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },   
  ]
}