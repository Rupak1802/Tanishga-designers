"use client";

import { motion } from "framer-motion";

export default function Butterfly({
  className = "",
  color = "#C9A35C",
  flutter = true,
  size = 60,
}: {
  className?: string;
  color?: string;
  flutter?: boolean;
  size?: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 120 100"
      width={size}
      height={(size * 100) / 120}
      className={className}
      style={{ overflow: "visible" }}
    >
      {/* body */}
      <motion.line
        x1="60"
        y1="30"
        x2="60"
        y2="72"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* left wing */}
      <motion.path
        d="M60 38 C 40 10, 8 8, 4 34 C 0 58, 30 62, 60 46 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        style={{ transformOrigin: "60px 42px" }}
        animate={
          flutter ? { rotateY: [0, 40, 0], scaleX: [1, 0.86, 1] } : undefined
        }
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* right wing */}
      <motion.path
        d="M60 38 C 80 10, 112 8, 116 34 C 120 58, 90 62, 60 46 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        style={{ transformOrigin: "60px 42px" }}
        animate={
          flutter ? { rotateY: [0, -40, 0], scaleX: [1, 0.86, 1] } : undefined
        }
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* lower left wing */}
      <motion.path
        d="M60 48 C 46 62, 26 72, 22 58 C 18 46, 40 44, 60 54 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        style={{ transformOrigin: "60px 50px" }}
        animate={flutter ? { rotateY: [0, 30, 0] } : undefined}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
      />
      {/* lower right wing */}
      <motion.path
        d="M60 48 C 74 62, 94 72, 98 58 C 102 46, 80 44, 60 54 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        style={{ transformOrigin: "60px 50px" }}
        animate={flutter ? { rotateY: [0, -30, 0] } : undefined}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
      />
      {/* antennae */}
      <path
        d="M60 30 C 56 24, 50 22, 47 17 M60 30 C 64 24, 70 22, 73 17"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
