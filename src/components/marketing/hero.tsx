"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import Container from "../global/container";
import { useLanguage } from "@/context/language-context";
import { t } from "@/translations";
import dynamic from "next/dynamic";

const OrbitingCirclesDemo = dynamic(
    () => import("../ui/orbiting-circles-demo").then((m) => m.OrbitingCirclesDemo),
    {
        ssr: false,
        loading: () => (
            <div
                role="presentation"
                className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-muted/60 via-muted/30 to-transparent animate-pulse"
            />
        ),
    }
);

const Hero = () => {
    const { language } = useLanguage();
    const [showOrbitingDemo, setShowOrbitingDemo] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            return;
        }

        const fallbackId = window.setTimeout(() => setShowOrbitingDemo(true), 1200);
        let idleId: number | null = null;

        if ("requestIdleCallback" in window) {
            idleId = window.requestIdleCallback(() => {
                setShowOrbitingDemo(true);
                window.clearTimeout(fallbackId);
            }, { timeout: 1600 });
        }

        return () => {
            window.clearTimeout(fallbackId);
            if (idleId !== null && "cancelIdleCallback" in window) {
                window.cancelIdleCallback(idleId);
            }
        };
    }, []);

    return (
        <div className="my-7 mx-auto z-40 relative w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto px-4">
                {/* Left Column - Text Content */}
                <div className="flex flex-col text-left">
                    <Container delay={0.0}>
                        <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max">
                            <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                </div>
                            </div>
                            <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
                                {t("creadoParaFuturo", language)}
                                <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
                                    {t("queHayDeNuevo", language)}
                                    <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
                                </span>
                            </span>
                        </div>
                    </Container>
                    <BlurText
                        word={
                            <>
                                {t("transformaSeguidores", language)}{' '}
                                <span className="bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-clip-text text-transparent">
                                    {t("clientes", language)}
                                </span>
                            </>
                        }
                        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 leading-tight font-medium racking-[-0.0125em] mt-6 font-heading"
                    />
                    <Container delay={0.1}>
                        <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl">
                            {t("elevaTuPresencia", language)} <span className="hidden sm:inline">{t("gekoMarketingSolucion", language)}</span>
                        </p>
                    </Container>
                    <Container delay={0.2}>
                        <div className="flex items-center gap-x-4 md:gap-x-6 mt-8">
                            <Button asChild size="lg">
                                <Link href="/services">
                                    {t("comienza", language)}
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="hidden md:flex">
                                <Link href="/services">
                                    {t("comoFunciona", language)}
                                </Link>
                            </Button>
                        </div>
                    </Container>
                </div>

                {/* Right Column - Dashboard Image */}
                <Container delay={0.3} className="max-h-[323px]">
                    {showOrbitingDemo ? (
                        <OrbitingCirclesDemo />
                    ) : (
                        <div
                            role="presentation"
                            className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-muted/60 via-muted/30 to-transparent"
                        />
                    )}
                    {/* <div className="relative rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 ">

                        <div className="rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 overflow-hidden h-[440px]">

                            <Image
                                src="/images/geko-dashboard.webp"
                                alt="dashboard"
                                width={1920}
                                height={1080}
                                className="rounded-lg lg:rounded-[20px] scale-[1.035] object-cover"
                            />

                            <AnimatedBeamMultipleOutputDemo className="rounded-lg lg:rounded-[20px] scale-[1.035] object-cover" />
                        </div>

                    </div> */}
                </Container>
            </div>
        </div>
    )
};

export default Hero
