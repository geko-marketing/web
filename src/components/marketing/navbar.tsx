"use client";

import { ArrowRightIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from 'react';
import SmartImage from "../ui/smart-image";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";
import LanguageToggle from "../global/language-toggle";
import { useLanguage } from "@/context/language-context";
import { t } from "@/translations";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { language } = useLanguage();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);


    return (
        <div className="relative w-full h-full">
            <div className="z-[99] fixed pointer-events-none inset-x-0 h-[88px] bg-[rgba(10,10,10,0.5)] dark:bg-[rgba(10,10,10,0.5)] backdrop-blur-3xl [mask:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))] dark:[mask:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]"></div>

            <header className="fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform th h-12">
                <Wrapper className="backdrop-blur-2xl backdrop-saturate-150 rounded-xl lg:rounded-2xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 shadow-lg shadow-black/5 px- md:px-2 flex items-center justify-between">
                    <div className="flex items-center pl-1">
                        <Link href="/" className="flex items-center">
                            <SmartImage
                                src="/images/logo-white-geko.webp"
                                alt="Geko Marketing"
                                width={180}
                                height={60}
                                priority
                                sizes="180px"
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="items-center hidden lg:flex">
                        <Menu />
                    </div>
                    <div className="items-center flex gap-2 lg:gap-4">
                        <LanguageToggle />
                        <Button size="sm" variant="white" asChild className="hidden sm:flex">
                            <Link href="/services">
                                {t("contactar", language)}
                                <ArrowRightIcon className="w-4 h-4 ml-2 hidden lg:block" />
                            </Link>
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="lg:hidden p-2 w-8 h-8"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isOpen ? <XIcon className="w-4 h-4 duration-300" /> : <Icons.menu className="w-3.5 h-3.5 duration-300" />}
                        </Button>
                    </div>
                </Wrapper>
            </header>

            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        </div>
    )
};

export default Navbar
