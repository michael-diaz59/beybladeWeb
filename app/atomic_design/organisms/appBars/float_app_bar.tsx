import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";

// Lista de menús
const menuItems = [
  { label: "Inicio", path: "/" },
  { label: "Quiénes somos", path: "/about" },
  { label: "Calendario", path: "/calendar" },
  { label: "Jugadores", path: "/players" },
  { label: "Equipos", path: "/teams" },
  { label: "Beys", path: "/beys" },
  { label: "Tienda", path: "/store" },
];

export default function FloatAppBar() {
  const theme = useTheme();
  const [open,setOpen] = useState(false);
  // Detecta si se ha hecho scroll
  var trigger = false;

  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    // busca el <main> en el DOM
    const scrollDetected = document.querySelector("main");

    if (!scrollDetected) {
      trigger = false;
      return;
    }

    const handleScroll = () => {
      if (scrollDetected.scrollTop > 5) {
        trigger = true;
      } else {
        trigger = false;
      }
      console.log("triger" + trigger);
    };

    scrollDetected.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollDetected.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AppBar
      elevation={trigger ? 6 : 0}
      sx={{
        backgroundColor: theme.palette.primary.main,
        transition: "all 0.3s ease",
        width: trigger ? "90%" : "100%", // 🔹 se encoge al scrollear
        margin: trigger ? "0 auto" : 0, // 🔹 centrado tipo "floating"
        borderRadius: trigger ? 4 : 0, // 🔹 redondeado al flotar
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "all 0.3s ease",
          minHeight: trigger ? 48 : 64, // 🔹 más pequeño al scrollear
        }}
      >
        {/* Logo / título */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Mi App
        </Typography>

        {/* Menú desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                padding: "8px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                color: isActive
                  ? theme.palette.primary.contrastText
                  : theme.palette.grey[200],
                backgroundColor: isActive
                  ? theme.palette.primary.dark
                  : "transparent",
                transition: "all 0.2s ease-in-out",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </Box>

        {/* Botón hamburguesa mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
