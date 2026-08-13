import { palette } from "./src/theme/palette.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: palette.ink,
        paper: palette.paper,
        fog: palette.fog,
        hero: palette.heroBg,
        accent: {
          DEFAULT: palette.accent,
          bright: palette.accentBright,
          soft: palette.accentSoft,
        },
        secondary: palette.secondary,
        slate: {
          soft: palette.slateSoft,
          mist: palette.slateMist,
        },
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      screens: {
        xs: "450px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        float: "float 8s ease-in-out infinite",
        "grid-drift": "gridDrift 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        gridDrift: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(60px)" },
        },
      },
    },
  },
  plugins: [],
};
