"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const events = [
    {
        title: "Apertre 3.0 Mentee Registration",
        date: "45 Days • Time to Deployment",
        location: "Open Source Program",
        desc: "🚀 Transform your skills and build your open-source portfolio with guidance from top-tier mentors. Your journey to brilliance starts now!",
        link: "https://apertre.resourcio.in/register?role=mentee&ref=34KE2E"
    },
    {
        title: "Learning Resources",
        date: "Ongoing",
        location: "Discord Community",
        desc: "Curated paths for React, Next.js, and Three.js available in our channels.",
        link: "https://discord.gg/VnQubyhUwh"
    },
    {
        title: "Open Source Sat",
        date: "Every Saturday",
        location: "Online / Discord",
        desc: "Weekly contribution jam. Pick an issue, fix it, merge it.",
        link: "https://discord.gg/VnQubyhUwh"
    }
];

export default function EventsList() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".event-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            x: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, { scope: container });

    return (
        <div ref={container} className="space-y-6">
            {events.map((event, i) => (
                <div key={i} className="event-card group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors backdrop-blur-sm shadow-sm hover:shadow-md">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 w-20 h-20">
                        <Calendar className="h-6 w-6 mb-1" />
                        <span className="text-xs font-bold text-center leading-tight">{event.date.split("•")[0]}</span>
                    </div>

                    <div className="flex-grow space-y-2">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">{event.title}</h3>
                            <Button size="icon" variant="ghost" className="text-neutral-400 dark:text-white/50 hover:text-black dark:hover:text-white" asChild>
                                <Link href={event.link}><ExternalLink className="h-5 w-5" /></Link>
                            </Button>
                        </div>

                        <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                            <MapPin className="h-4 w-4 mr-1 text-emerald-500" />
                            {event.location}
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {event.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
