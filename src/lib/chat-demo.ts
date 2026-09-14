type ChatMessage = {
    role: "user" | "assistant";
    content: string;
};

type Intent =
    | "greeting"
    | "services"
    | "pricing"
    | "contact"
    | "timing"
    | "process"
    | "integrations"
    | "support"
    | "faq"
    | "fallback";

const normalize = (value: string) =>
    value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

const includesAny = (text: string, words: string[]) => words.some((word) => text.includes(word));

const intentKeywords: Record<Exclude<Intent, "fallback">, string[]> = {
    greeting: ["hola", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey", "hello"],
    pricing: ["precio", "precios", "coste", "costo", "tarifa", "tarifas", "plan", "planes", "silver", "golden", "platinum"],
    services: ["servicio", "servicios", "redes", "social media", "web", "pagina", "pagina web", "marca", "branding"],
    contact: ["contacto", "contactar", "llamar", "whatsapp", "email", "correo", "reunion", "demo", "asesoria"],
    timing: ["tiempo", "cuanto tarda", "resultados", "cuando vere", "plazo", "meses"],
    process: ["proceso", "como trabajan", "como funciona", "metodo", "fases"],
    integrations: ["integracion", "integraciones", "herramientas", "plataformas", "conectar"],
    support: ["soporte", "ayuda", "atencion", "24/7", "disponible"],
    faq: ["faq", "pregunta", "duda", "dudas", "que incluye", "incluye"],
};

const pricingWords = intentKeywords.pricing;

const answers: Record<Intent, string> = {
    greeting:
        "¡Hola! Soy EKO 👋 Te puedo ayudar con servicios, planes (Silver/Golden/Platinum), tiempos estimados, proceso de trabajo, integraciones y cómo contactar al equipo.",
    services:
        "En Geko Marketing trabajamos sobre todo en 3 líneas: 1) Gestión de redes sociales, 2) Impulso de marca y estrategia, 3) Creación de páginas web. También incluimos contenido, analítica, optimización e integraciones según el plan.",
    pricing:
        "Tenemos 3 planes base: Silver, Golden y Platinum, además de opciones personalizadas. Si me dices tu tipo de negocio (sector + objetivo), te recomiendo el plan más adecuado y qué incluiría.",
    contact:
        "Perfecto. Para avanzar rápido, lo ideal es una auditoría inicial gratuita: revisamos tu situación, objetivos y te proponemos un plan claro. Puedes usar el botón de contacto de la web para que el equipo te escriba.",
    timing:
        "Según el contenido de la web, normalmente se ven mejoras en imagen, engagement y posicionamiento durante los primeros meses, y el crecimiento orgánico sólido suele consolidarse entre 3 y 6 meses.",
    process:
        "El método de trabajo es: Diagnóstico → Estrategia → Creación → Optimización. Así cada acción se ajusta a resultados y se mejora con datos reales.",
    integrations:
        "Sí, la plataforma contempla integraciones con herramientas y redes para agilizar el flujo de trabajo. En los planes superiores se amplía el número de integraciones y automatizaciones.",
    support:
        "Sí, ofrecemos soporte continuo y en los planes superiores la atención es prioritaria. Si quieres, te ayudo a definir qué nivel de soporte necesitas según volumen de trabajo.",
    faq:
        "Te resumo FAQs clave: gestionamos Instagram/LinkedIn/Google My Business (y otras bajo solicitud), hay planes base + personalizados, y antes de empezar se recomienda una auditoría para ajustar estrategia y presupuesto.",
    fallback:
        "Buena pregunta. Puedo ayudarte mejor si me dices si buscas: servicios, precios/planes, tiempos de resultados, proceso de trabajo o contacto con el equipo.",
};

const intentPriority: Exclude<Intent, "fallback">[] = [
    "greeting",
    "pricing",
    "services",
    "contact",
    "timing",
    "process",
    "integrations",
    "support",
    "faq",
];

const classifyIntent = (text: string): Intent => {
    for (const intent of intentPriority) {
        if (includesAny(text, intentKeywords[intent])) {
            return intent;
        }
    }
    return "fallback";
};

const contextualAddOn = (input: string) => {
    const text = normalize(input);

    if (text.includes("silver")) {
        return "\n\nSi te interesa Silver: es una base ideal para empezar con estructura y consistencia.";
    }

    if (text.includes("golden")) {
        return "\n\nGolden suele encajar cuando ya quieres escalar con funciones avanzadas y más profundidad estratégica.";
    }

    if (text.includes("platinum") || text.includes("enterprise")) {
        return "\n\nPlatinum/Enterprise está pensado para necesidades más complejas, más volumen y soporte más dedicado.";
    }

    if (text.includes("instagram") || text.includes("linkedin") || text.includes("google")) {
        return "\n\nTrabajamos especialmente bien esas plataformas y adaptamos la estrategia al tipo de audiencia de cada una.";
    }

    return "";
};

export const getDemoChatResponse = (messages: ChatMessage[], rawInput: string) => {
    const input = normalize(rawInput);
    const intent = classifyIntent(input);
    const base = answers[intent];

    const lastUserMessages = messages
        .filter((message) => message.role === "user")
        .slice(-2)
        .map((message) => normalize(message.content));

    const wantsRecommendation = includesAny(input, ["recomienda", "recomendar", "cual me conviene", "que plan", "cuál plan", "aconsejas"]);
    const businessHints = includesAny(input, ["restaurante", "clinica", "tienda", "marca personal", "ecommerce", "inmobiliaria", "academia"]);

    if (wantsRecommendation || (intent === "pricing" && businessHints)) {
        return "Para recomendarte un plan con precisión, dime en una línea: sector, objetivo principal y presupuesto mensual aproximado. Con eso te propongo una opción concreta y el alcance recomendado.";
    }

    if (intent === "fallback" && lastUserMessages.some((message) => includesAny(message, pricingWords))) {
        return `${answers.pricing}\n\nSi quieres, te hago una recomendación directa en 3 preguntas.`;
    }

    return `${base}${contextualAddOn(rawInput)}`;
};
