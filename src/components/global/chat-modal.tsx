"use client";

import { useState, useRef, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { getDemoChatResponse } from "@/lib/chat-demo";

interface Message {
    id: string;
    content: string;
    role: "user" | "assistant";
    timestamp: Date;
}

interface ChatModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ChatModal = ({ isOpen, onClose }: ChatModalProps) => {
    const dialogTitleId = useId();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            content: "¡Hola! Soy EKO, asistente de Geko Marketing. Para ayudarte de forma rápida y profesional, puedes escribir estas palabras clave: servicios, planes, precios, recomendación, proceso, tiempos, integraciones, soporte, FAQ y contacto. Si prefieres, también puedes escribir directamente tu objetivo de negocio y te guío paso a paso.",
            role: "assistant",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) {return;}

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) {return;}

        const userMessage: Message = {
            id: Date.now().toString(),
            content: input,
            role: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 550));

            const content = getDemoChatResponse(
                [...messages, userMessage].map((message) => ({
                    role: message.role,
                    content: message.content,
                })),
                userMessage.content
            );

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                content,
                role: "assistant",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            const errorText = error instanceof Error ? error.message : "Lo siento, ocurrió un error. Intenta de nuevo.";

            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: errorText,
                role: "assistant",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!mounted) {return null;}

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.7, y: 30 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-24 right-5 w-80 max-w-[calc(100vw-40px)] h-96 md:h-96 bg-neutral-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 flex flex-col z-50 overflow-hidden"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={dialogTitleId}
                    >
                        {/* Header */}
                        <div className="p-3 border-b border-purple-500/20 flex items-center justify-between bg-neutral-800/50">
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center animate-pulse">
                                    <span className="text-white font-bold text-xs">EK</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xs text-white" id={dialogTitleId}>EKO</h3>
                                    <p className="text-xs text-green-400">● En línea</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-1.5 hover:bg-red-500/20 rounded-lg transition cursor-pointer"
                                title="Cerrar chat"
                                aria-label="Cerrar chat"
                            >
                                <X className="w-5 h-5 text-red-400" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-hide" role="log" aria-live="polite">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex ${
                                        message.role === "user" ? "justify-end" : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed ${
                                            message.role === "user"
                                                ? "bg-purple-600 text-white rounded-br-none"
                                                : "bg-neutral-700 text-neutral-100 rounded-bl-none border border-neutral-600"
                                        }`}
                                    >
                                        {message.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-neutral-700 border border-neutral-600 px-4 py-2 rounded-lg rounded-bl-none">
                                        <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} className="h-1" />
                        </div>

                        {/* Input */}
                        <form
                            onSubmit={handleSendMessage}
                            className="p-2 border-t border-purple-500/20 flex gap-1.5 bg-neutral-800/30"
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Pregunta..."
                                disabled={isLoading}
                                className="flex-1 bg-neutral-700/50 border border-neutral-600/50 rounded-lg px-2 py-1.5 text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500 transition disabled:opacity-50"
                                autoFocus
                                aria-label="Escribe tu mensaje"
                                autoComplete="off"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="p-1.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition cursor-pointer"
                                title="Enviar mensaje"
                                aria-label="Enviar mensaje"
                            >
                                <Send className="w-3.5 h-3.5" />
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
