import { useRef, useState, useEffect } from "react";
import CardText from "~/atomic_design/molecules/cards/card_text";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Event = {
  title: string;
  text: string;
  background?: string;
  backgroundPosition?: string;
};

export default function Timeline({ events }: { events: Event[] }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        overflowX: "auto",
        py: 6,
      }}
    >
      {/* 🔹 Línea central */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: "2px",
          bgcolor: "black",
          zIndex: 0,
        }}
      />

      {/* 🔹 Eventos */}
      <Box
        sx={{
          display: "flex",
          gap: 6,
          position: "relative",
          zIndex: 1,
          px: 4,
        }}
      >
        {events.map((event, index) => {
          const isTop = index % 2 === 0; // alterna arriba/abajo

          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                minWidth: 280,
              }}
            >
              {/* Card arriba */}
              {isTop && (
                <Box sx={{ mb: 2 }}>
                  <CardText
                    title={event.title}
                    text={event.text}
                    background={event.background}
                    backgroundPosition={event.backgroundPosition}
                  />
                </Box>
              )}

              {/* Conector vertical */}
              <Box
                aria-hidden
                sx={{
                  width: "2px",
                  height: "20px",
                  bgcolor: "black",
                }}
              />

              {/* Card abajo */}
              {!isTop && (
                <Box sx={{ mt: 2 }}>
                  <CardText
                    title={event.title}
                    text={event.text}
                    background={event.background}
                    backgroundPosition={event.backgroundPosition}
                  />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}