import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { applyPaletteToDom } from "./theme/palette.js";
import App from "./App.jsx";
import "./index.css";

applyPaletteToDom();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
