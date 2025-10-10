import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

import UriBase from "~/utilities/helper/uri-base64"

export default function CardText({
  title,
  text,
  background,
  backgroundPosition,
}: {
  title: string;
  text: string;
  background?: string;
  backgroundPosition?: string;
}) {
  return (

    <Box
      sx={{
        position: "relative",
        p: 3,
        borderRadius: 2,
        boxShadow: 5,
        bgcolor:  (theme) => alpha(theme.palette.background.paper, 0.7), 
        overflow: "hidden",
        minHeight: 300,
        backdropFilter: "blur(3px)" 
      }}
    >


      {/* 🔹 Fondo con Tailwind */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top-right  saturate-80 opacity-50"
        style={{
          backgroundImage: UriBase(background),
          backgroundSize: "cover", // 👈 ajusta toda la imagen
          backgroundPosition: backgroundPosition, // 👈 la pega a la esquina
        }}
      />

      {/* 🔹 Contenido encima */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
