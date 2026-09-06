/**
 * Site color palette — v3 paper editorial tokens.
 */
export const palette = {
  paper: "#F5F6F2",
  paper2: "#FFFFFF",
  ink: "#14181A",
  inkSoft: "#454B47",
  muted: "#767D77",
  line: "#DCE0D8",
  signal: "#1F6B4E",
  signalTint: "#E4F0EA",
  amber: "#B5651D",
  amberTint: "#F7EBDD",
  indigo: "#3B5BDB",
  indigoTint: "#E9EDFB",
  pipelineBg: "#EEF2FF",
  pipelineLine: "#C5CAE9",
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
    "--paper": palette.paper,
    "--paper-2": palette.paper2,
    "--ink": palette.ink,
    "--ink-soft": palette.inkSoft,
    "--muted": palette.muted,
    "--line": palette.line,
    "--signal": palette.signal,
    "--signal-tint": palette.signalTint,
    "--amber": palette.amber,
    "--amber-tint": palette.amberTint,
    "--indigo": palette.indigo,
    "--indigo-tint": palette.indigoTint,
    "--pipeline-bg": palette.pipelineBg,
    "--pipeline-line": palette.pipelineLine,
    "--ink-rgb": hexToRgbChannels(palette.ink),
    "--signal-rgb": hexToRgbChannels(palette.signal),
  };

  Object.entries(map).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
