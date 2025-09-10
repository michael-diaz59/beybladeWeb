import { createTheme } from "@mui/material/styles";
import themeJson from "./theme.json";


export function getTheme(mode: "light" | "dark") {
  const scheme = themeJson.schemes[mode];

  return createTheme({
    /*
    status: {
        tertiary: {
          main: scheme.tertiary,
          contrastText: scheme.onTertiary,
          container: scheme.tertiaryContainer,
          onContainer: scheme.onTertiaryContainer,
        },
        surfaceVariant: {
          main: scheme.surfaceVariant,
          on: scheme.onSurfaceVariant,
        },
        outline: scheme.outline,
      },
    */
    palette: {
      primary: {
        main: scheme.primary,
        contrastText: scheme.onPrimary,
        light: scheme.primaryContainer,
        dark: scheme.inversePrimary,
      },
      secondary: {
        main: scheme.secondary,
        contrastText: scheme.onSecondary,
        light: scheme.secondaryContainer,
        dark: scheme.onSecondaryContainer,
      },
      error: {
        main: scheme.error,
        contrastText: scheme.onError,
        light: scheme.errorContainer,
        dark: scheme.onErrorContainer,
      },
      background: {
        default: scheme.background,
        paper: scheme.surface,
      },
      text: {
        primary: scheme.onBackground,
        secondary: scheme.onSurface,
      },
    }
  });
}

