"use client";

import Container from "../global/container";
import Images from "../global/images";
import { AnimatedBeamMultipleOutputDemo } from '../ui/animated-beam-demo';
import { Particles } from "../ui/particles";
import { SectionBadge } from "../ui/section-bade";
import { useLanguage } from "@/context/language-context";
import { t } from "@/translations";

const Connect = () => {
    const { language } = useLanguage();
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title={t("conectaHerramientas", language)} />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        {t("integracionPerfecta", language)}
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        {t("admitimosIntegraciones", language)}
                    </p>
                </div>
            </Container>
            <Container>
                <div className="w-full relative mt-12">
                    {/* <Images.connect className="w-full h-auto" /> */}
                    <AnimatedBeamMultipleOutputDemo className="w-full h-auto" />
                    <Particles
                        className="absolute inset-0"
                        quantity={150}
                        ease={80}
                        color="#e4e4e7"
                        refresh
                    />
                </div>
            </Container>
        </div>
    )
};

export default Connect
