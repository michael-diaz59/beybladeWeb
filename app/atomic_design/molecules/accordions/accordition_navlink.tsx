import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useTheme,
  ListItemText,
  Box,
} from "@mui/material";
import type { RoutNav } from "~/utilities/helper/name_routes";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";

export default function AcorditionNavLink({
  baseAppBar,
  title,
}: {
  baseAppBar: RoutNav[];
  title: string;
}) {
  const theme = useTheme();

  return (
    <Accordion
      slotProps={{ heading: { component: "h4" } }}
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        boxShadow: "none",
        "&::before": { display: "none" }, // quita la línea divisoria superior del acordeón
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main}} />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{backgroundColor: theme.palette.background.default}}
      >
        {title}
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0,backgroundColor: theme.palette.background.default }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            "& a": {
              display: "block",
              width: "100%",
              padding: "8px 12px",
              textDecoration: "none",
              borderRadius: 1,
              transition: "all 0.2s ease-in-out",
              color: theme.palette.secondary.contrastText,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
            },
            "& a.active": {
              backgroundColor: theme.palette.action.focus,
              color: theme.palette.primary.contrastText,
            },
          }}
        >
          {baseAppBar.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ListItemText primary={item.label} sx={{color:theme.palette.text.primary}}/>
            </NavLink>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}