import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store-core";
import {
  Box,

} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import ThemeSwitch from "app/components/theme_switch";
import Footer from "~/components/footer";
import FloatAppBar from "~/components/organism/float_app_bar";

// Estado del menú hamburguesa

const menuItems = [
  { label: "Inicio", path: "/" },
  { label: "Quiénes somos", path: "/about" },
  { label: "Calendario", path: "/calendar" },
  { label: "Jugadores", path: "/players" },
  { label: "Equipos", path: "/teams" },
  { label: "Beys", path: "/beys" },
  { label: "Tienda", path: "/store" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box component="main" flex={1} overflow="auto">
        <FloatAppBar />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
}
