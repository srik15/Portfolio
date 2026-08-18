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
        card: palette.card,
        hero: palette.heroBg,
        accent: {
          DEFAULT: palette.accent,
          bright: palette.accentBright,
          soft: palette.accentSoft,
          light: palette.accentLight,
        },
        secondary: palette.secondary,
        slate: {
          soft: palette.slateSoft,
          mist: palette.slateMist,
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(17, 24, 39, 0.06)",
        "card-hover": "0 8px 32px rgba(93, 67, 218, 0.12)",
      },
      screens: {
        xs: "450px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
