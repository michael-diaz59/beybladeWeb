import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
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
  { label: "competitivo", path: "/calendar" },
  { label: "Tienda", path: "/store" },
];

export default function FloatAppBar() {
  const theme = useTheme();
  const { hasScrolled,scrollDirection } = useScroll();
 const showFloatAppBar = hasScrolled && scrollDirection === "up";
  console.log("showFloatAppBar: "+showFloatAppBar)




  return (
    <AppBar
      position="fixed"
      elevation={showFloatAppBar ? CustomSx.basic.elevation.cat3 : hasScrolled? CustomSx.basic.elevation.cat3:0}
      sx={{
        top: showFloatAppBar ? 8 : hasScrolled? 8 :0,
        opacity: showFloatAppBar?  1 : hasScrolled? 0:1,
        pointerEvents: showFloatAppBar ? "auto" : hasScrolled? "none":"auto",
        ...((showFloatAppBar || !hasScrolled) && {
          transform: "scale(0.1)",
        }),

        ...((!showFloatAppBar || hasScrolled) && {
          transform: "scale(1)",
        }),

        height: CustomSx.header.height,
        width: showFloatAppBar ? "50%" : hasScrolled? "70%":"100%",
        left: "50%",
        transform: "translateX(-50%)", 
        transition: "width 1s ease, max-width 1s ease, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transformOrigin: "center center",
        overflow: "hidden",
        willChange: "width, transform",
        justifyContent: "center",
        borderRadius: showFloatAppBar ? CustomSx.basic.borderRadius.circularBorder : hasScrolled?
         CustomSx.basic.borderRadius.circularBorder:CustomSx.basic.borderRadius.squareBorder,
        backgroundColor: showFloatAppBar
          ? alpha(theme.palette.primary.main, CustomSx.basic.trasparent)
          : hasScrolled? alpha(theme.palette.primary.main, CustomSx.basic.trasparent) :theme.palette.primary.main,
        backdropFilter: showFloatAppBar ? CustomSx.basic.backdropFilter : hasScrolled? CustomSx.basic.backdropFilter:"none",
  
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: showFloatAppBar? "center":"space-between",
          alignItems: "center",
          transition: "width 1s ease, max-width 1s ease, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
          willChange: "width, transform",
          alignContent: "center",
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
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
