import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/store-core";
import {
  Box,

} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FloatFooter from "~/atomic_design/organisms/footers/float_footer";
import FloatAppBar from "~/atomic_design/organisms/appBars/float_app_bar";
import { CustomSx } from "~/atomic_design/sub_atomic/custom_sx";

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
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = useTheme();

  return (
    <Box  display="flex" flexDirection="column" height="100vh">
     
      <Box component="main" flex={1} overflow="auto">
        <FloatAppBar />
        <Box height={CustomSx.header.height} sx={{backgroundColor:theme.palette.primary.main}} ></Box>
        <Outlet />
        <FloatFooter />
      </Box>
    </Box>
  );
}
