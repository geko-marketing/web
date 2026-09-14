import { Background } from "@/components";
import { ServicePageHeader } from "@/components/marketing/service-page-header";
import { ServiceFeatures } from "@/components/marketing/service-features";
import { ServiceBenefits } from "@/components/marketing/service-benefits";
import { ServiceCTA } from "@/components/marketing/service-cta";
import { Code2, Smartphone, Zap, ShieldCheck, Gauge, Settings } from "lucide-react";
import { generateMetadata } from "@/functions";

export const metadata = generateMetadata({
    title: "Creación de Páginas Web Profesionales",
    description: "Diseñamos páginas web rápidas, seguras y optimizadas para SEO para convertir visitas en oportunidades de negocio.",
    canonicalPath: "/services/web-creation",
});

const WebCreationPage = () => {
    const features = [
        {
            title: "Diseño Responsivo",
            description: "Sitios web que se ven perfectos en cualquier dispositivo: móvil, tablet o escritorio.",
            icon: <Smartphone className="w-8 h-8" />,
        },
        {
            title: "Optimizado para SEO",
            description: "Construcción técnica perfecta para ranking en buscadores desde el primer día.",
            icon: <Gauge className="w-8 h-8" />,
        },
        {
            title: "Velocidad Extrema",
            description: "Carga rápida y rendimiento optimizado para la mejor experiencia del usuario.",
            icon: <Zap className="w-8 h-8" />,
        },
        {
            title: "Seguridad de Nivel Empresarial",
            description: "Protección SSL, actualizaciones automáticas y respaldos regulares incluidos.",
            icon: <ShieldCheck className="w-8 h-8" />,
        },
        {
            title: "Interfaz Intuitiva",
            description: "Fácil de mantener y actualizar sin necesidad de conocimientos técnicos.",
            icon: <Code2 className="w-8 h-8" />,
        },
        {
            title: "Integración Completa",
            description: "Conecta con herramientas de marketing, CRM, email y redes sociales.",
            icon: <Settings className="w-8 h-8" />,
        },
    ];

    const benefits = [
        {
            title: "Primera Impresión Profesional",
            description: "Tu sitio web es la puerta de entrada a tu negocio. Hazlo contar.",
        },
        {
            title: "Generador de Leads",
            description: "Convertimos visitantes en clientes potenciales con CTA estratégicas.",
        },
        {
            title: "Disponible 24/7",
            description: "Tu negocio vendiendo incluso cuando duermes, sin límites geográficos.",
        },
        {
            title: "Escalabilidad Infinita",
            description: "Crece tu negocio sin preocuparte por la capacidad del servidor.",
        },
        {
            title: "Identidad Digital Fuerte",
            description: "Un dominio profesional que fortalece la credibilidad de tu marca.",
        },
        {
            title: "Ventaja Competitiva",
            description: "Si tu competencia no tiene web, esto te posiciona años adelante.",
        },
    ];

    return (
        <Background>
            <ServicePageHeader
                title="Creación de Páginas Web"
                description="Websites profesionales, modernos y orientados a resultados. Tu presencia digital comienza aquí."
            />

            <ServiceFeatures
                features={features}
                title="Tecnología de Punta"
            />

            <ServiceBenefits
                benefits={benefits}
                title="Por Qué Necesitas un Sitio Web"
            />

            <ServiceCTA
                title="Tu Web Profesional Espera"
                description="No esperes más. Obtén un sitio web que te represente y convierta visitantes en clientes."
                buttonText="Solicitar Presupuesto"
                buttonLink="/contact"
            />
        </Background>
    );
};

export default WebCreationPage;
