import { Box, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccordionLinks from "app/components/accordions/acordition_link";
import ListText from "./lists/list_text";

export default function Footer({}) {
  const theme = useTheme();
  return (
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
  );
}
