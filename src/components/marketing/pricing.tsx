'use client'

import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PLANS } from "@/constants";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Button } from "../ui/button";
import GridMotion from "../GridMotion";
import { useLanguage } from "@/context/language-context";
import { t } from "@/translations";

const marketingServiceImages = [
    "https://images.unsplash.com/photo-1460925895917-aaf4a9d3c3b5?w=300&q=80", // Social Media
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80", // Marketing Strategy
    "https://images.unsplash.com/photo-1533790481720-856c6e3c1fdc?w=300&q=80", // Content Creation
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80", // Analytics
    "https://images.unsplash.com/photo-1460925895917-aaf4a9d3c3b5?w=300&q=80", // Email Marketing
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80", // Web Design
    "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&q=80", // SEO
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80", // Video Marketing
    "https://images.unsplash.com/photo-1460925895917-aaf4a9d3c3b5?w=300&q=80", // Social Ads
    "https://images.unsplash.com/photo-1533790481720-856c6e3c1fdc?w=300&q=80", // Brand Strategy
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80", // Digital Design
    "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&q=80", // Marketing Tools
    "https://images.unsplash.com/photo-1460925895917-aaf4a9d3c3b5?w=300&q=80", // Campaign Management
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80", // Influencer Marketing
    "https://images.unsplash.com/photo-1533790481720-856c6e3c1fdc?w=300&q=80", // Content Strategy
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80", // Agency Services
    "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&q=80", // Consulting
    "https://images.unsplash.com/photo-1460925895917-aaf4a9d3c3b5?w=300&q=80", // Growth Marketing
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80", // Performance Marketing
    "https://images.unsplash.com/photo-1533790481720-856c6e3c1fdc?w=300&q=80", // Brand Development
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80", // UI/UX Design
    "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&q=80", // Automation
    "https://images.unsplash.com/photo-1460925895917-aaf4a9d3c3b5?w=300&q=80", // Engagement Strategies
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80", // Customer Journey
    "https://images.unsplash.com/photo-1533790481720-856c6e3c1fdc?w=300&q=80", // Market Research
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80", // Creative Services
    "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&q=80", // Data Analytics
    "https://images.unsplash.com/photo-1460925895917-aaf4a9d3c3b5?w=300&q=80", // Brand Awareness
];

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
    const { language } = useLanguage();

    return (
        <section id="pricing" className="py-12 md:py-16 lg:py-24 w-full relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-40">
                <GridMotion items={marketingServiceImages} gradientColor="rgba(88, 86, 214, 0.3)" />
            </div>
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center text-center w-full">
                        <h2 className="text-4xl md:text-5xl font-heading heading font-bold !leading-tight">
                            {t("planesPrecios", language)}
                        </h2>
                        <p className="text-base md:text-lg text-center text-accent-foreground/80 max-w-xl mx-auto mt-6">
                            {t("elijaPlan", language)}
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-full mt-8">
                        <div className="flex items-center gap-2 p-1 rounded-full bg-secondary">
                             <Button onClick={() => setBillingCycle("monthly")} variant={billingCycle === 'monthly' ? 'default' : 'ghost'} size="sm" className="rounded-full">{t("mensual", language)}</Button>
                             <Button onClick={() => setBillingCycle("yearly")} variant={billingCycle === 'yearly' ? 'default' : 'ghost'} size="sm" className="rounded-full">{t("semestral", language)}</Button>
                             <Button onClick={() => setBillingCycle("yearly")} variant={billingCycle === 'yearly' ? 'default' : 'ghost'} size="sm" className="rounded-full">{t("anual", language)}</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
                        {PLANS(language).map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col items-start justify-between w-full h-full p-6 bg-background border border-border rounded-xl shadow-sm relative overflow-hidden"
                            >
                                {plan.badge && (
                                    <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                                        {plan.badge}
                                    </span>
                                )}
                                <div className="w-full">
                                    <h3 className="text-2xl font-bold font-heading">
                                        {plan.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2">
                                        {plan.desc}
                                    </p>
                                    <div className="flex items-end gap-1 mt-6">
                                        <p className="text-5xl font-bold">
                                            {billingCycle === "monthly" ? `$${plan.monthlyPrice}` : `$${plan.yearlyPrice}`}
                                        </p>
                                        <p className="text-muted-foreground text-sm font-medium">
                                            {billingCycle === "monthly" ? t("alMes", language) : t("alAno", language)}
                                        </p>
                                    </div>
                                    <Button asChild className="w-full mt-6">
                                        <Link href={plan.link}>
                                            {plan.buttonText}
                                        </Link>
                                    </Button>
                                    <ul className="flex flex-col items-start gap-4 mt-8 w-full">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3 w-full text-sm">
                                                <CheckIcon className="w-5 h-5 text-primary" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Wrapper>
        </section>
    )
};

export default Pricing;
