"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import StatsSection from "@/components/community/stats-section";
import ShowcaseGrid from "@/components/community/showcase-grid";
import EventsList from "@/components/community/events-list";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Github } from "lucide-react";
import Link from "next/link";
import GsapMagnetic from "@/components/gsap-magnetic";
import dynamic from 'next/dynamic';

const FluidBackground = dynamic(() => import('@/components/three/fluid-background'), { ssr: false });
const Dock = dynamic(() => import('@/components/ui/mac-dock').then(mod => mod.Dock), { ssr: false });

export default function CommunityClient() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".community-hero-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".community-hero-desc", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6")
            .from(".community-hero-actions", {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6");

    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen text-foreground overflow-hidden">
            <FluidBackground />
            <Dock />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden z-10">

                <div className="container relative z-10 px-4 md:px-6 text-center">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-white/20 bg-white/50 dark:bg-white/10 backdrop-blur-md text-sm font-medium text-neutral-700 dark:text-white shadow-lg community-hero-badge">
                        The Hub for 200+ Developers
                    </div>
                    <h1 className="community-hero-title text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-white drop-shadow-2xl mb-6">
                        India's Next Gen<br />Coders
                    </h1>
                    <p className="community-hero-desc text-xl text-neutral-600 dark:text-emerald-100/80 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                        A small, high-impact group building big things. Connect with the best upcoming talent in the region.
                    </p>

                    <div className="community-hero-actions flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <GsapMagnetic>
                            <div className="inline-block">
                                <Button size="lg" className="h-12 px-8 rounded-full text-base bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-gray-200 border-0 shadow-xl">
                                    Join Discussion <MessageSquare className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </GsapMagnetic>
                        <GsapMagnetic>
                            <div className="inline-block">
                                <Button variant="outline" size="lg" className="h-12 px-8 rounded-full text-base bg-white/50 dark:bg-white/5 border-neutral-200 dark:border-white/20 hover:bg-white/80 dark:hover:bg-white/10 text-neutral-900 dark:text-white backdrop-blur-md">
                                    <Link href="https://github.com/Alpha4Coders" className="flex items-center">
                                        GitHub Org <Github className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </GsapMagnetic>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="relative z-10 container mx-auto">
                <StatsSection />
            </div>

            {/* Main Content Grid */}
            <section className="container mx-auto px-4 md:px-6 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Showcase */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="mb-4">
                            <h2 className="text-3xl font-bold tracking-tight mb-2 text-neutral-900 dark:text-white">Our Community</h2>
                            <p className="text-neutral-500 dark:text-neutral-400">Meet the passionate developers building the future.</p>
                        </div>
                        <ShowcaseGrid />
                    </div>

                    {/* Right Column: Events & Updates */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white">Upcoming Events</h2>
                            <EventsList />
                        </div>

                        <div className="p-6 rounded-2xl border border-neutral-200 dark:border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur-xl shadow-2xl">
                            <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">Join the Core Team</h3>
                            <p className="text-neutral-600 dark:text-emerald-200/60 mb-4">
                                We are looking for maintainers and community managers for our growing India chapter.
                            </p>
                            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border-0" variant="secondary">
                                <Link href="mailto:alpha4coders@gmail.com?subject=Application to Join Alpha Coders Core Team">Apply Now</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer CTA & Socials */}
            <section className="py-24 border-t border-neutral-200 dark:border-white/10 relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-emerald-50/50 dark:bg-emerald-900/10" />
                <div className="container relative mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-neutral-900 dark:text-white">Ready to make an impact?</h2>
                    <p className="text-xl text-neutral-600 dark:text-emerald-200/60 mb-8 max-w-2xl mx-auto">
                        Join 200+ other developers in the community.
                    </p>
                    <GsapMagnetic>
                        <div className="inline-block">
                            <Button size="xl" className="h-14 px-8 rounded-full text-lg shadow-2xl bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-gray-200" asChild>
                                <Link href="https://discord.gg/5p4wkAykV" target="_blank">
                                    Join Discord <ArrowRight className="ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </GsapMagnetic>

                    <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-white/5">
                        <p className="text-sm text-neutral-500 mb-6 uppercase tracking-widest font-semibold">Connect with us</p>
                        <div className="flex justify-center gap-8">
                            <Link href="https://www.instagram.com/alpha.coder.s/" target="_blank" className="text-neutral-400 hover:text-pink-500 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </Link>
                            <Link href="https://x.com/Alpha4Coders" target="_blank" className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                                <span className="sr-only">X (Twitter)</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </Link>
                            <Link href="https://www.linkedin.com/company/alpha4coders" target="_blank" className="text-neutral-400 hover:text-emerald-600 transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </Link>
                            <Link href="https://discord.gg/5p4wkAykV" target="_blank" className="text-neutral-400 hover:text-indigo-500 transition-colors">
                                <span className="sr-only">Discord</span>
                                <MessageSquare className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
