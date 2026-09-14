import "@/styles/globals.css";
import { satoshi } from "@/constants/fonts";
import { cn, generateMetadata } from "@/functions";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components";
import ClientEnhancements from "@/components/global/client-enhancements";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning className="scroll-smooth dark">
            <body
                className={cn(
                    satoshi.variable,
                    "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide"
                )}
            >
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-foreground"
                >
                    Saltar al contenido principal
                </a>
                <Toaster
                    richColors
                    theme="dark"
                    position="top-right"
                />
                <Providers>
                    {children}
                    <ClientEnhancements />
                </Providers>
            </body>
        </html>
    );
};
