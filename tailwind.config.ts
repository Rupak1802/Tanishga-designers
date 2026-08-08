import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: "#050505",
          900: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#242424",
          400: "#333333",
        },
        cream: {
          DEFAULT: "#F7EEDD",
          dim: "#EFE3CE",
        },
        rose: {
          gold: "#D4AF37",
          deep: "#B5952F",
        },
        blush: "#E8D399",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F0D786",
        },
        ink: "#000000",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        script: ["var(--font-cormorant)", "cursive"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "plum-gradient":
          "radial-gradient(120% 120% at 20% 0%, #1a1a1a 0%, #0a0a0a 55%, #000000 100%)",
        "cream-gradient":
          "linear-gradient(180deg, #F7EEDD 0%, #EFE3CE 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent, #D4AF37, transparent)",
      },
      boxShadow: {
        luxury: "0 20px 60px -20px rgba(0,0,0,0.8)",
        glow: "0 0 40px rgba(212,175,55,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        sparkle: "sparkle 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
