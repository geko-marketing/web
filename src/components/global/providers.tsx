"use client";

import React, { useEffect, useState, type ComponentType } from "react"
import { LanguageProvider } from "@/context/language-context";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
    children: React.ReactNode;
}

// const client = new QueryClient();

const Providers = ({ children }: Props) => {
    const [enableSpark, setEnableSpark] = useState(false);
    const [SparkComponent, setSparkComponent] = useState<ComponentType<{
        children: React.ReactNode;
        sparkColor: string;
        sparkSize: number;
        sparkRadius: number;
        sparkCount: number;
        duration: number;
    }> | null>(null);

    useEffect(() => {
        const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setEnableSpark(supportsFinePointer && !prefersReducedMotion);
    }, []);

    useEffect(() => {
        if (!enableSpark) {
            return;
        }

        let mounted = true;

        import("@/components/ClickSpark").then((module) => {
            if (mounted) {
                setSparkComponent(() => module.default);
            }
        });

        return () => {
            mounted = false;
        };
    }, [enableSpark]);

    if (!enableSpark || !SparkComponent) {
        return <LanguageProvider>{children}</LanguageProvider>;
    }

    return (
        <SparkComponent sparkColor="#7C3BED" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </SparkComponent>
        // <QueryClientProvider client={client}>
        // </>
        // </QueryClientProvider>
    );
};

export default Providers
