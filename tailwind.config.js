import { palette } from "./src/theme/palette.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: palette.paper,
          2: palette.paper2,
        },
        ink: {
          DEFAULT: palette.ink,
          soft: palette.inkSoft,
        },
        muted: palette.muted,
        line: palette.line,
        signal: {
          DEFAULT: palette.signal,
          tint: palette.signalTint,
        },
        amber: {
          DEFAULT: palette.amber,
          tint: palette.amberTint,
        },
        indigo: {
          DEFAULT: palette.indigo,
          tint: palette.indigoTint,
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"Space Grotesk"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
        cardLg: "20px",
        pill: "999px",
      },
      maxWidth: {
        content: "1140px",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        travel: {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "5%": { opacity: "1" },
          "95%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        travel: "travel 3.2s linear infinite",
      },
    },
  },
  plugins: [],
};
