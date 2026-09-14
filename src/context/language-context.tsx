"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window === "undefined") {
            return "es";
        }

        const savedLanguage = localStorage.getItem("language") as Language | null;
        return savedLanguage ?? "es";
    });

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        return { language: "es" as Language, setLanguage: () => {} };
    }
    return context;
};
