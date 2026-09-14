import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://geko-marketing.vercel.app";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/playground"],
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
