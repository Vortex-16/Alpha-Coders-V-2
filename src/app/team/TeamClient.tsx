"use client";

import TeamSection from "@/components/team-section";
import dynamic from 'next/dynamic';

const FluidBackground = dynamic(() => import('@/components/three/fluid-background'), { ssr: false });
const Dock = dynamic(() => import('@/components/ui/mac-dock').then(mod => mod.Dock), { ssr: false });

export default function TeamClient() {
    return (
        <div className="min-h-screen text-foreground overflow-hidden relative">
            <FluidBackground />
            <Dock />

            <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col items-center">
                <div className="text-center mb-12">
                    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4">
                        Our Leaders
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-neutral-900 dark:text-white">
                        Core Team
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                        The driving force behind Alpha Coders, dedicated to fostering a vibrant and collaborative community.
                    </p>
                </div>
                <TeamSection />
            </div>
        </div>
    );
}
