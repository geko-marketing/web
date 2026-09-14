"use client";

import { cn } from "@/functions";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
    className?: string;
    children: React.ReactNode;
    delay?: number;
    reverse?: boolean;
    simple?: boolean;
}

const Container = ({ children, className, delay = 0.2, reverse, simple }: Props) => {
    const prefersReducedMotion = useReducedMotion();

    const initialState = prefersReducedMotion
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: reverse ? -20 : 20 };

    const transition = prefersReducedMotion
        ? { duration: 0 }
        : { delay, duration: simple ? 0.2 : 0.4, type: simple ? "keyframes" : "spring", stiffness: simple && 100 };

    return (
        <motion.div
            className={cn("w-full h-full", className)}
            initial={initialState}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
        >
            {children}
        </motion.div>
    )
};

export default Container
