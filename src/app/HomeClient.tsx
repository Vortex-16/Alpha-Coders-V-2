"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, BrainCircuit, Users } from 'lucide-react';
import ProjectsSection from '@/components/projects-section';
import TeamSection from '@/components/team-section';
import './custom-styles.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GsapMagnetic from '@/components/gsap-magnetic';
import dynamic from 'next/dynamic';

const FluidBackground = dynamic(() => import('@/components/three/fluid-background'), { ssr: false });
const Dock = dynamic(() => import('@/components/ui/mac-dock').then(mod => mod.Dock), { ssr: false });

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HomeClient() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Hero Animations
        tl.from(".hero-logo", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        })
            .from(".hero-badge", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.5")
            .from(".hero-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.5")
            .from(".hero-text", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8")
            .from(".hero-buttons", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.8");

        // Feature Cards ScrollTrigger
        gsap.utils.toArray<HTMLElement>(".feature-card").forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power3.out"
            });
        });

        // Sections ScrollTrigger
        gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
            gsap.from(section.children, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        });

    }, { scope: container });

    return (
        <div ref={container} className="flex flex-col overflow-hidden min-h-screen">
            <FluidBackground />
            <Dock />

            <section className="w-full py-20 md:py-32 lg:py-40 relative z-10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <div className="mx-auto max-w-4xl space-y-8">
                        <div className="hero-logo flex justify-center mb-8 relative">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full transform scale-150" />
                            <Image
                                src="/AlphaCoders.png"
                                alt="Alpha Coders Logo"
                                title="Alpha Coders - India's Next Gen Coders Community"
                                width={140}
                                height={140}
                                className="rounded-2xl shadow-2xl relative z-10 glass-card"
                                priority
                            />
                        </div>

                        <div className="hero-badge inline-block rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium border border-neutral-200 dark:border-white/20 text-neutral-900 dark:text-white shadow-lg">
                            Founding Members Phase • India 🇮🇳
                        </div>

                        <h1 className="hero-title space-y-2">
                            <span className="block text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-neutral-900 dark:text-white drop-shadow-2xl">
                                Code with Passion
                            </span>
                            <span className="block text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-emerald-600 dark:text-emerald-400/80">
                                Build the Future
                            </span>
                        </h1>

                        <p className="hero-text text-lg text-neutral-600 dark:text-emerald-100/80 md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            A tight-knit community of 200+ passionate developers from India. We are the next generation of open-source contributors.
                        </p>

                        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mt-10 items-center">
                            <GsapMagnetic>
                                <div className="inline-block">
                                    <Button asChild size="xl" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-emerald-500/50 transition-all bg-white text-black hover:bg-gray-100 border-none">
                                        <Link href="https://github.com/Alpha4Coders" target="_blank" rel="noopener noreferrer">
                                            Join the 200
                                        </Link>
                                    </Button>
                                </div>
                            </GsapMagnetic>

                            <GsapMagnetic>
                                <div className="inline-block">
                                    <Button asChild size="xl" variant="outline" className="h-14 px-8 text-lg rounded-full border border-neutral-200 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10 backdrop-blur-md text-neutral-900 dark:text-white">
                                        <Link href="/community">
                                            Meet Members
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </GsapMagnetic>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-24 md:py-32 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-6xl space-y-20">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900 dark:text-white">Why Join Alpha Coders?</h2>
                            <p className="text-neutral-600 dark:text-emerald-200/60 text-lg md:text-xl">
                                We are small, focused, and growing together.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {[
                                { icon: Zap, title: "Build Together", desc: "Work on real-world projects with a dedicated team of regular contributors." },
                                { icon: BrainCircuit, title: "Learn & Grow", desc: "Peer-to-peer learning with weekly sessions and hackathons." },
                                { icon: Users, title: "Network", desc: "Connect with the top 1% of emerging developer talent in India." }
                            ].map((feature, i) => (
                                <div key={i} className="feature-card group relative p-8 rounded-3xl bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 backdrop-blur-xl transition-all hover:-translate-y-2 duration-300">
                                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                        <div className="p-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300 ease-out">
                                            <feature.icon className="h-10 w-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{feature.title}</h3>
                                        <p className="text-neutral-600 dark:text-emerald-200/60 leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="py-24 md:py-32 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="reveal-section">
                        <ProjectsSection />
                    </div>
                </div>
            </section>

            <section id="team" className="py-24 md:py-32 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="reveal-section">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900 dark:text-white">Meet Our Leaders</h2>
                            <p className="mx-auto max-w-[700px] text-neutral-600 dark:text-emerald-200/60 md:text-xl/relaxed mt-4">
                                The core team driving innovation and community at Alpha Coders.
                            </p>
                        </div>
                        <TeamSection />
                        <div className="flex justify-center mt-12">
                            <Button asChild variant="outline" className="rounded-full px-8">
                                <Link href="/team">View Foundation Details</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 relative z-10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <div className="mx-auto max-w-3xl space-y-8">
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-neutral-900 dark:text-white">Ready to Join Us?</h2>
                        <p className="mx-auto max-w-2xl text-neutral-600 dark:text-emerald-200/60 text-lg md:text-xl">
                            We are looking for the next core member to join our journey.
                        </p>
                        <GsapMagnetic>
                            <div className="inline-block mt-4">
                                <Button asChild size="xl" className="h-16 px-10 text-xl rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 bg-white text-black hover:bg-gray-200">
                                    <Link href="https://discord.gg/VnQubyhUwh" target="_blank" rel="noopener noreferrer">
                                        Join Our Discord
                                        <ArrowRight className="ml-3 h-6 w-6" />
                                    </Link>
                                </Button>
                            </div>
                        </GsapMagnetic>
                    </div>
                </div>
            </section>
        </div>
    );
}
