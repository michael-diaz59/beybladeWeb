import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
  alpha,
  Button,
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
    <>
      <Button
        onClick={() => setExpanded(!expanded)}
        sx={{
          position: expanded ? "static" : "fixed",
          bottom: expanded ? "auto" : 24,
          width: expanded ? "100%" : "20%",
          p: 1,
          left: expanded ? "0" : "50%",
          transform: expanded
            ? "translateX(0%) scale(1)"
            : "translateX(-50%) scale(1)",
          transformOrigin: "center center",
          translate: expanded ? "none" : "0 -0.5px", 

          opacity: isFloatingVisible || expanded ? 1 : 0,
          transition:
            " width 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),  transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
          ...(isFloatingVisible && {
            transform: "scale(1)",
          }),
          ...(!isFloatingVisible && {
            transform: "scale(0.1)",
          }),
          ...(expanded && {
            transform: "cale(1)",
          }),

          borderRadius: expanded
            ? CustomSx.basic.borderRadius.squareBorder
            : CustomSx.basic.borderRadius.circularBorder,
          zIndex: 1200,
          backgroundColor: isFloatingVisible
            ? alpha(
                theme.palette.primary.main,
                CustomSx.basic.trasparent.backgroundsElements
              )
            : theme.palette.primary.main,
          backdropFilter: isFloatingVisible
            ? CustomSx.basic.backdropFilter
            : "none",

          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden", //indica que hacer con el contenido que se sobreextiende al componente
        }}
      >
        <Typography
          sx={{
            color: theme.palette.primary.contrastText,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            whiteSpace: "nowrap",
            fontWeight: "bold",
          }}
        >
          {expanded ? "ver menos" : "beyblade cali +"}
        </Typography>
      </Button>
      <Box
        component="footer"
        sx={{
          display: expanded ? "block" : "none",
          opacity: !isFloatingVisible || expanded ? 1 : 0,
          pointerEvents: !isFloatingVisible || expanded ? "auto" : "none",
          transition:
            "opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",

          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          p: 1,
          flexDirection: { xs: "row", md: "row" },
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 2,
          "& a": { color: "inherit" },
        }}
      >
        <Box>
          <Box
            display={{ xs: "flex", md: "none" }}
            flexDirection="column"
            gap={1}
            sx={{ width: "auto" }}
          >
            <AccordionLinks
              title="ubicaciones activas"
              links={[
                {
                  label: "WhatsApp",
                  href: "https://chat.whatsapp.com/H6EaTsXnZplH19y24mruRJ",
                },
                {
                  label: "TikTok",
                  href: "https://www.tiktok.com/@beyblade.cali",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/beybladecali",
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61580348802968",
                },
              ]}
            />
          </Box>
          <Box
            display={{ xs: "none", md: "flex" }}
            flexDirection="column"
            alignItems="center"
            justifyItems={"center"}
            gap={1}
          >
            <Typography variant="body2">Redes sociales</Typography>
            <ListText
              links={[
                {
                  label: "WhatsApp",
                  href: "https://chat.whatsapp.com/H6EaTsXnZplH19y24mruRJ",
                },
                {
                  label: "TikTok",
                  href: "https://www.tiktok.com/@beyblade.cali",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/beybladecali",
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61580348802968",
                },
              ]}
            />
          </Box>
        </Box>
        <Box>
          <Box
            display={{ xs: "none", md: "flex" }}
            flexDirection="column"
            alignItems="center"
            gap={1}
          >
            <Typography variant="body2">Ubicacion</Typography>
            <ListText
              links={[
                {
                  label: "dangeon",
                  href: "https://g.co/kgs/mjPAf1S",
                },
              ]}
            />
          </Box>
          <Box
            display={{ xs: "flex", md: "none" }}
            flexDirection="column"
            gap={1}
          >
            <AccordionLinks
              title="ubicaciones activas"
              links={[
                {
                  label: "dangeon",
                  href: "https://share.google/KwovHVbZrjpBXvZ0a",
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
