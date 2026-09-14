"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container } from "@/components";
import { cn } from "@/functions";
import { AnimatedGradientTextDemo } from "../ui/animated-gradient-text1";
import { useLanguage } from "@/context/language-context";
import { t } from "@/translations";


const faqs = (language: "es" | "en") => [
    {
        q: t("faq1Q", language),
        a: t("faq1A", language),
    },
    {
        q: t("faq2Q", language),
        a: t("faq2A", language),
    },
    {
        q: t("faq3Q", language),
        a: t("faq3A", language),
    },
    {
        q: t("faq4Q", language),
        a: t("faq4A", language),
    },
    {
        q: t("faq5Q", language),
        a: t("faq5A", language),
    },
    {
        q: t("faq6Q", language),
        a: t("faq6A", language),
    },
    {
        q: t("faq7Q", language),
        a: t("faq7A", language),
    },
    {
        q: t("faq8Q", language),
        a: t("faq8A", language),
    },
];

export default function Faqs({ className }: { className?: string }) {
    const { language } = useLanguage();
    return (
        <section className={cn("py-12 lg:py-20", className)}>
            <Container>
                <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                    <div className="text-sm font-medium tracking-widest uppercase text-primary">
                        <AnimatedGradientTextDemo />
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        {t("preguntasFrecuentes", language)}
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto mt-4">
                    <div className="bg-card/50 rounded-2xl p-1">
                        <Accordion type="single" collapsible className="rounded-xl">
                            {faqs(language).map((f, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="border-0">
                                    <AccordionTrigger className="text-foreground/85 px-4 py-3 rounded-lg hover:bg-muted/10 transition-colors">
                                        {f.q}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-sm text-muted-foreground whitespace-pre-line px-4">{f.a}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </Container>
        </section>
    );
}
