import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import CardText from "~/atomic_design/molecules/cards/card_text";
import { Box } from "@mui/material";

export default function Timeline({ events }: { events: TextImageItem[] }) {
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
        {events.map((event, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
             <CardText item={event} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
