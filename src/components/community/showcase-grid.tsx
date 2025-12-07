"use client";

import Image from "next/image";
import { useRef, useMemo, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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

            // Both are owners - use custom order
            if (aIsOwner && bIsOwner) {
                const aIndex = coreTeamOrder.indexOf(a.login);
                const bIndex = coreTeamOrder.indexOf(b.login);
                return aIndex - bIndex;
            }

            // One is owner, one is not
            if (aIsOwner && !bIsOwner) return -1;
            if (!aIsOwner && bIsOwner) return 1;

            // Both are members - alphabetical by name or login
            const aName = (a.name || a.login).toLowerCase();
            const bName = (b.name || b.login).toLowerCase();
            return aName.localeCompare(bName);
        });
    }, []);

    // Filter to show only Core Team or all members
    const displayedMembers = showAll
        ? sortedMembers
        : sortedMembers.filter(m => m.role === "Owner");

    useGSAP(() => {
        gsap.from(".member-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 50,
            duration: 0.8,
            stagger: 0.05,
            ease: "power3.out",
        });
    }, { scope: container });

    // Refresh ScrollTrigger when list size changes to prevent glitches
    useGSAP(() => {
        ScrollTrigger.refresh();
    }, [showAll]);

    return (
        <div ref={container} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {displayedMembers.map((member, i) => (
                    <div key={i} className="member-card group relative p-6 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-md">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-white/20 group-hover:border-blue-500 transition-colors">
                            <Image
                                src={`https://github.com/${member.login}.png`}
                                alt={member.login}
                                fill
                                className="object-cover"
                            />
                        </div >

                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                                {member.name || member.login}
                            </h3>
                            <p className="text-xs text-neutral-500 truncate mb-2">@{member.login}</p>

                            <div className="flex gap-2">
                                {member.role === "Owner" ? (
                                    <Badge variant="default" className="text-[10px] px-2 py-0 h-5 bg-blue-600 hover:bg-blue-700 text-white border-0">
                                        Core Team
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="text-[10px] px-2 py-0 h-5 border-neutral-200 dark:border-white/20 text-neutral-600 dark:text-neutral-400">
                                        Member
                                    </Badge>
                                )}
                                {member.tfa_enabled && (
                                    <Badge variant="secondary" className="text-[10px] px-2 py-0 h-5 bg-green-500/10 text-green-600 dark:text-green-400 border-0 hidden sm:inline-flex">
                                        Verified
                                    </Badge>
                                )}
                            </div>
                        </div>

                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Link href={`https://github.com/${member.login}`} target="_blank" className="text-neutral-400 hover:text-black dark:hover:text-white">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div >
                ))}
            </div >

            {/* Show All / Show Less Button */}
            <div className="flex justify-center">
                <Button
                    onClick={() => setShowAll(!showAll)}
                    variant="outline"
                    className="border-neutral-200 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10"
                >
                    {showAll ? "Show Core Team Only" : `Show All ${members.length} Members`}
                </Button>
            </div>
        </div >
    );
}
