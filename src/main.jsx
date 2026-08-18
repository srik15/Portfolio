import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { applyPaletteToDom } from "./theme/palette.js";
import App from "./App.jsx";
import "./index.css";

// #region agent log
const __dbg = (location, message, data, hypothesisId) => {
  fetch("http://127.0.0.1:7645/ingest/d97f9674-765c-4c91-aa3b-bad9d2cde104", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "4819ac" },
    body: JSON.stringify({
      sessionId: "4819ac",
      location,
      message,
      data,
      hypothesisId,
      timestamp: Date.now(),
      runId: "pre-fix",
    }),
  }).catch(() => {});
};

window.addEventListener("error", (event) => {
  __dbg("main.jsx:error", "window error", {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
  }, "H2");
});

window.addEventListener("unhandledrejection", (event) => {
  __dbg("main.jsx:rejection", "unhandled rejection", {
    reason: String(event.reason),
  }, "H2");
});

__dbg("main.jsx:start", "main.jsx executing", { href: window.location.href }, "H3");
// #endregion

applyPaletteToDom();

// #region agent log
__dbg("main.jsx:palette", "palette applied", {}, "H5");
// #endregion

const rootEl = document.getElementById("root");

// #region agent log
__dbg("main.jsx:root", "root element check", { found: !!rootEl }, "H4");
// #endregion

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// #region agent log
__dbg("main.jsx:render", "createRoot.render called", {}, "H2");
// #endregion
