/**
 * Site color palette — edit values here and they apply everywhere.
 */
export const palette = {
  ink: "#0B1A24",
  paper: "#F4F7FA",
  fog: "#E8EEF3",
  slateSoft: "#5A6B78",
  slateMist: "#8A9AA8",
  accent: "#0F7B72",
  accentBright: "#14A89A",
  accentSoft: "#D4EFEB",
  secondary: "#C4622D",
  heroBg: "#F4F7FA",
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
    "--slate-soft": palette.slateSoft,
    "--slate-mist": palette.slateMist,
    "--accent": palette.accent,
    "--accent-bright": palette.accentBright,
    "--accent-soft": palette.accentSoft,
    "--secondary": palette.secondary,
    "--hero-bg": palette.heroBg,
    "--ink-rgb": hexToRgbChannels(palette.ink),
    "--accent-rgb": hexToRgbChannels(palette.accent),
    "--accent-bright-rgb": hexToRgbChannels(palette.accentBright),
    "--secondary-rgb": hexToRgbChannels(palette.secondary),
  };

  Object.entries(map).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
