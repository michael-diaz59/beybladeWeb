import { Box, Typography } from "@mui/material";
import { alpha, type SxProps } from "@mui/material/styles";
import { CustomSx } from "~/atomic_design/sub_atomic/custom_sx";

import UriBase from "~/utilities/helper/uri_base64"

export default function CardText({item}:{item:TextImageItem}) {
  return (

    <Box
      sx={{
        position: "relative",
        p: 3,
        borderRadius: 2,
        boxShadow: 5,
        bgcolor:  (theme) => alpha(theme.palette.background.paper, CustomSx.basic.trasparent.backgroundsElements), 
        overflow: "hidden",
        minHeight: 300,
        backdropFilter: CustomSx.basic.backdropFilter
      }}
    >


      {/* 🔹 Fondo con Tailwind */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top-right  saturate-80 opacity-50"
        style={{
          backgroundImage: UriBase(item.background),
          backgroundSize: "cover", // 👈 ajusta toda la imagen
          backgroundPosition: item.backgroundPosition, // 👈 la pega a la esquina
        }}
      />

      {/* 🔹 Contenido encima */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          {item.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
        >
          {item.text}
        </Typography>
      </Box>
    </Box>
  );
}

export function CardTextCustom({item,sx}:{item:TextImageItem,sx: SxProps}) {
  return (

    <Box
      sx={
   sx
      }
    >


      {/* 🔹 Fondo con Tailwind */}
      <div
        className="absolute inset-0 bg-no-repeat bg-top-right  saturate-80 opacity-50"
        style={{
          backgroundImage: UriBase(item.background),
          backgroundSize: "cover", // 👈 ajusta toda la imagen
          backgroundPosition: item.backgroundPosition, // 👈 la pega a la esquina
        }}
      />

      {/* 🔹 Contenido encima */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          {item.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
        >
          {item.text}
        </Typography>
      </Box>
    </Box>
  );
}

