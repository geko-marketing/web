import { Background } from "@/components";
import { ServicePageHeader } from "@/components/marketing/service-page-header";
import { ServiceFeatures } from "@/components/marketing/service-features";
import { ServiceBenefits } from "@/components/marketing/service-benefits";
import { ServiceCTA } from "@/components/marketing/service-cta";
import { Sparkles, Target, Rocket, Eye, Award, Zap } from "lucide-react";
import { generateMetadata } from "@/functions";

export const metadata = generateMetadata({
    title: "Impulso de Marca y Posicionamiento",
    description: "Fortalece tu marca con estrategias de posicionamiento, contenido de alto impacto y campañas orientadas a resultados.",
    canonicalPath: "/services/brand-boost",
});

const BrandBoostPage = () => {
    const features = [
        {
            title: "Estrategia de Marca",
            description: "Desarrollo de una identidad única y memorable que te diferencie de la competencia.",
            icon: <Target className="w-8 h-8" />,
        },
        {
            title: "Posicionamiento SEO",
            description: "Optimización completa para aparecer en las primeras posiciones de los buscadores.",
            icon: <Eye className="w-8 h-8" />,
        },
        {
            title: "Contenido de Alta Calidad",
            description: "Creación de contenido estratégico que atrae y convierte a tu audiencia objetivo.",
            icon: <Sparkles className="w-8 h-8" />,
        },
        {
            title: "Campaña Publicitaria",
            description: "Diseño e ejecución de campañas pagadas altamente segmentadas y productivas.",
            icon: <Rocket className="w-8 h-8" />,
        },
        {
            title: "Reputación Online",
            description: "Gestión y mejora de tu reputación digital en todas las plataformas.",
            icon: <Award className="w-8 h-8" />,
        },
        {
            title: "Análisis Competitivo",
            description: "Análisis profundo de tu competencia para identificar oportunidades únicas.",
            icon: <Zap className="w-8 h-8" />,
        },
    ];

    const benefits = [
        {
            title: "Visibilidad Aumentada",
            description: "Sé encontrado por más clientes potenciales en internet.",
        },
        {
            title: "Credibilidad y Confianza",
            description: "Construye autoridad en tu industria y ganate la confianza de tu audiencia.",
        },
        {
            title: "Crecimiento Sostenible",
            description: "Estrategias enfocadas en crecimiento a largo plazo y no en resultados efímeros.",
        },
        {
            title: "Diferenciación Competitiva",
            description: "Destácate en un mercado saturado con una propuesta única e irresistible.",
        },
        {
            title: "Aumento de Conversiones",
            description: "Convierte más visitantes en clientes con estrategias probadas.",
        },
        {
            title: "Retorno de Inversión",
            description: "Mide cada peso invertido y optimiza continuamente para máximo ROI.",
        },
    ];

    return (
        <Background>
            <ServicePageHeader
                title="Impulso de Marca"
                description="Potencia tu presencia online y construye una marca que sea verdaderamente memorable. Crece y domina tu mercado."
            />

            <ServiceFeatures
                features={features}
                title="Estrategias de Impulso"
            />

            <ServiceBenefits
                benefits={benefits}
                title="Resultados Garantizados"
            />

            <ServiceCTA
                title="Transforma tu Marca Hoy"
                description="Es hora de dejar de ser invisible. Déjanos ayudarte a convertir tu marca en un referente en tu industria."
                buttonText="Iniciar Transformación"
                buttonLink="/contact"
            />
        </Background>
    );
};

export default BrandBoostPage;
