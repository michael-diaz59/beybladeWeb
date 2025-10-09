import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import ImageRotation1 from "~/atomic_design/atoms/images/image_rotation1";
import CardText from "~/atomic_design/molecules/cards/card_text";
import UriBase from "~/utilities/helper/uri-base64";

export default function TextModuleRotationImage({
  item,
  index,
}: {
  item: TextImageItem;
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <Box
      key={item.title}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", lg: isEven ? "row" : "row-reverse" },
        alignItems: "center",
        justifyContent: "space-between",
        p: { xs: 1, lg: 4 },
        minHeight: 300,
        overflow: "hidden",
      }}
    >
      {/* Fondo con Fade suave */}
      <Fade in timeout={800}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${item.image})`, // 👈 asegúrate que no falten comillas
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // 👈 mantiene el zoom sin distorsión
            backgroundPosition: "center", // 👈 centra la parte visible
            filter: "brightness(0.5)", // 👈 equivalente a brightness-50
            zIndex: 0,
          }}
        />
      </Fade>

      {/* Card con Slide */}
      <Slide
        in
        direction={isEven ? "right" : "left"}
        timeout={700}
        mountOnEnter
        unmountOnExit
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "100%", lg: "50%" },
            p: 2,
          }}
        >
          <CardText
            title={item.title}
            text={item.text}
            background={item.background}
            backgroundPosition={item.backgroundPosition}
          />
        </Box>
      </Slide>

      {/* Imagen lateral con Grow */}
      <Grow in timeout={900}>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "60%", sm: "45%", lg: "40%" },
            height: { xs: 150, sm: 210, lg: "auto" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: 2,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          <ImageRotation1 src={item.image} alt={item.title} />
        </Box>
      </Grow>
    </Box>
  );
}
