import { Spotlight } from "@/components/ui/spotlight";
import Container from "../global/container";
import Wrapper from "../global/wrapper";

interface ServicePageHeaderProps {
    title: string;
    description: string;
    image?: React.ReactNode;
}

export const ServicePageHeader = ({ title, description, image }: ServicePageHeaderProps) => {
    return (
        <Wrapper className="py-16 md:py-24 relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="rgba(255, 255, 255, 0.5)"
            />
            <Container className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold !leading-tight">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                            {description}
                        </p>
                    </div>
                    {image && (
                        <div className="hidden md:flex justify-center">
                            {image}
                        </div>
                    )}
                </div>
            </Container>
        </Wrapper>
    );
};
