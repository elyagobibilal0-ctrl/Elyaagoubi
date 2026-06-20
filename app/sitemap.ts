import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://automasterpro.ma";
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/garage`, lastModified: new Date() },
    { url: `${baseUrl}/garage/register`, lastModified: new Date() },
    { url: `${baseUrl}/roadside`, lastModified: new Date() },
    { url: `${baseUrl}/dashboard`, lastModified: new Date() },
    { url: `${baseUrl}/admin`, lastModified: new Date() }
  ];
}
