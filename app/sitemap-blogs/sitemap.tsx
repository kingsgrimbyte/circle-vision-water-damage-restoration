// app/sitemap.ts
import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import contentData from "@/components/Content/ContactInfo.json";

export const dynamic = "force-dynamic";
export const revalidate = 0; // when fetching live data

async function getBlogData(origin: string) {
  const res = await fetch(`${origin}/api/blogs`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load blogs");
  return res.json() as Promise<{ blogs: any[]; currentDate?: string }>;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${proto}://${host}`;

  // Only fetch if you actually use the data
  const { blogs } = await getBlogData(origin);
  const uniqueCategories = Array.from(new Set(blogs.map((url: any) => url.category)));
 const blogCatergoryURL = uniqueCategories.map((catagory: string) => ({
    url: `${contentData.baseUrl}${catagory}/`,
    lastModified: new Date(),
  }));
  const blogURL = blogs.map((url :any) => ({
    url: `${contentData.baseUrl}${url.category}/${url.slug}/`,
    lastModified: new Date(),
  }));
  const now = new Date();
  return [
    { url: `${contentData.baseUrl}blogs/`, lastModified: now },
 ...blogCatergoryURL,
   ...blogURL
  ];
}
