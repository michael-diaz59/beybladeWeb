// src/store/themeSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialMode = (() => {
  const saved = localStorage.getItem("themeMode");
  if (saved === "light" || saved === "dark") return saved as "light" | "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
})();

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: initialMode },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
