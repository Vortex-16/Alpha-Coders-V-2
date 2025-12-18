"use client";

import { useMotionValue, motion, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Home, Users, Code, Github, Terminal, Moon, Sun, ShieldCheck } from "lucide-react";
import { useTheme } from "next-themes";

export const Dock = () => {
    const mouseX = useMotionValue(Infinity);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const links = [
        { title: "Home", icon: Home, href: "/" },
        { title: "Core Team", icon: ShieldCheck, href: "/team" },
        { title: "Community", icon: Users, href: "/community" },
        { title: "Projects", icon: Code, href: "/#projects" },
        { title: "GitHub", icon: Github, href: "https://github.com/Alpha4Coders", target: "_blank" },
    ];

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 mx-auto flex h-16 items-end gap-4 rounded-2xl bg-white/10 px-4 pb-3 backdrop-blur-md border border-white/20 z-50 shadow-2xl"
        >
            {links.map((link, i) => (
                <DockIcon key={i} mouseX={mouseX} href={link.href} target={link.target} title={link.title}>
                    <link.icon className="h-full w-full text-white" />
                </DockIcon>
            ))}

            {/* Theme Toggle */}
            <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <DockIcon mouseX={mouseX} href="#" target="" title="Toggle Theme">
                    {mounted && theme === 'dark' ? (
                        <Sun className="h-full w-full text-yellow-300" />
                    ) : (
                        <Moon className="h-full w-full text-emerald-200" />
                    )}
                </DockIcon>
            </div>
        </motion.div>
    );
};

function DockIcon({
    mouseX,
    children,
    href,
    target,
    title
}: {
    mouseX: MotionValue;
    children: React.ReactNode;
    href: string;
    target?: string;
    title?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={href} target={target} title={title} aria-label={title}>
            <motion.div
                ref={ref}
                style={{ width }}
                className="aspect-square w-10 rounded-full bg-gray-500/40 p-2 flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10 shadow-inner"
            >
                {children}
            </motion.div>
        </Link>
    );
}
