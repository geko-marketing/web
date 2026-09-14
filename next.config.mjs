/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: true,
    poweredByHeader: false,
    experimental: {
        optimizePackageImports: ["lucide-react"],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
    },
    transpilePackages: ["next-image-export-optimizer"],
    env: {
        nextImageExportOptimizer_imageFolderPath: "public/images",
        nextImageExportOptimizer_exportFolderPath: "out",
        nextImageExportOptimizer_quality: "75",
        nextImageExportOptimizer_storePicturesInWEBP: "true",
        nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
        nextImageExportOptimizer_generateAndUseBlurImages: "true",
        nextImageExportOptimizer_remoteImageCacheTTL: "86400",
    },
    images: {
        loader: "custom",
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            }
        ]
    }
};

export default nextConfig;
