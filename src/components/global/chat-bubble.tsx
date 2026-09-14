"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { ChatModal } from "./chat-modal";

const ChatBubble = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {return null;}

    return (
        <>
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen((prev) => !prev)}
                className="fixed bottom-5 right-5 w-14 h-14 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all z-40 hover:shadow-purple-500/50"
                title="Chat con EKO"
            >
                <MessageCircle className="text-white w-6 h-6" />
            </motion.button>
            {mounted && <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    );
};

export default ChatBubble;
