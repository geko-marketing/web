import { Button } from "@/components/ui/button";
import Link from "next/link";
import Wrapper from "../global/wrapper";
import Container from "../global/container";

interface ServiceCTAProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

export const ServiceCTA = ({
    title,
    description,
    buttonText = "Comenzar Ahora",
    buttonLink = "/contact"
}: ServiceCTAProps) => {
    return (
        <Wrapper className="py-16 md:py-24">
            <Container>
                <div className="relative rounded-3xl overflow-hidden border border-foreground/10 bg-gradient-to-r from-purple-600/10 via-violet-600/10 to-purple-600/10 p-8 md:p-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-violet-600/5" />
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            {title}
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground mb-8">
                            {description}
                        </p>
                        <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
                            <Link href={buttonLink}>
                                {buttonText}
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};
