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
        "& .MuiAccordionSummary-content": {
          margin: "0 !important", // quita margen interno
        },
        bottom: expanded ? "auto" : 24,
        right: expanded ? "auto" : 24,
        width: expanded ? "100%" : "fit-content",
        maxWidth: expanded ? "none" : "90vw",
        borderRadius: expanded
          ? CustomSx.basic.borderRadius.squareBorder
          : CustomSx.basic.borderRadius.circularBorder,
        zIndex: 1200,
        justifyContent: "center",
        boxShadow: expanded ? theme.shadows[0] : theme.shadows[6],
        overflow: "hidden",
        opacity: isFloatingVisible || expanded ? 1 : 0, // 👈 Se oculta visualmente
        pointerEvents: isFloatingVisible || expanded ? "auto" : "none", // 👈 No clickeable si está oculto
        transition: "opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded((prev) => !prev)}
        sx={{
          display: "inline-flex",
          margin: 0,
          "&::before": { display: "none" },
          justifyContent: "center",
          width: expanded ? "100%" : "fit-content",
          maxWidth: expanded ? "none" : "90vw",
          backgroundColor: isFloatingVisible
            ? alpha(theme.palette.primary.main, CustomSx.basic.trasparent)
            : theme.palette.primary.main,
          backdropFilter: isFloatingVisible
            ? CustomSx.basic.backdropFilter
            : "none",
          "& .MuiAccordionSummary-content": {
            margin: "0 !important", // quita margen interno
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            width: "fit-content", // evita que ocupe todo el ancho
            minWidth: "fit-content",
            maxWidth: "90vw",
            minHeight: "unset !important", // anula el alto mínimo
            padding: "0.25rem 0.75rem", // ajusta manualmente el espacio interno
            "&.MuiAccordionSummary-root": {
              minHeight: "unset !important",
            },
            "& .MuiAccordionSummary-content": {
              margin: "0 !important",
              minHeight: "unset !important",
              width: "fit-content", // clave: no expandir más del contenido
              alignItems: "center",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              padding: 0,
              margin: 0,
            },
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
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="footer"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              p: 1,
              display: "flex",
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
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
