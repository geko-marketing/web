import PackagesPageClient from "@/components/marketing/packages-page-client";
import { generateMetadata } from "@/functions";

export const metadata = generateMetadata({
    title: "Planes y Servicios de Marketing",
    description: "Descubre los planes Silver, Golden y Platinum de Geko Marketing para acelerar tu crecimiento digital con estrategia, contenido y analítica.",
    canonicalPath: "/services",
    keywords: [
        "planes de marketing digital",
        "servicios de marketing",
        "gestión de redes sociales",
        "branding",
        "creación de páginas web"
    ],
});

const PackagesPage = () => {
    return <PackagesPageClient />;
};

export default PackagesPage;
