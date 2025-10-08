import type { Route } from "../+types/about";

import CardText from "~/atomic_design/molecules/cards/card_text";

import TimeLine from "~/atomic_design/organisms/time_lines/time_line";

import ImageRotation1 from "~/atomic_design/atoms/images/image_rotation1";

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

export function meta({}: Route.MetaArgs) {
  return [{ title: "nosotros" }, { name: "description", content: "about" }];
}

const events = [
  {
    title: "Fundación",
    text: "Comenzamos con amigos...",
    background: fondo1,
    backgroundPosition: "top right",
  },
  {
    title: "Primer Torneo",
    text: "20 jugadores participaron...",
    background: fondo1,
    backgroundPosition: "top right",
  },
  {
    title: "Expansión",
    text: "Abrimos nueva sede...",
    background: fondo1,
    backgroundPosition: "top right",
  },
  {
    title: "Expansión",
    text: "Abrimos nueva sede...",
    background: fondo1,
    backgroundPosition: "top right",
  },
  {
    title: "Expansión",
    text: "Abrimos nueva sede...",
    background: fondo1,
    backgroundPosition: "top right",
  },
  {
    title: "Expansión",
    text: "Abrimos nueva sede...",
    background: fondo1,
    backgroundPosition: "top right",
  },
];

const aboutData = [
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
      <div className="outline outline-2 outline-blue-500 sm:outline-green-500 md:outline-red-500 lg:outline-yellow-500 xl:outline-purple-500">
        Caja de prueba
      </div>
      {aboutData.map((item, index) => (
        <div
          key={item.title}
          className={`relative flex flex-col lg:flex-row items-center justify-between p-0 lg:p-8 min-h-[300px] ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* Imagen de fondo con opacidad */}
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{ backgroundImage: `url(${item.image})` }}
          />

          {/* Card */}
          <div className="relative w-full lg:w-2/4 p-4 pb-6 lg:p-4">
            <CardText
              title={item.title}
              text={item.text}
              background={item.background}
              backgroundPosition={item.backgroundPosition}
            />
          </div>

          {/* Imagen lateral */}
          <div
            className="relative w-1/4 lg:w-2/4  h-[130px] sm:h-[210px] lg:h-auto flex justify-center items-center p-1"
            style={{ userSelect: "none", pointerEvents: "none" }}
          >
            <ImageRotation1 src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
      <h2>Historia de la Comunidad</h2>
      <TimeLine events={events} />
    </section>
  );
}
