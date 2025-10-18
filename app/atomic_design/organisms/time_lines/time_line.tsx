import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { alpha, useTheme } from "@mui/material/styles";

import CardText, {
  CardTextCustom,
} from "~/atomic_design/molecules/cards/card_text";
import { Box } from "@mui/material";
import { CustomSx } from "~/atomic_design/sub_atomic/custom_sx";

export default function Timeline({ events }: { events: TextImageItem[] }) {
  const theme = useTheme();

  return (
    <Box sx={{ position: "relative", py: 4 }}>
      {/* 🔹 Swiper para arrastre libre */}
      <Swiper
        modules={[FreeMode, Mousewheel]}
        freeMode={true}
        grabCursor={true}
        mousewheel={{ forceToAxis: true }}
        slidesPerView="auto"
        spaceBetween={8}
        style={{ padding: "8px 0", zIndex: 1 }}
      >
        {events.map((event, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: 400, // tamaño uniforme
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
