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
        borderRadius: expanded
          ? CustomSx.basic.borderRadius.squareBorder
          : CustomSx.basic.borderRadius.circularBorder,
        zIndex: 1200,
        justifyContent: "center",
        boxShadow: expanded ? theme.shadows[0] : theme.shadows[6],
        overflow: "hidden",
        opacity: isFloatingVisible || expanded ? 1 : 0, // 👈 Se oculta visualmente
        pointerEvents: isFloatingVisible || expanded ? "auto" : "none", // 👈 No clickeable si está oculto
            transform:
          isFloatingVisible || expanded ? "translateY(0)" : "translateY(100px)", // 👈 Animación sutil
        transition: theme.transitions.create(["opacity", "transform", "all"], {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut,
        }),
      }}
    >
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded((prev) => !prev)}
        sx={{
            justifyContent: "center",
            width: expanded ? "100%" : "fit-content",
            maxWidth: expanded ? "none" : "90vw",
          backgroundColor: isFloatingVisible
            ? alpha(theme.palette.primary.main, CustomSx.basic.trasparent)
            : theme.palette.primary.main,
          backdropFilter: isFloatingVisible
            ? CustomSx.basic.backdropFilter
            : "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            width: expanded ? "100%" : "fit-content",
            maxWidth: expanded ? "none" : "90vw",
          }}
        >
          <Typography sx={{color:theme.palette.primary.contrastText}} fontWeight="bold">
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
                    alignItems= "center"  
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
                    alignItems= "center"  
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
