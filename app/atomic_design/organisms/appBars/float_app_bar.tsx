import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useScroll } from "~/utilities/hooks/scroll_provider"; // tu hook de scroll
import { CustomSx } from "app/atomic_design/sub_atomic/custom_sx";

const menuItems = [
  { label: "Inicio", path: "/home" },
  { label: "Quiénes somos", path: "/about" },
  { label: "Calendario", path: "/calendar" },
  { label: "Jugadores", path: "/players" },
  { label: "Equipos", path: "/teams" },
  { label: "Beys", path: "/beys" },
  { label: "Tienda", path: "/store" },
];

export default function FloatAppBar() {
  const theme = useTheme();
  const { hasScrolled } = useScroll(); // se actualiza automáticamente con tu contexto
  const [open, setOpen] = React.useState(false);


  return (
    <AppBar
      position="fixed"
      elevation={hasScrolled ? CustomSx.basic.elevation.cat3 : 0}
      sx={{
        top: hasScrolled ? 8 : 0,
        height: CustomSx.header.height,
        width: hasScrolled ? "fit-content" : "100%",
        left: hasScrolled ? "50%" : 0,
        transform: hasScrolled ? "translateX(-50%)" : "none",
        justifyContent: "center",
        borderRadius: hasScrolled ? CustomSx.basic.borderRadius.circularBorder : CustomSx.basic.borderRadius.squareBorder,
        backgroundColor: hasScrolled
          ? alpha(theme.palette.primary.main, CustomSx.basic.trasparent)
          : theme.palette.primary.main,
        backdropFilter: hasScrolled ? CustomSx.basic.backdropFilter : "none",
        transition: theme.transitions.create(
          [
            "top",
            "width",
            "margin",
            "border-radius",
            "box-shadow",
            "transform",
          ],
          {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }
        ),
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
          transition: "all 0.3s ease",
          minHeight: hasScrolled ? 56 : 72, //  más pequeño al hacer scroll
          px: { xs: 2, md: 4 },
          py: 1,
        }}
      >
        {/* Logo / título */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src="/favicon.svg" // tu logo dentro de /public/
            alt="Logo"
            sx={{
              height: hasScrolled ? 32 : 48,
              width: "auto",
              transition: "all 0.3s ease",
            }}
          />
        </Box>

        {/* Menú desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                whiteSpace: "nowrap",
                padding: "8px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                color: isActive
                  ? theme.palette.primary.contrastText
                  : theme.palette.secondary.contrastText,
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

        {/* Botón hamburguesa (mobile) */}
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
