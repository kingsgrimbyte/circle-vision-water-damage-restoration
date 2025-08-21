import { MetadataRoute } from "next";
//  import CityData1 from "@/public/City.json";
import contactContent from "@/app/Data/content";
import subdomainContent from "@/app/Data/FinalContent";

const contentData: any = contactContent.contactContent;
const data: any = subdomainContent.subdomainData;

export default function sitemap(): MetadataRoute.Sitemap {
  const SubDomain: any = Object.keys(data);

  const SubDomainURL = SubDomain.map((location: any) => ({
    url: `https://${location}.${contentData.host}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
  return [...SubDomainURL];
}
