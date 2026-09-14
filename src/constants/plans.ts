import plansData from "../../content/site/plans.json";

type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS = (language: "es" | "en"): PLAN[] =>
    plansData.items.map((item) => ({
        id: item.id,
        title: language === "es" ? item.title_es : item.title_en,
        desc: language === "es" ? item.desc_es : item.desc_en,
        monthlyPrice: item.monthlyPrice,
        yearlyPrice: item.yearlyPrice,
        badge: language === "es" ? (item.badge_es || undefined) : (item.badge_en || undefined),
        buttonText: language === "es" ? item.buttonText_es : item.buttonText_en,
        features: language === "es" ? item.features_es : item.features_en,
        link: item.link,
    }));
