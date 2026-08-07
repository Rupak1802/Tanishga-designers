"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";

function SilkRibbon() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.18;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.8}>
      <mesh ref={mesh} scale={1.5}>
        <torusKnotGeometry args={[1, 0.32, 220, 32, 2, 3]} />
        <MeshDistortMaterial
          color="#D9A9A0"
          roughness={0.15}
          metalness={0.6}
          distort={0.25}
          speed={1.4}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

function OrbitingGold() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * 0.4;
    ref.current.position.set(Math.cos(t) * 2.6, Math.sin(t * 1.3) * 0.6, Math.sin(t) * 2.6);
    ref.current.rotation.x = t;
    ref.current.rotation.y = t;
  });
  return (
    <mesh ref={ref} scale={0.22}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#C9A35C" metalness={0.9} roughness={0.2} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.3]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={1.4} color="#F0CBD8" />
      <pointLight position={[-4, -2, -3]} intensity={0.8} color="#C9A35C" />
      <Suspense fallback={null}>
        <SilkRibbon />
        <OrbitingGold />
        <Sparkles count={32} scale={6} size={2.4} speed={0.35} color="#F7EEDD" opacity={0.6} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
