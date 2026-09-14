import {
    ZapIcon,
    ChartSplineIcon,
    LifeBuoyIcon,
    PaletteIcon,
    ShieldCheckIcon,
    WaypointsIcon,
    BrainCircuitIcon,
    SparklesIcon,
    type LucideIcon,
} from "lucide-react";
import perksData from "../../content/site/perks.json";

const ICON_MAP: Record<string, LucideIcon> = {
    ZapIcon,
    ChartSplineIcon,
    LifeBuoyIcon,
    PaletteIcon,
    ShieldCheckIcon,
    WaypointsIcon,
    BrainCircuitIcon,
    SparklesIcon,
};

export const PERKS = (language: "es" | "en") =>
    perksData.items.map((item) => ({
        icon: ICON_MAP[item.icon] ?? ZapIcon,
        title: language === "es" ? item.title_es : item.title_en,
        description: language === "es" ? item.description_es : item.description_en,
    }));
