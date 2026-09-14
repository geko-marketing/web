"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/functions";
import { useClickOutside } from "@/hooks";
import { motion } from "framer-motion";
import { Box, CalendarClock, CircleHelp, CopyCheck, LineChart, Newspaper, UserCog, Layers3, Zap } from "lucide-react";
import Link from "next/link";
import React from 'react';
import { useLanguage } from "@/context/language-context";
import { t } from "@/translations";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {

    const ref = useClickOutside(() => setIsOpen(false));
    const { language } = useLanguage();

    const variants = {
        open: { opacity: 1, y: 20 },
        closed: { opacity: 0, y: 0 },
    };

    return (
        <nav
            ref={ref}
            id="mobile-menu"
            aria-label="Menú móvil"
            aria-hidden={!isOpen}
            className={cn(
                "fixed top-20 left-2 right-2 p-4 z-[110] bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl backdrop-saturate-150 rounded-xl border border-white/20 dark:border-white/10 shadow-xl shadow-black/10 pointer-events-auto",
                isOpen ? "flex" : "hidden"
            )}
            onClick={(e) => e.stopPropagation()}
        >
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                transition={{
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.5,
                }}
                className="w-full flex flex-col justify-start"
            >
                <ul className="flex flex-col items-start w-full space-y-3">
                    <li
                        onClick={() => setIsOpen(false)}
                        className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                    >
                        <Link href="/" className="flex items-center w-full text-start">
                            <UserCog className="w-4 h-4 mr-2" />
                            {t("inicio", language)}
                        </Link>
                    </li>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-transparent">
                            <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                                <span className="flex items-center">
                                    <CopyCheck className="w-4 h-4 mr-2" />
                                    {t("servicios", language)}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col items-start gap-1 mt-1">
                                <li
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                                >
                                    <Link href="/services" className="flex items-center w-full text-start">
                                        <Zap className="w-4 h-4 mr-2" />
                                        {t("paquetes", language)}
                                    </Link>
                                </li>
                                <li
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                                >
                                    <Link href="/services" className="flex items-center w-full text-start">
                                        <CalendarClock className="w-4 h-4 mr-2" />
                                        {t("gestionRedesSociales", language)}
                                    </Link>
                                </li>
                                <li
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                                >
                                    <Link href="/services" className="flex items-center w-full text-start">
                                        <LineChart className="w-4 h-4 mr-2" />
                                        {t("impulsoMarca", language)}
                                    </Link>
                                </li>
                                <li
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                                >
                                    <Link href="/services" className="flex items-center w-full text-start">
                                        <Box className="w-4 h-4 mr-2" />
                                        {t("creacionPaginasWeb", language)}
                                    </Link>
                                </li>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-2" className="border-transparent">
                            <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                                <span className="flex items-center">
                                    <Layers3 className="w-4 h-4 mr-2" />
                                    {t("nosotros", language)}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col items-start gap-1 mt-1">
                                <li
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                                >
                                    <Link href="/" className="flex items-center w-full text-start">
                                        <Newspaper className="w-4 h-4 mr-2" />
                                        {t("acercaDe", language)}
                                    </Link>
                                </li>
                                <li
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                                >
                                    <Link href="/" className="flex items-center w-full text-start">
                                        <CircleHelp className="w-4 h-4 mr-2" />
                                        {t("contacto", language)}
                                    </Link>
                                </li>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </ul>
            </motion.div>
        </nav>
    )
};

export default MobileMenu
