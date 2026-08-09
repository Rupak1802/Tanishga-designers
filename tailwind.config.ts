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
          950: "#002047",
          900: "#003D82",
          800: "#0056B3",
          700: "#006FDB",
          600: "#1A8CFF",
          400: "#4BA3D9",
        },
        cream: {
          DEFAULT: "#F5F2E8",
          dim: "#E8E4D5",
        },
        rose: {
          gold: "#2A8C3E",
          deep: "#1A662B",
        },
        blush: "#B5DFF2",
        gold: {
          DEFAULT: "#7FBF3F",
          light: "#A4D973",
        },
        ink: "#001833",
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
