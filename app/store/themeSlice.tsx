import { createSlice } from "@reduxjs/toolkit";

// 🔹 Determina el modo inicial (light o dark)
const getInitialMode = (): "light" | "dark" => {
  const saved = localStorage.getItem("themeMode");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// 🔹 Determina el contraste inicial
const getInitialContrast = (): "normal" | "medium" | "high" => {
  const saved = localStorage.getItem("themeContrast");
  if (saved === "medium" || saved === "high") return saved;
  return "normal";
};

const initialState = {
  mode: getInitialMode(),
  contrast: getInitialContrast(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("themeMode", state.mode);
    },
    setContrast: (state, action) => {
      state.contrast = action.payload;
      localStorage.setItem("themeContrast", state.contrast);
    },
  },
});

export const { toggleTheme, setTheme, setContrast } = themeSlice.actions;
export default themeSlice.reducer;
