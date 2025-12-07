"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Founding Members", value: 45, suffix: "+" },
    { label: "Based in", value: 0, text: "India", suffix: "" },
    { label: "Lines of Code", value: 50000, suffix: "+" },
    { label: "Projects", value: 20, suffix: "+" },
];

export default function StatsSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".stat-item", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 50,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
        });

        stats.forEach((stat, i) => {
            // Skip numeric animation for "Based in" which is text
            if (stat.text) {
                const el = document.getElementById(`stat-${i}`);
                if (el) el.innerText = stat.text;
                return;
            }

            const counter = { val: 0 };
            gsap.to(counter, {
                val: stat.value,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                onUpdate: () => {
                    const el = document.getElementById(`stat-${i}`);
                    if (el) {
                        el.innerText = Math.round(counter.val).toLocaleString() + stat.suffix;
                    }
                },
            });
        });
    }, { scope: container });

    return (
        <div ref={container} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl px-8 shadow-sm">
            {stats.map((stat, i) => (
                <div key={i} className="stat-item text-center space-y-2">
                    <div id={`stat-${i}`} className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight flex justify-center items-center gap-2">
                        {/* Render Icon if available (for India flag) */}
                        {stat.text ? stat.text : "0"}
                    </div>
                    <div className="text-sm font-medium text-neutral-500 dark:text-blue-200/60 uppercase tracking-widest">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
