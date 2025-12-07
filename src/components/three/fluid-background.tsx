"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useMemo } from "react";
import { useTheme } from "next-themes";

function Particles({ count = 100, theme = "dark" }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const position = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return pos;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Choose particle color based on theme
    const particleColor = theme === 'light' ? "#3b82f6" : "#60a5fa"; // Darker blue for light mode, Lighter blue for dark mode
    const emissiveColor = theme === 'light' ? "#1d4ed8" : "#3b82f6";

    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            const x = position[i * 3];
            const y = position[i * 3 + 1];
            const z = position[i * 3 + 2];

            dummy.position.set(
                x + Math.sin(t * 0.2 + x) * 2,
                y + Math.cos(t * 0.3 + y) * 2,
                z + Math.sin(t * 0.1 + z) * 2
            );

            const scale = 1 + Math.sin(t * 2 + i) * 0.5;
            dummy.scale.set(scale, scale, scale);

            dummy.rotation.x = t * 0.2 + i;
            dummy.rotation.y = t * 0.3 + i;

            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        }
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshStandardMaterial color={particleColor} emissive={emissiveColor} emissiveIntensity={0.5} roughness={0.1} />
        </instancedMesh>
    );
}

export default function FluidBackground() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Default to dark logic if not mounted to prevent hydration mismatch
    const currentTheme = mounted ? theme : 'dark';

    return (
        <div className={`fixed inset-0 z-[-1] opacity-50 transition-colors duration-500 ${currentTheme === 'light' ? 'bg-gradient-to-br from-gray-50 via-gray-100 to-white' : 'bg-gradient-to-br from-black via-zinc-900 to-black'}`}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Particles count={150} theme={currentTheme} />
                <fog attach="fog" args={[currentTheme === 'light' ? '#f3f4f6' : '#000', 5, 20]} />
            </Canvas>
        </div>
    );
}
