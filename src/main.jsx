import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// professional-grade filter to keep your console clean
if (typeof window !== "undefined") {
  const originalError = console.error;
  console.error = (...args) => {
    if (args[0]?.includes?.('UNSAFE_componentWillMount') || args[0]?.includes?.('SideEffect')) {
      return;
    }
    originalError(...args);
  };
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);