import { defineConfig } from "tinacms";

export default defineConfig({
    branch:
        process.env.GITHUB_BRANCH ||
        process.env.VERCEL_GIT_COMMIT_REF ||
        process.env.HEAD ||
        "main",
    clientId: "52657ecf-c469-44c7-aa00-c410abeb9515",
    token: process.env.TINA_TOKEN,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "images",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            // ─── REVIEWS ───────────────────────────────────────────────
            {
                name: "reviews",
                label: "Reviews / Testimonios",
                path: "content/site",
                match: { include: "reviews" },
                format: "json",
                ui: { allowedActions: { create: false, delete: false } },
                fields: [
                    {
                        name: "items",
                        type: "object",
                        label: "Testimonios",
                        list: true,
                        ui: {
                            itemProps: (item: { name?: string }) => ({
                                label: item?.name ?? "Testimonio",
                            }),
                        },
                        fields: [
                            {
                                name: "name",
                                type: "string",
                                label: "Nombre",
                                isTitle: true,
                                required: true,
                            },
                            {
                                name: "username",
                                type: "string",
                                label: "Usuario (@handle)",
                                required: true,
                            },
                            {
                                name: "review",
                                type: "string",
                                label: "Testimonio",
                                required: true,
                                ui: { component: "textarea" },
                            },
                            {
                                name: "img",
                                type: "image",
                                label: "Avatar",
                            },
                        ],
                    },
                ],
            },

            // ─── PLANS ─────────────────────────────────────────────────
            {
                name: "plans",
                label: "Planes / Pricing",
                path: "content/site",
                match: { include: "plans" },
                format: "json",
                ui: { allowedActions: { create: false, delete: false } },
                fields: [
                    {
                        name: "items",
                        type: "object",
                        label: "Planes",
                        list: true,
                        ui: {
                            itemProps: (item: { id?: string }) => ({
                                label: item?.id ?? "Plan",
                            }),
                        },
                        fields: [
                            {
                                name: "id",
                                type: "string",
                                label: "ID (SILVER / GOLDEN / PLATINUM)",
                                required: true,
                            },
                            { name: "title_es", type: "string", label: "Título (ES)" },
                            { name: "title_en", type: "string", label: "Title (EN)" },
                            {
                                name: "desc_es",
                                type: "string",
                                label: "Descripción (ES)",
                                ui: { component: "textarea" },
                            },
                            {
                                name: "desc_en",
                                type: "string",
                                label: "Description (EN)",
                                ui: { component: "textarea" },
                            },
                            {
                                name: "monthlyPrice",
                                type: "number",
                                label: "Precio mensual (€)",
                            },
                            {
                                name: "yearlyPrice",
                                type: "number",
                                label: "Precio anual (€)",
                            },
                            {
                                name: "badge_es",
                                type: "string",
                                label: "Badge (ES) — dejar vacío si no aplica",
                            },
                            {
                                name: "badge_en",
                                type: "string",
                                label: "Badge (EN) — leave empty if none",
                            },
                            {
                                name: "buttonText_es",
                                type: "string",
                                label: "Texto del botón (ES)",
                            },
                            {
                                name: "buttonText_en",
                                type: "string",
                                label: "Button text (EN)",
                            },
                            {
                                name: "features_es",
                                type: "string",
                                label: "Características (ES)",
                                list: true,
                            },
                            {
                                name: "features_en",
                                type: "string",
                                label: "Features (EN)",
                                list: true,
                            },
                            {
                                name: "link",
                                type: "string",
                                label: "Enlace de pago (Stripe URL)",
                            },
                        ],
                    },
                ],
            },

            // ─── PERKS ─────────────────────────────────────────────────
            {
                name: "perks",
                label: "Beneficios / Perks",
                path: "content/site",
                match: { include: "perks" },
                format: "json",
                ui: { allowedActions: { create: false, delete: false } },
                fields: [
                    {
                        name: "items",
                        type: "object",
                        label: "Beneficios",
                        list: true,
                        ui: {
                            itemProps: (item: { title_es?: string }) => ({
                                label: item?.title_es ?? "Beneficio",
                            }),
                        },
                        fields: [
                            {
                                name: "icon",
                                type: "string",
                                label: "Icono (lucide-react)",
                                options: [
                                    "ZapIcon",
                                    "ChartSplineIcon",
                                    "LifeBuoyIcon",
                                    "PaletteIcon",
                                    "ShieldCheckIcon",
                                    "WaypointsIcon",
                                    "BrainCircuitIcon",
                                    "SparklesIcon",
                                ],
                            },
                            { name: "title_es", type: "string", label: "Título (ES)" },
                            { name: "title_en", type: "string", label: "Title (EN)" },
                            {
                                name: "description_es",
                                type: "string",
                                label: "Descripción (ES)",
                                ui: { component: "textarea" },
                            },
                            {
                                name: "description_en",
                                type: "string",
                                label: "Description (EN)",
                                ui: { component: "textarea" },
                            },
                        ],
                    },
                ],
            },
        ],
    },
});
