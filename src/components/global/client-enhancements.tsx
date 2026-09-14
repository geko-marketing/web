"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChatBubble = dynamic(() => import("@/components/global/chat-bubble"), {
    ssr: false,
    loading: () => null,
});

const ClientEnhancements = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let timeoutId: number | null = null;
        let idleCallbackId: number | null = null;

        const loadEnhancements = () => {
            timeoutId = window.setTimeout(() => setIsReady(true), 1200);
        };

        if ("requestIdleCallback" in window) {
            idleCallbackId = (
                window as Window & {
                    requestIdleCallback: (callback: () => void) => number;
                }
            ).requestIdleCallback(loadEnhancements);
        } else {
            loadEnhancements();
        }

        return () => {
            if (idleCallbackId !== null && "cancelIdleCallback" in window) {
                (
                    window as Window & {
                        cancelIdleCallback: (id: number) => void;
                    }
                ).cancelIdleCallback(idleCallbackId);
            }
            if (timeoutId !== null) {
                window.clearTimeout(timeoutId);
            }
        };
    }, []);

    if (!isReady) {
        return null;
    }

    return <ChatBubble />;
};

export default ClientEnhancements;
