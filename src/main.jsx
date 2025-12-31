import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// CSS imports
import "./assets/css/about-section.css";
import "./assets/css/contact-section.css";
import "./assets/css/footer.css";
import "./assets/css/hero-section.css";
import "./assets/css/index.css";
import "./assets/css/navigation.css";
import "./assets/css/services-section.css";

// Nuevos imports
import "./assets/css/cart.css";
import "./assets/css/navigation.css";
import "./assets/css/properties-section.css";
import "./assets/css/property-card.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
