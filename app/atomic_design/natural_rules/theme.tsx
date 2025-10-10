import { createTheme } from "@mui/material/styles";
import { getPaletteTokens } from "../sub_atomic/palette";
import { typographyTokens } from "../sub_atomic/typografic";


export function getTheme(mode: "light" | "dark" | "light-medium-contrast" | "light-high-contrast" | "dark-medium-contrast" | "dark-high-contrast") {

  return createTheme({

    palette: getPaletteTokens(mode),

    typography: typographyTokens,


  });
}