import { t } from "@/translations";

export const FOOTER_LINKS = (language: "es" | "en") => [
    {
        title: t("producto", language),
        links: [
            { name: t("footerInicio", language), href: "/" },
            { name: t("footerCaracteristicas", language), href: "/" },
            { name: t("footerPrecios", language), href: "/" },
            { name: t("footerContacto", language), href: "/" },
            { name: t("descargar", language), href: "/" },
        ],
    },
    {
        title: t("footerRecursos", language),
        links: [
            { name: t("footerBlog", language), href: "/blog" },
            { name: t("centroAyuda", language), href: "/help-center" },
            { name: t("comunidad", language), href: "/community" },
            { name: t("guias", language), href: "/guides" },
        ],
    },
    {
        title: t("legal", language),
        links: [
            { name: t("privacidad", language), href: "/privacy" },
            { name: t("terminos", language), href: "/terms" },
            { name: t("cookies", language), href: "/cookies" },
        ],
    },
    {
        title: t("desarrolladores", language),
        links: [
            { name: t("documentacionAPI", language), href: "/api-docs" },
            { name: t("sdks", language), href: "/sdks" },
            { name: t("herramientas", language), href: "/tools" },
            { name: t("codigoAbierto", language), href: "/open-source" },
            { name: t("registroCambios", language), href: "/changelog" },
        ],
    },
];
