import { Box, MenuItem, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CustomSx } from "~/atomic_design/sub_atomic/custom_sx";
import type { RoutNav } from "~/utilities/helper/name_routes";

export function NavLinkItems({items}: { items: RoutNav[]} ){
  const theme = useTheme();

  return (
    <Box>
      {items.map((item) => (
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
  );
}

export function MenuNavLinkItems({items, callback}: { items: RoutNav[], callback: ()=> void} ){
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%"}}>
      {items.map((item) => (
              <MenuItem
                key={item.path}
                component={NavLink}
                to={item.path}
                onClick={() => callback()}
                sx={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  color: theme.palette.text.primary,
                  alignContent: "center",
                  alignItems: "center",
                  borderRadius: CustomSx.basic.borderRadius.circularBorder,
                  "&.active": {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                  },
                }}
              >
                {item.label}
              </MenuItem>
            ))}
    </Box>
  );
}
