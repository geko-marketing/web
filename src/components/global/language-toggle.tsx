"use client";

import { useLanguage } from "@/context/language-context";
import { Button } from "../ui/button";

const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            size="icon"
            variant="ghost"
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="p-2 w-8 h-8 text-xs font-bold"
            title={language === "es" ? "Cambiar a inglés" : "Change to Spanish"}
            aria-pressed={language === "es"}
            aria-label={language === "es" ? "Cambiar idioma a inglés" : "Change language to Spanish"}
        >
            {language === "es" ? "ES" : "EN"}
        </Button>
    );
};

export default LanguageToggle;
