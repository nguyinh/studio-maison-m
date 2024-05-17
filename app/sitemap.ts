import type { MetadataRoute } from "next";

const websiteBaseUrl = "https://studio-maison-m.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: websiteBaseUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${websiteBaseUrl}/en`,
          fr: `${websiteBaseUrl}/fr`,
        },
      },
    },
    {
      url: `${websiteBaseUrl}/studio`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${websiteBaseUrl}/en/studio`,
          fr: `${websiteBaseUrl}/fr/studio`,
        },
      },
    },
    {
      url: `${websiteBaseUrl}/booking`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${websiteBaseUrl}/en/booking`,
          fr: `${websiteBaseUrl}/fr/booking`,
        },
      },
    },
    {
      url: `${websiteBaseUrl}/gear`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${websiteBaseUrl}/en/gear`,
          fr: `${websiteBaseUrl}/fr/gear`,
        },
      },
    },
    {
      url: `${websiteBaseUrl}/remote-recording`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${websiteBaseUrl}/en/remote-recording`,
          fr: `${websiteBaseUrl}/fr/remote-recording`,
        },
      },
    },
    {
      url: `${websiteBaseUrl}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${websiteBaseUrl}/en/about`,
          fr: `${websiteBaseUrl}/fr/about`,
        },
      },
    },
  ];
}
