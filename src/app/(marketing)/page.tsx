import { Background, Companies, Container, Hero, Wrapper } from "@/components";
import dynamic from "next/dynamic";
import { Spotlight } from "@/components/ui/spotlight";
import { generateMetadata } from "@/functions";

export const metadata = generateMetadata({
    title: "Geko Marketing | Agencia de Marketing Digital",
    description: "Transformamos seguidores en clientes con estrategia digital, redes sociales, branding y webs de alto rendimiento.",
    canonicalPath: "/",
});

const Connect = dynamic(() => import("@/components/marketing/connect"));
const Features = dynamic(() => import("@/components/marketing/features"));
const Perks = dynamic(() => import("@/components/marketing/perks"));
const Pricing = dynamic(() => import("@/components/marketing/pricing"));
const Reviews = dynamic(() => import("@/components/marketing/reviews"));
const LazyFaqs = dynamic(() => import("@/components/marketing/faqs"));
const CTA = dynamic(() => import("@/components/marketing/cta"));

const HomePage = () => {
    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                    <Hero />
                </Container>
                <Container className="py-8 lg:py-20">
                    <Companies />
                </Container>
                <Connect />
                <Features />
                <Perks />
                <Pricing />
                <Reviews />
                <LazyFaqs />
                <CTA />
            </Wrapper>
        </Background>
    )
};

export default HomePage
