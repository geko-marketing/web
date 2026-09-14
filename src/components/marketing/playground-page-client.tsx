"use client";

import { useState } from "react";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/animated-beam-demo";
import { AnimatedListDemo } from "@/components/ui/animated-list-demo";
import { OrbitingCirclesDemo } from "@/components/ui/orbiting-circles-demo";
import { BorderBeam } from "@/components/ui/border-beam";
import MagicCard from "@/components/ui/magic-card";
import NumberTicker from "@/components/ui/number-ticker";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BlurText } from "@/components/ui/blur-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Marquee from "@/components/ui/marquee";
import { Ripple } from "@/components/ui/ripple";
import { DotPattern } from "@/components/ui/dot-pattern";
import RetroGrid from "@/components/ui/retro-grid";
import { Particles } from "@/components/ui/particles";
import { HeroParallaxDemo } from "@/components/ui/hero-parallax-demo";
import { cn } from "@/functions";
import { ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";

const testimonials = [
    { name: "John Doe", role: "CEO at TechCorp", text: "Amazing product!" },
    { name: "Jane Smith", role: "Designer", text: "Beautiful and functional" },
    { name: "Mike Johnson", role: "Developer", text: "Easy to integrate" },
    { name: "Sarah Williams", role: "Marketing", text: "Incredible results" },
];

const PlaygroundPageClient = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="relative w-full min-h-screen">
            <section className="relative">
                <HeroParallaxDemo />
            </section>

            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <Particles
                    className="absolute inset-0"
                    quantity={100}
                    ease={80}
                    color="#8678f9"
                    refresh
                />
                <Container delay={0.1} className="relative z-10 text-center">
                    <Badge className="mb-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        UI Playground
                    </Badge>
                    <BlurText
                        word="Explora Componentes Increíbles"
                        className="text-5xl md:text-7xl font-bold mb-6"
                    />
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Una colección de los mejores componentes
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">
                            Comenzar
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Ver Documentación
                        </Button>
                    </div>
                </Container>
            </section>

            <section className="relative py-20 overflow-hidden">
                <RetroGrid className="absolute inset-0" />
                <Wrapper className="relative z-10">
                    <Container delay={0.2} className="text-center mb-12">
                        <AnimatedGradientText className="text-sm mb-4">
                            🎨 Animated Beams
                        </AnimatedGradientText>
                        <h2 className="text-4xl font-bold mb-4">Conexiones Animadas</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Visualiza conexiones y flujos de datos de manera elegante
                        </p>
                    </Container>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="relative overflow-hidden">
                            <BorderBeam />
                            <CardContent className="p-8">
                                <AnimatedBeamMultipleOutputDemo />
                            </CardContent>
                        </Card>
                        <Card className="relative overflow-hidden">
                            <BorderBeam />
                            <CardContent className="p-8">
                                <AnimatedListDemo />
                            </CardContent>
                        </Card>
                    </div>
                </Wrapper>
            </section>

            <section className="relative py-20">
                <DotPattern className="absolute inset-0 opacity-50" />
                <Wrapper className="relative z-10">
                    <Container delay={0.3} className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Círculos Orbitales</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Elementos que giran alrededor de un centro con animaciones suaves
                        </p>
                    </Container>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-gradient-to-br from-background to-accent/20">
                            <CardContent className="p-0 h-[500px]">
                                <OrbitingCirclesDemo />
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-accent/20 to-background relative overflow-hidden">
                            <BorderBeam />
                            <CardContent className="p-0 h-[500px] flex items-center justify-center">
                                <AnimatedGradientText className="text-2xl">
                                    ✨ Componentes Increíbles
                                </AnimatedGradientText>
                            </CardContent>
                        </Card>
                    </div>
                </Wrapper>
            </section>

            <section className="relative py-20">
                <Wrapper>
                    <Container delay={0.4} className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Magic Cards</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Tarjetas con efectos hover mágicos y gradientes dinámicos
                        </p>
                    </Container>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Zap, title: "Velocidad", value: 99, color: "from-blue-500 to-cyan-500" },
                            { icon: Rocket, title: "Rendimiento", value: 156, color: "from-purple-500 to-pink-500" },
                            { icon: Sparkles, title: "Calidad", value: 234, color: "from-orange-500 to-red-500" },
                        ].map((item, index) => (
                            <MagicCard
                                key={index}
                                className="cursor-pointer h-full"
                                particles={hoveredCard === index}
                                count={30}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <Card className="h-full border-0 bg-transparent">
                                    <CardHeader>
                                        <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br", item.color, "flex items-center justify-center mb-4")}>
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription>Métricas en tiempo real</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-4xl font-bold">
                                            <NumberTicker value={item.value} />+
                                        </div>
                                    </CardContent>
                                </Card>
                            </MagicCard>
                        ))}
                    </div>
                </Wrapper>
            </section>

            <section className="relative py-20 overflow-hidden">
                <Ripple />
                <Wrapper className="relative z-10">
                    <Container delay={0.5} className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Testimonios en Movimiento</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Scroll infinito con testimonios y reseñas
                        </p>
                    </Container>
                    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="w-[300px] mx-4">
                                    <CardHeader>
                                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                                        <CardDescription>{testimonial.role}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm">{testimonial.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </Marquee>
                    </div>
                </Wrapper>
            </section>

            <section className="relative py-20">
                <Wrapper>
                    <Container delay={0.6} className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Elementos Interactivos</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Componentes con animaciones y efectos visuales impresionantes
                        </p>
                    </Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <BorderBeam size={250} duration={12} delay={9} />
                            <CardHeader>
                                <CardTitle>Border Beam</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Efectos de borde animados
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <CardHeader>
                                <CardTitle>Number Ticker</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-primary">
                                    <NumberTicker value={999} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <CardHeader>
                                <CardTitle>Gradient Text</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <AnimatedGradientText>
                                    ✨ Texto Animado
                                </AnimatedGradientText>
                            </CardContent>
                        </Card>
                        <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <CardHeader>
                                <CardTitle>Blur Effects</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <BlurText
                                    word="¡Efecto Blur!"
                                    className="text-2xl font-bold"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </Wrapper>
            </section>

            <section className="relative py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
                <Wrapper className="relative z-10">
                    <Container delay={0.7} className="text-center">
                        <Badge className="mb-4">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Comienza Ahora
                        </Badge>
                        <h2 className="text-5xl font-bold mb-6">
                            ¿Listo para crear algo increíble?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Utiliza estos componentes en tu próximo proyecto
                        </p>
                        <Button size="lg" className="text-lg px-8">
                            Descargar Componentes
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Container>
                </Wrapper>
            </section>
        </div>
    );
};

export default PlaygroundPageClient;
