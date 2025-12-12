"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MapPin, Sparkles, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

export default function EventPopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Show popup after a short delay for better UX
        const timer = setTimeout(() => {
            // Check if user has dismissed the popup in this session
            const dismissed = sessionStorage.getItem("techSprintDismissed");
            if (!dismissed) {
                setOpen(true);
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setOpen(false);
        sessionStorage.setItem("techSprintDismissed", "true");
    };

    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
            <DialogContent className="sm:max-w-md bg-gradient-to-br from-white via-white to-emerald-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-emerald-950 border-emerald-200 dark:border-emerald-800/50 overflow-hidden">
                {/* Animated background glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/30 dark:bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />

                {/* Live badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/30">
                        <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                        LIVE NOW
                    </span>
                </div>

                <DialogHeader className="pt-6 relative z-10">
                    <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-center bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                        🚀 Tech Sprint
                    </DialogTitle>
                    <DialogDescription className="text-center text-neutral-600 dark:text-neutral-300 pt-2">
                        GDG on Campus STCET Kolkata Hackathon
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 relative z-10">
                    {/* Event Details */}
                    <div className="grid gap-3 py-2">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50">
                                <Calendar className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <p className="font-semibold text-neutral-900 dark:text-white">Dec 8 - 25, 2025</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">Ongoing Event</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="font-semibold text-neutral-900 dark:text-white">STCET Students Only</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">1st Year to 4th Year</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                                <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <p className="font-semibold text-neutral-900 dark:text-white">Google Tech Required</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">Firebase, APIs, etc. • Vibe Coding Allowed!</p>
                            </div>
                        </div>
                    </div>

                    {/* Highlight Box */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 dark:from-emerald-500/20 dark:to-cyan-500/20 border border-emerald-200/50 dark:border-emerald-700/50">
                        <p className="text-sm text-center font-medium text-neutral-700 dark:text-neutral-200">
                            📋 PPT &amp; Prototype Submission<br />
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Top 10 qualify for Round 2!</span><br />
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">🎁 Surprise Rewards from Google for Winners</span>
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                            asChild
                            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
                        >
                            <Link href="https://vision.hack2skill.com/event/gdgoc-25-techsprint-stcetkolkata" target="_blank" rel="noopener noreferrer">
                                Join Now
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleClose}
                            className="flex-1 h-12 rounded-xl border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                            Maybe Later
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
