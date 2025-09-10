import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./app";
import { store } from "./store/store-core";
import { getTheme } from "./src/theme";
import { useAppSelector } from "./store/store-core";

import './app.css'; 

// Componente para leer el tema desde Redux
function ThemedAppWrapper() {
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

// Montaje de la app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemedAppWrapper />
    </BrowserRouter>
  </Provider>
);
