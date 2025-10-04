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
      action: {
        hover: scheme.onSurfaceVariant + "40",     // overlay sutil (~8%)
        selected: scheme.secondaryContainer,       // resalta con un color distinto
        focus: scheme.onSurfaceVariant + "70",    // overlay más fuerte (~20%)
        active: scheme.primary,                   // acción activa clara
        disabled: scheme.onSurface + "100",        // opacidad recomendada M3 (~38%)
        disabledBackground: scheme.onSurface + "1F", // opacidad recomendada M3 (~12%)
      },
    },
    typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",

    h1: {
      fontSize: "clamp(2rem, 4vw, 3.5rem)", // móvil → 32px, desktop → 56px
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
      fontWeight: 500,
      lineHeight: 1.4,
    },

    subtitle1: {
      fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
      fontWeight: 400,
      lineHeight: 1.5,
    },

    body1: {
      fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
      lineHeight: 1.6,
    },

    button: {
      fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
      fontWeight: 600,
      textTransform: "none", // para no forzar MAYÚSCULAS
    },

    caption: {
      fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
      lineHeight: 1.4,
    },
    overline: {
      fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    },
  },
  });
}

