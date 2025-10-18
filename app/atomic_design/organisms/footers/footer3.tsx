import { useState, useEffect, useRef } from "react";
import { Typography, Box, useTheme, alpha, Button } from "@mui/material";
import { useScroll } from "~/utilities/hooks/scroll_provider";
import { CustomSx } from "~/atomic_design/sub_atomic/custom_sx";
import AccordionLinks from "~/atomic_design/molecules/accordions/acordition_link";
import ListText from "~/atomic_design/molecules/lists/list_text";
import { NavLinkItems } from "~/atomic_design/atoms/items/navlink_items";
import AcorditionNavLink from "~/atomic_design/molecules/accordions/accordition_navlink";
import { baseFooter } from "~/utilities/helper/name_routes";

export default function FloatFooter() {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const { atBottom } = useScroll();
  const isFloatingVisible = atBottom && !expanded;
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (expanded && footerRef.current) {
      // Esperamos un poco a que la animación termine antes de hacer scroll
      const timeout = setTimeout(() => {
        footerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end", // puede ser "start", "center" o "end" según lo que prefieras
        });
      }); // ajusta el tiempo al ritmo de tu animación (1s = 1000ms)
      return () => clearTimeout(timeout);
    }
  }, [expanded]);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isFloatingVisible && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isFloatingVisible]);

  return (
    <>
      <Button
        ref={buttonRef}
        aria-label={
          expanded
            ? "Ocultar información del pie de página"
            : "Mostrar información del pie de página"
        }
        onClick={() => setExpanded(!expanded)}
        sx={{
          position: expanded ? "static" : "fixed",
          bottom: expanded ? "auto" : 24,
          width: expanded ? "100%" : isFloatingVisible ? "40%" : "2%",
          p: 1,
          left: expanded ? "0" : "50%",
          transform: expanded
            ? "translateX(0%) scale(1)"
            : "translateX(-50%) scale(1)",
          transformOrigin: "center center",
          translate: expanded ? "none" : "0 -0.5px",

          opacity: isFloatingVisible || expanded ? 1 : 0,
          pointerEvents: isFloatingVisible || expanded ? "auto" : "none",
          transition:
            "width 1s ease, max-width 1s ease, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1s cubic-bezier(0.34, 1.56, 0.64, 1)",

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
        ref={footerRef}
        component="footer"
        sx={{
          display: expanded ? "flex" : "none",
          opacity: !isFloatingVisible || expanded ? 1 : 0,
          pointerEvents: !isFloatingVisible || expanded ? "auto" : "none",
          transition:
            "opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",

          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          p: 1,
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: 2,
          "& a": { color: "inherit" },
        }}
      >
        {/* menu mobile*/}
        <Box
          display={{ xs: "flex", md: "none" }}
          flexDirection="column"
          gap={1}
          sx={{ width: "100%" }}
        >
          <AccordionLinks
            title="rede sociales"
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
          display={{ xs: "flex", md: "none" }}
          flexDirection="column"
          gap={1}
          sx={{ width: "100%" }}
        >
          <AccordionLinks
            title="sedes"
            links={[
              {
                label: "dangeon",
                href: "https://share.google/KwovHVbZrjpBXvZ0a",
              },
            ]}
          />
        </Box>
        <Box
          display={{ xs: "flex", md: "none" }}
          gap={1}
          sx={{ flexDirection: "column", alignItems: "center", width: "100%" }}
        >
          <AcorditionNavLink
            baseAppBar={baseFooter}
            title={"beyCali"}
          ></AcorditionNavLink>
        </Box>

        {/* menu desktop*/}
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

        <Box
          display={{ xs: "none", md: "flex" }}
          flexDirection="column"
          alignItems="center"
          gap={1}
        >
          <Typography variant="body2">sedes</Typography>
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
          display={{ xs: "none", md: "flex" }}
          gap={1}
          sx={{ flexDirection: "column", alignItems: "center" }}
        >
          <Typography variant="body2">beyCali</Typography>
          <NavLinkItems
            items={baseFooter}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></NavLinkItems>
        </Box>
      </Box>
    </>
  );
}
