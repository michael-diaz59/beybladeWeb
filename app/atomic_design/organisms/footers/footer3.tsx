import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
  alpha,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useScroll } from "~/utilities/hooks/scroll_provider";
import { CustomSx } from "~/atomic_design/sub_atomic/custom_sx";
import AccordionLinks from "~/atomic_design/molecules/accordions/acordition_link";
import ListText from "~/atomic_design/molecules/lists/list_text";

export default function FloatFooter() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const { atBottom } = useScroll();
  const isFloatingVisible = atBottom && !expanded;

  return (
    <Box
      sx={{
        position: expanded ? "static" : "fixed",
        bottom: expanded ? "auto" : 24,
        right: expanded ? "auto" : 24,
        width: expanded ? "100%" : "fit-content",
        maxWidth: expanded ? "none" : "90vw",
        p: 1,
        left: "50%",
        transition: "opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
         transform: expanded ? "none": "translateX(-50%) scale(0.5)", 
        ...(isFloatingVisible && {
          transform: "translateX(-50%) scale(1)",
        }),
        ...(!isFloatingVisible && {
          transform: "translateX(-50%) scale(0.1)",
        }),

        borderRadius: expanded
          ? CustomSx.basic.borderRadius.squareBorder
          : CustomSx.basic.borderRadius.circularBorder,
        zIndex: 1200,
        backgroundColor: isFloatingVisible
          ? alpha(theme.palette.primary.main, CustomSx.basic.trasparent)
          : theme.palette.primary.main,
        backdropFilter: isFloatingVisible
          ? CustomSx.basic.backdropFilter
          : "none",
        justifyContent: "center",
        boxShadow: expanded ? theme.shadows[0] : theme.shadows[6],
        overflow: "hidden",

        opacity: isFloatingVisible || expanded ? 1 : 0, // 👈 Se oculta visualmente
        pointerEvents: isFloatingVisible || expanded ? "auto" : "none", // 👈 No clickeable si está oculto
      }}
    >
      <Typography
        sx={{
          color: theme.palette.primary.contrastText,
          whiteSpace: "nowrap",
          fontWeight: "bold",
        }}
      >
        {expanded ? "ver menos" : "beyblade cali +"}
      </Typography>
    </Box>
  );
}
