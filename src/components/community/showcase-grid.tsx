"use client";

import Image from "next/image";
import { useRef, useMemo, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ShieldCheck, Crown, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { members } from "@/data/team";

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseGrid() {
    const container = useRef<HTMLDivElement>(null);
    const [showAll, setShowAll] = useState(false);

    // Custom ordering for Core Team
    const coreTeamOrder = ["Dealer-09", "Vortex-16", "PixelPioneer404", "Rouvik"];

    // Sort: Custom order for Owners, then alphabetically for others
    const sortedMembers = useMemo(() => {
        return [...members].sort((a, b) => {
            const aIsOwner = a.role === "Owner";
            const bIsOwner = b.role === "Owner";

            if (aIsOwner && bIsOwner) {
                const aIndex = coreTeamOrder.indexOf(a.login);
                const bIndex = coreTeamOrder.indexOf(b.login);
                return aIndex - bIndex;
            }

            if (aIsOwner && !bIsOwner) return -1;
            if (!aIsOwner && bIsOwner) return 1;

            const aName = (a.name || a.login).toLowerCase();
            const bName = (b.name || b.login).toLowerCase();
            return aName.localeCompare(bName);
        });
    }, []);

    const coreTeamMembers = sortedMembers.filter(m => m.role === "Owner");
    const otherMembers = sortedMembers.filter(m => m.role !== "Owner");
    const displayedOthers = showAll ? otherMembers : otherMembers.slice(0, 6);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".member-card");

        cards.forEach((card, i) => {
            gsap.fromTo(card,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        once: true,
                    },
                    clearProps: "all",
                }
            );
        });
    }, { scope: container, dependencies: [showAll] });

    return (
        <div ref={container} className="space-y-16">
            {/* Core Team Section */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                        <Crown size={14} /> Founding Team
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {coreTeamMembers.map((member, i) => (
                        <div
                            key={member.login}
                            className="member-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-6 flex items-center gap-5">
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="relative h-20 w-20 rounded-2xl overflow-hidden ring-2 ring-emerald-500/30 group-hover:ring-emerald-500/60 transition-all duration-300 shadow-xl">
                                        <Image
                                            src={`https://github.com/${member.login}.png`}
                                            alt={member.name || member.login}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1.5 rounded-lg shadow-lg">
                                        <Crown size={12} />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white truncate">
                                            {member.name || member.login}
                                        </h3>
                                        {member.tfa_enabled && (
                                            <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                                        )}
                                    </div>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                                        @{member.login}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                            Core Team
                                        </span>
                                        <Link
                                            href={`https://github.com/${member.login}`}
                                            target="_blank"
                                            className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-emerald-500 transition-colors"
                                        >
                                            <Github size={12} />
                                            <ExternalLink size={10} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Community Members Section */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-500/20 to-transparent" />
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                        Community Members
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-500/20 to-transparent" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {displayedOthers.map((member) => (
                        <Link
                            key={member.login}
                            href={`https://github.com/${member.login}`}
                            target="_blank"
                            className="member-card group relative flex flex-col items-center p-4 rounded-2xl bg-neutral-50/50 dark:bg-white/[0.03] border border-neutral-200/50 dark:border-white/5 hover:border-emerald-500/40 hover:bg-white dark:hover:bg-white/[0.06] transition-all duration-300"
                        >
                            <div className="relative h-14 w-14 rounded-full overflow-hidden mb-3 ring-2 ring-transparent group-hover:ring-emerald-500/30 transition-all duration-300 grayscale group-hover:grayscale-0">
                                <Image
                                    src={`https://github.com/${member.login}.png`}
                                    alt={member.name || member.login}
                                    fill
                                    className="object-cover"
                                    sizes="56px"
                                />
                            </div>
                            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 truncate max-w-full text-center group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                {member.name || member.login}
                            </span>
                            <span className="text-[10px] text-neutral-400 truncate max-w-full">
                                @{member.login}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Show More/Less Button */}
                {otherMembers.length > 6 && (
                    <div className="flex justify-center mt-8">
                        <Button
                            onClick={() => setShowAll(!showAll)}
                            variant="outline"
                            className="group h-11 px-6 rounded-full border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 bg-white/80 dark:bg-white/5 backdrop-blur-sm transition-all duration-300"
                        >
                            <span className="flex items-center gap-2 font-medium text-sm">
                                {showAll ? (
                                    <>Show Less <ChevronUp size={16} /></>
                                ) : (
                                    <>View All {otherMembers.length} Members <ChevronDown size={16} /></>
                                )}
                            </span>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
