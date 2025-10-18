import type { Route } from "../+types/about";

import TimeLine from "~/atomic_design/organisms/time_lines/time_line";

import buster from "app/src/images/bustersin fondo2.png";

import clow from "app/src/images/clowSinFondo.png";

import ballena from "app/src/images/beys/ballena.png";

import shark from "app/src/images/shark.png";

import impact from "app/src/images/impact.png";

import shinoby from "app/src/images/shinoby.png";

import brave from "app/src/images/brave.png";

import fondo6 from "app/src/images/background/decorativoFondo6.svg";

import fondo5 from "app/src/images/background/decorativoFondo5.svg";

import fondo4 from "app/src/images/background/decorativoFondo4.svg";

import fondo3 from "app/src/images/background/decorativoFondo3.svg";

import fondo2 from "app/src/images/background/decorativoFondo2.svg?url";

import fondo1 from "app/src/images/background/decorativoFondo1.svg?url";
import { Typography } from "@mui/material";
import TextModuleRotationImage from "~/atomic_design/organisms/modules/text_module_rotation_image";

export function meta({}: Route.MetaArgs) {
  return [{ title: "nosotros" }, { name: "description", content: "about" }];
}

const events: TextImageItem[] = [
  {
    title: "Origen",
    text: "Antes de Beyblade Cali, se creó la iniciativa Beyblade Colombia el 14 de octubre de 2022, con el objetivo de reunir a los bladers de todo el país en una comunidad unificada.",
    background: fondo1,
    image: "",
    backgroundPosition: "top right",
  },
  {
    title: "Inicio de BeyCali",
    text: "Con la comunidad unificada de BeyColombia, se empezaron a segmentar comunidades específicas para cada ciudad. Dentro de estas, se creó la comunidad de BeyCali el 8 de enero de 2024.",
    background: fondo1,
    image: "",
    backgroundPosition: "top right",
  },
  {
    title: "Primer torneo",
    text: "El 2 de junio de 2024 se realizó el primer torneo organizado por BeyCali, enfocado en Beyblade X, en el centro comercial Limonar.",
    background: fondo1,
    image: "",
    backgroundPosition: "top right",
  },
  {
    title: "Primera liga",
    text: "En enero de 2025 se dio inicio a la primera liga organizada por BeyCali, con el objetivo de fortalecer el ámbito competitivo dentro de la comunidad.",
    background: fondo1,
    image: "",
    backgroundPosition: "top right",
  },
  {
    title: "Dangeon",
    text: "El 6 de abril de 2025 se logró obtener el apoyo de Dangeon como tienda física, la cual nos brindó un espacio para realizar todas las actividades relacionadas con BeyCali.",
    background: fondo1,
    image: "",
    backgroundPosition: "top right",
  },
  {
    title: "El consejo",
    text: "El 22 de abril de 2025 se definió un grupo de personas encargadas de administrar la comunidad.",
    background: fondo1,
    image: "",
    backgroundPosition: "top right",
  },
  {
    title: "Camino al nacional",
    text: "El 4 de mayo de 2025 se inició el ranking local de Cali, el cual dio pie al farmeo de puntos para la clasificación a la liga y a la copa nacional, que empezó a organizarse entre los líderes de todas las ciudades.",
    background: fondo1,
    image: "",
    backgroundPosition: "top right",
  },
  {
    title: "Primer formato de juego creado en Colombia",
    text: "El 28 de mayo de 2025 se creó el primer formato de Beyblade diseñado en Colombia, llamado Blue, desarrollado por Michael. Este formato impulsó la creación de distintos modos de juego y mecánicas que se aplicaron posteriormente.",
    background: fondo1,
    image: "",
    backgroundPosition: "top right",
  },
  {
    title: "Primera participación en un evento geek",
    text: "El 8 de junio de 2025 se logró la participación de BeyCali en el evento geek Shinanime, con el apoyo de Fejuca. En este evento se establecieron contactos para futuras colaboraciones y participaciones similares.",
    background: fondo1,
    image: "",
    backgroundPosition: "top right",
  },
  {
    title: "Definición de reglas y formatos",
    text: "El 4 de julio de 2025 se estableció la documentación oficial de Beyblade Cali, dentro de la cual se definió el sistema de torneos estándar junto a su respectivo reglamento.",
    background: fondo1,
    image: "",
    backgroundPosition: "top right",
  },
];

const aboutData: TextImageItem[] = [
  {
    title: "Propósito",
    text: "Unir a los bladers de Cali y sus alrededores en un espacio donde puedan competir, aprender y compartir la pasión por el Beyblade.",
    image: buster,
    background: fondo6,
    backgroundPosition: "top right",
  },
  {
    title: "Misión",
    text: "Organizar torneos, encuentros y actividades que promuevan el juego justo, la diversión y la competitividad, fortaleciendo la comunidad de bladers en Cali y creando oportunidades para emprendimientos locales promoviendo la economía del sector.",
    image: clow,
    background: fondo4,
    backgroundPosition: "bottom left",
  },
  {
    title: "Visión",
    text: "Convertirnos en la comunidad líder de Beyblade en Colombia, reconocida por la calidad de su organización, creatividad y profesionalismo para inspirar a nuevas generaciones de bladers y ser un referente a nivel mundial.",
    image: ballena,
    background: fondo3,
    backgroundPosition: "top left",
  },
  {
    title: "Valores",
    text: `🔴Respeto: todos los jugadores son bienvenidos, sin importar edad, experiencia o género.
🔴Competitividad sana: buscamos que cada duelo sea justo y emocionante.
🔴Diversión: la prioridad es que cada evento sea una experiencia inolvidable.
🔴Comunidad: promovemos la amistad y el apoyo mutuo entre bladers.
🔴Pasión: vivimos el Beyblade con energía, creatividad y compromiso.`,
    image: shark,
    background: fondo5,
    backgroundPosition: "bottom left",
  },
  {
    title: "origen",
    text: "beycali nacio por el gusto al juego byeblade, oficialmente beycali nacio el 8 de enero del 2024 de la mano de lejo como un trabajo conjunto con la comunidad en bogota los cuales crearon una pagina de whatsap de beyblade colombia, mas adelante a finales de ese mismo año se instauraria el concejo de beyCali como administradores de la comunidad la cual construyo lo que hoy se conoce como bey cali",
    image: impact,
    background: fondo1,
    backgroundPosition: "top left",
  },
  {
    title: "Tono de comunicación",
    text: "Cercano, juvenil y motivador.\nMensajes cortos, dinámicos y enérgicos.\nSiempre resaltando la unión de la comunidad y la competitividad.",
    image: brave,
    background: fondo2,
    backgroundPosition: "bottom left",
  },
  {
    title: "Slogan",
    text: "La ciudad nos hizo vecinos, los beys nos hicieron hermanos",
    image: shinoby,
    background: fondo3,
    backgroundPosition: "end right",
  },
];

export default function About() {
  return (
    <section className="w-full flex flex-col">
      {aboutData.map((item, index) => (
        <TextModuleRotationImage key={item.title} item={item} index={index} />
      ))}
      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        Historia de la Comunidad
      </Typography>
      <TimeLine events={events} />
    </section>
  );
}
