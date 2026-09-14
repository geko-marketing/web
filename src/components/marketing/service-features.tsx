import Wrapper from "../global/wrapper";
import Container from "../global/container";

interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface ServiceFeaturesProps {
    features: Feature[];
    title?: string;
}

export const ServiceFeatures = ({ features, title }: ServiceFeaturesProps) => {
    return (
        <Wrapper className="py-16 md:py-24">
            <Container>
                {title && (
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            {title}
                        </h2>
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 md:p-8 rounded-2xl border border-foreground/10 bg-neutral-50/[.05] hover:bg-foreground/10 transition-all duration-300"
                        >
                            <div className="mb-4 text-foreground/80 group-hover:text-foreground transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-heading font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Wrapper>
    );
};
