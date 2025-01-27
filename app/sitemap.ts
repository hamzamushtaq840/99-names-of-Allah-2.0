import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.99namesofallah.faith/",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.99namesofallah.faith/name/AR-RAHMAAN",
      lastModified: "2024-10-11T05:00:27+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AR-RAHEEM",
      lastModified: "2024-10-11T05:00:27+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-MALIK",
      lastModified: "2024-10-11T05:00:27+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-QUDDUS",
      lastModified: "2024-10-11T05:00:27+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AS-SALAM",
      lastModified: "2024-10-11T05:00:27+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-MU'MIN",
      lastModified: "2025-01-23T17:00:27+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-MUHAYMIN",
      lastModified: "2025-01-24T00:00:00+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-AZEEZ",
      lastModified: "2025-01-27T00:00:00+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
