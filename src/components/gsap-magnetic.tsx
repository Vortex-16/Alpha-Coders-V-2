"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface GsapMagneticProps {
    children: React.ReactElement;
}

export default function GsapMagnetic({ children }: GsapMagneticProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current!.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35); // Strength of magnetism
            yTo(y * 0.35);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        ref.current?.addEventListener("mousemove", mouseMove);
        ref.current?.addEventListener("mouseleave", mouseLeave);

        return () => {
            ref.current?.removeEventListener("mousemove", mouseMove);
            ref.current?.removeEventListener("mouseleave", mouseLeave);
        };
    }, { scope: ref });

    return React.cloneElement(children, { ref });
}
