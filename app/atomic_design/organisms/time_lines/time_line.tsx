import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { alpha, useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { CustomSx } from "~/atomic_design/sub_atomic/custom_sx";
import { CardTextCustom } from "~/atomic_design/molecules/cards/card_text";
import UriBase from "~/utilities/helper/uri_base64";
import fondo from "app/src/images/background/decorativoFondo7.svg?url";

export default function Timeline({ events }: { events: TextImageItem[] }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        py: 4,
      }}
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-top-right  saturate-70 opacity-80"
        style={{
          backgroundImage: UriBase(fondo),
          backgroundSize: "cover", // 👈 ajusta toda la imagen
          backgroundPosition: "center", // 👈 la pega a la esquina
        }}
      />
      <Swiper
        modules={[FreeMode, Mousewheel]}
        freeMode
        grabCursor
        mousewheel={{ forceToAxis: true }}
        slidesPerView="auto"
        spaceBetween={0} // sin separación para controlar manualmente
        style={{ padding: "8px 0", zIndex: 1 }}
      >
        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Tarjeta */}
            <SwiperSlide
              style={{
                width: 400,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "unset",
              }}
            >
              <CardTextCustom
                item={event}
                sx={{
                  p: 3,
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 5,
                  bgcolor: alpha(
                    theme.palette.background.paper,
                    CustomSx.basic.trasparent.backgroundsElements
                  ),
                  overflow: "hidden",
                  backdropFilter: CustomSx.basic.backdropFilter,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <Box
                sx={{
                  width: "40px",
                  height: "4px",
                  bgcolor: theme.palette.text.primary,
                  borderRadius: "2px",
                }}
              />
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>
    </Box>
  );
}
