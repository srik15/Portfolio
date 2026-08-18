/**
 * Site color palette — edit values here and they apply everywhere.
 */
export const palette = {
  ink: "#111827",
  paper: "#F8F9FD",
  fog: "#F1F3F9",
  card: "#FFFFFF",
  slateSoft: "#4B5563",
  slateMist: "#6B7280",
  accent: "#5D43DA",
  accentBright: "#7C5CFF",
  accentSoft: "#EDE9FE",
  accentLight: "#F3F0FF",
  secondary: "#4338CA",
  heroBg: "#F8F9FD",
  gradientStart: "#5D43DA",
  gradientEnd: "#312E81",
};

export function hexToRgbChannels(hex) {
  const raw = hex.replace("#", "");
  const value = parseInt(raw, 16);
  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
}

export function applyPaletteToDom() {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const map = {
    "--ink": palette.ink,
    "--paper": palette.paper,
    "--fog": palette.fog,
    "--card": palette.card,
    "--slate-soft": palette.slateSoft,
    "--slate-mist": palette.slateMist,
    "--accent": palette.accent,
    "--accent-bright": palette.accentBright,
    "--accent-soft": palette.accentSoft,
    "--accent-light": palette.accentLight,
    "--secondary": palette.secondary,
    "--hero-bg": palette.heroBg,
    "--gradient-start": palette.gradientStart,
    "--gradient-end": palette.gradientEnd,
    "--ink-rgb": hexToRgbChannels(palette.ink),
    "--accent-rgb": hexToRgbChannels(palette.accent),
    "--accent-bright-rgb": hexToRgbChannels(palette.accentBright),
    "--secondary-rgb": hexToRgbChannels(palette.secondary),
  };

  Object.entries(map).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
