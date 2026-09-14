import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://geko-marketing.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        {
            url: `${siteUrl}/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/services/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/services/social-media/`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/services/brand-boost/`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/services/web-creation/`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
