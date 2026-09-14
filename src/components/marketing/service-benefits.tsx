import Wrapper from "../global/wrapper";
import Container from "../global/container";

interface Benefit {
    title: string;
    description: string;
}

interface ServiceBenefitsProps {
    benefits: Benefit[];
    title?: string;
}

export const ServiceBenefits = ({ benefits, title }: ServiceBenefitsProps) => {
    return (
        <Wrapper className="py-16 md:py-24 bg-neutral-50/[.03]">
            <Container>
                {title && (
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            {title}
                        </h2>
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex gap-4 md:gap-6 p-6 md:p-8 rounded-xl border border-foreground/5 hover:border-foreground/10 transition-colors"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-violet-600/20 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-purple-500" />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-lg mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Wrapper>
    );
};
