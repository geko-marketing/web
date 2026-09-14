import PlaygroundPageClient from "@/components/marketing/playground-page-client";
import { generateMetadata } from "@/functions";

export const metadata = generateMetadata({
    title: "Playground de Componentes UI",
    description: "Entorno interno de demostración de componentes y animaciones de interfaz.",
    canonicalPath: "/playground",
    noIndex: true,
});

const PlaygroundPage = () => {
    return <PlaygroundPageClient />;
};

export default PlaygroundPage;
