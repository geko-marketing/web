"use client";

import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { FooterLogo } from "./footer-logo";
import { useLanguage } from "@/context/language-context";
import { t } from "@/translations";

const Particles = dynamic(() => import("../ui/particles").then((module) => module.Particles), {
    ssr: false,
    loading: () => null,
});

const SparklesPreview = dynamic(() => import("../ui/sparkles2").then((module) => module.SparklesPreview), {
    ssr: false,
    loading: () => null,
});

const Footer = () => {
    const { language } = useLanguage();
    const footerRef = useRef<HTMLElement | null>(null);
    const [renderVisualEffects, setRenderVisualEffects] = useState(false);

    useEffect(() => {
        const node = footerRef.current;
        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setRenderVisualEffects(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px 0px" }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className="w-full py-10 relative">
            {renderVisualEffects ? <SparklesPreview /> : null}
            <Container>
                <Wrapper className="relative flex flex-col md:flex-row justify-between pb-40 overflow-hidden footer">
                    {renderVisualEffects ? (
                        <Particles
                            className="absolute inset-0 w-full -z-10"
                            quantity={40}
                            ease={10}
                            color="#d4d4d8"
                            refresh
                        />
                    ) : null}
                    <div className="flex flex-col items-start max-w-48">
                        <FooterLogo />

                        <p className="text-base max-w mt-4">
                            {t("contactaConNosotros", language)}
                        </p>
                        <Button className="mt-8">
                            <Link href="/services">
                                {t("empezaAhora", language)}
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-lg mt-10 md:mt-0">
                        {FOOTER_LINKS(language)?.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h4 className="text-sm font-medium">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4 w-full">
                                    {section.links.map((link, index) => (
                                        <li key={index} className="text-sm text-muted-foreground hover:text-foreground transition-all w-full">
                                            <Link href={link.href} className="w-full">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex items-center justify-between relative">
                    <p className="text-sm text-secondary-foreground">
                        &copy; {new Date().getFullYear()} Geko Marketing. {t("derechosReservados", language)}
                    </p>
                    <div className="flex items-center gap-4" aria-label="Redes sociales">
                        <button type="button" className="p-1 cursor-not-allowed opacity-70" aria-label="Instagram (pendiente de enlace)" title="Próximamente" disabled>
                            <Icons.instagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </button>
                        <button type="button" className="p-1 cursor-not-allowed opacity-70" aria-label="X (pendiente de enlace)" title="Próximamente" disabled>
                            <Icons.twitter className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </button>
                        <button type="button" className="p-1 cursor-not-allowed opacity-70" aria-label="Discord (pendiente de enlace)" title="Próximamente" disabled>
                            <Icons.discord className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
                        </button>
                    </div>
                </Wrapper>
            </Container>
        </footer>
    )
};

export default Footer
