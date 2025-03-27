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
      lastModified: "2025-03-27T20:24:35+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AR-RAHEEM",
      lastModified: "2025-03-27T20:24:35+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-MALIK",
      lastModified: "2025-03-27T20:24:35+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-QUDDUS",
      lastModified: "2025-03-27T20:24:35+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AS-SALAM",
      lastModified: "2025-03-27T20:24:35+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-MU'MIN",
      lastModified: "2025-03-27T20:24:35+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-MUHAYMIN",
      lastModified: "2025-03-27T20:24:35+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-AZEEZ",
      lastModified: "2025-03-27T20:24:35+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.99namesofallah.faith/name/AL-JABBAR",
      lastModified: "2025-03-27T20:24:35+00:00",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
