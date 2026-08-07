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
          950: "#210817",
          900: "#2E0A21",
          800: "#3A0F2B",
          700: "#4A1536",
          600: "#5C1F45",
          400: "#8A4266",
        },
        cream: {
          DEFAULT: "#F7EEDD",
          dim: "#EFE3CE",
        },
        rose: {
          gold: "#D9A9A0",
          deep: "#C08A7F",
        },
        blush: "#F0CBD8",
        gold: {
          DEFAULT: "#C9A35C",
          light: "#E0C48A",
        },
        ink: "#1B0A14",
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
          "radial-gradient(120% 120% at 20% 0%, #4A1536 0%, #2E0A21 55%, #210817 100%)",
        "cream-gradient":
          "linear-gradient(180deg, #F7EEDD 0%, #EFE3CE 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent, #C9A35C, transparent)",
      },
      boxShadow: {
        luxury: "0 20px 60px -20px rgba(46,10,33,0.45)",
        glow: "0 0 40px rgba(217,169,160,0.35)",
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
