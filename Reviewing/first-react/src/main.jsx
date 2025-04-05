import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ColorContextProvider from "./Components/ColorContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </StrictMode>
);
