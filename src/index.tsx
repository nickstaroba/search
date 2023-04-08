import "./index.css";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wouter";

import { App } from "./components/App";
import theme from "./theme";

const rootElement = document.getElementById("root") as HTMLElement;

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router base={"/search"}>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
