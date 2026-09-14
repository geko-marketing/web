import { Background } from "@/components";
import { ServicePageHeader } from "@/components/marketing/service-page-header";
import { ServiceFeatures } from "@/components/marketing/service-features";
import { ServiceBenefits } from "@/components/marketing/service-benefits";
import { ServiceCTA } from "@/components/marketing/service-cta";
import { Calendar, BarChart3, MessageCircle, Users, TrendingUp, Zap } from "lucide-react";
import { generateMetadata } from "@/functions";

export const metadata = generateMetadata({
    title: "Servicio de Gestión de Redes Sociales",
    description: "Impulsa tu marca con gestión profesional de redes sociales, calendario editorial, analítica avanzada y community management.",
    canonicalPath: "/services/social-media",
});

const SocialMediaPage = () => {
    const features = [
        {
            title: "Gestión de Redes",
            description: "Administración centralizada de todas tus cuentas en un único dashboard.",
            icon: <Users className="w-8 h-8" />,
        },
        {
            title: "Programación de Posts",
            description: "Programa tus publicaciones con anticipación y optimiza el tiempo de publicación.",
            icon: <Calendar className="w-8 h-8" />,
        },
        {
            title: "Análisis Profundos",
            description: "Reportes detallados sobre engagement, alcance y crecimiento de seguidores.",
            icon: <BarChart3 className="w-8 h-8" />,
        },
        {
            title: "Monitoreo de Menciones",
            description: "Detecta automáticamente menciones y responde rápidamente a tu comunidad.",
            icon: <MessageCircle className="w-8 h-8" />,
        },
        {
            title: "Gestión de Comunidad",
            description: "Interactúa con tu audiencia, responde comentarios y construye relaciones.",
            icon: <Users className="w-8 h-8" />,
        },
        {
            title: "Tendencias en Tiempo Real",
            description: "Detecta hashtags y tendencias relevantes para tu nicho de mercado.",
            icon: <TrendingUp className="w-8 h-8" />,
        },
    ];

    const benefits = [
        {
            title: "Ahorro de Tiempo",
            description: "Automatiza tareas repetitivas y dedica más tiempo a crear estrategias efectivas.",
        },
        {
            title: "Consistencia en la Marca",
            description: "Mantén una voz y estilo coherente en todas tus plataformas sociales.",
        },
        {
            title: "Mayor Alcance",
            description: "Publica en el momento óptimo para maximizar el alcance y engagement.",
        },
        {
            title: "Mejora de ROI",
            description: "Mide y optimiza tu inversión en publicidad social en tiempo real.",
        },
        {
            title: "Mejor Servicio al Cliente",
            description: "Responde rápidamente a preguntas y comentarios de tus clientes.",
        },
        {
            title: "Datos Accionables",
            description: "Accede a insights que te ayudan a mejorar tu estrategia continuamente.",
        },
    ];

    return (
        <Background>
            <ServicePageHeader
                title="Gestión de Redes Sociales"
                description="Administración profesional y centralizada de todas tus cuentas sociales. Aumenta tu presencia online y engagement."
            />

            <ServiceFeatures
                features={features}
                title="Características Principales"
            />

            <ServiceBenefits
                benefits={benefits}
                title="Beneficios de Nuestra Gestión"
            />

            <ServiceCTA
                title="Multiplica tu Presencia en Redes Sociales"
                description="Déjanos encargarnos de tus redes mientras tú te enfocas en tu negocio. Comienza con una consulta gratuita."
                buttonText="Agendar Consulta"
                buttonLink="/contact"
            />
        </Background>
    );
};

export default SocialMediaPage;
