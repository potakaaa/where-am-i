import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PositionProvider } from "./components/provider/global-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <PositionProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </PositionProvider>
);
