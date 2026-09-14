"use client";

import { Background } from "@/components";
import { ServiceFeatures } from "@/components/marketing/service-features";
import { ServiceBenefits } from "@/components/marketing/service-benefits";
import { ServiceCTA } from "@/components/marketing/service-cta";
import { ThreeDMarqueeDemo } from "@/components/ui/3d-marquee-demo";
import { AnimatedGradientTextDemo } from "@/components/ui/animated-gradient-text1";
import Container from "@/components/global/container";
import { BlurText } from "@/components/ui/blur-text";
import { Zap, Target, BarChart3, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { t } from "@/translations";

const PackagesPageClient = () => {
    const { language } = useLanguage();

    const features = [
        {
            title: t("paqueteBasico", language),
            description: t("paqueteBasicoDesc", language),
            icon: <Smartphone className="w-8 h-8" />,
        },
        {
            title: t("paqueteProfesional", language),
            description: t("paqueteProfesionalDesc", language),
            icon: <Target className="w-8 h-8" />,
        },
        {
            title: t("paqueteEnterprise", language),
            description: t("paqueteEnterpriseDesc", language),
            icon: <BarChart3 className="w-8 h-8" />,
        },
        {
            title: t("gestionRedesSocialesTitle", language),
            description: t("gestionRedesSocialesServiceDesc", language),
            icon: <Smartphone className="w-8 h-8" />,
        },
        {
            title: t("impulsoMarcaTitle", language),
            description: t("impulsoMarcaServiceDesc", language),
            icon: <Zap className="w-8 h-8" />,
        },
        {
            title: t("creacionPaginasWebTitle", language),
            description: t("creacionPaginasWebServiceDesc", language),
            icon: <Target className="w-8 h-8" />,
        },
    ];

    const benefits = [
        {
            title: t("flexibilidadTotal", language),
            description: t("flexibilidadTotalDesc", language),
        },
        {
            title: t("soporteDedicado", language),
            description: t("soporteDedicadoDesc", language),
        },
        {
            title: t("resultadosMedibles", language),
            description: t("resultadosMediblesDesc", language),
        },
        {
            title: t("actualizacionesConstantes", language),
            description: t("actualizacionesConstantesDesc", language),
        },
        {
            title: t("escalabilidad", language),
            description: t("escalabilidadDesc", language),
        },
        {
            title: t("integracionSinFricciones", language),
            description: t("integracionSinFriccionesDesc", language),
        },
    ];

    return (
        <Background>
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
                <div className="absolute inset-0 opacity-50">
                    <ThreeDMarqueeDemo />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"></div>

                <Container delay={0.1} className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <div className="mb-8">
                        <AnimatedGradientTextDemo />
                    </div>

                    <BlurText
                        word={t("nuestrosPaquetes", language)}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent"
                    />

                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t("eligePlanPerfecto", language)}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span>{t("soporte247", language)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span>{t("resultadosGarantizados", language)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span>{t("planesFlexibles", language)}</span>
                        </div>
                    </div>
                </Container>
            </section>

            <ServiceFeatures
                features={features}
                title={t("solucionesDiseñadas", language)}
            />

            <ServiceBenefits
                benefits={benefits}
                title={t("porQueElegirnos", language)}
            />

            <ServiceCTA
                title={t("listoPotenciar", language)}
                description={t("contactanosHoy", language)}
                buttonText={t("solicitarDemostracion", language)}
                buttonLink="/contact"
            />
        </Background>
    );
};

export default PackagesPageClient;
