import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "@/pages/PortfolioPage";

import "@/app/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
