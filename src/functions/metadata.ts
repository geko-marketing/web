import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Metadata["alternates"];
    canonicalPath?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = "Geko Marketing | Agencia de Marketing Digital",
    description = "Creamos marcas de alta calidad para impulsar tu negocio digital, con un enfoque en diseño web, gestión de redes sociales y estrategias de marca efectivas.",
    image = "/thumbnail.png",
    icons = [
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/icons/favicon-32x32.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/icons/favicon-16x16.png"
        },
    ],
    noIndex = false,
    keywords = [
        "marketing digital",
        "gestión de redes sociales",
        "creación de contenido",
        "diseño web",
        "branding",
        "agencia de marketing"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
    twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE,
    type = "website",
    locale = "es_ES",
    alternates,
    canonicalPath = "/",
    publishedTime,
    modifiedTime
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://geko-marketing.vercel.app");
    const imageUrl = image ? new URL(image, metadataBase).toString() : null;
    const canonicalUrl = new URL(canonicalPath, metadataBase).toString();
    const resolvedAuthor = author || "Geko Marketing";
    const resolvedTwitterHandle = twitterHandle?.startsWith("@") ? twitterHandle : undefined;

    return {
        metadataBase,
        applicationName: "Geko Marketing",
        category: "marketing",
        referrer: "origin-when-cross-origin",
        title: {
            template: "%s | Geko Marketing",
            default: title
        },
        description,
        keywords,
        authors: [{ name: resolvedAuthor }],
        creator: resolvedAuthor,
        publisher: "Geko Marketing",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        alternates: alternates ?? {
            canonical: canonicalUrl,
            languages: {
                "es-ES": canonicalUrl,
            },
        },
        icons,

        // OpenGraph
        openGraph: {
            type,
            siteName: "Geko Marketing",
            title,
            description,
            url: canonicalUrl,
            ...(imageUrl && {
                images: [{
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title
                }]
            }),
            locale,
            alternateLocale: alternates?.languages ? Object.keys(alternates.languages) : undefined,
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime })
        },

        // Twitter
        twitter: {
            card: imageUrl ? "summary_large_image" : "summary",
            site: resolvedTwitterHandle,
            creator: resolvedTwitterHandle,
            title,
            description,
            ...(imageUrl && { images: [imageUrl] })
        },

        // Robots
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Verification
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
            yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
            yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
        },
    };
};
