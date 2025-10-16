import { useAppSelector } from "app/store/store-core"
import { getTheme } from "app/atomic_design/natural_rules/theme"
import { ThemeProvider,CssBaseline } from "@mui/material";
import { useEffect,useMemo  } from "react";
import { ScrollProvider } from "~/utilities/hooks/scroll_provider";
import App from "~/app";

export default function ThemedAppWrapper() {
  // 🔹 Leemos tanto el modo (light/dark) como el contraste (normal/medium/high)
  const { mode, contrast } = useAppSelector((state) => state.theme);

  // 🔹 Derivamos el "modo completo" de la paleta, combinando ambos
  const paletteMode = useMemo(() => {
    if (contrast === "normal") return mode;
    return `${mode}-${contrast}-contrast` as
      | "light-medium-contrast"
      | "light-high-contrast"
      | "dark-medium-contrast"
      | "dark-high-contrast";
  }, [mode, contrast]);

  // 🔹 Generamos el tema según el modo y contraste combinados
  const theme = useMemo(() => getTheme(paletteMode), [paletteMode]);

  // 🔹 Guardamos en localStorage ambos valores
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
    localStorage.setItem("themeContrast", contrast);
  }, [mode, contrast]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ThemeProvider>
  );
}