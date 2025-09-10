import type { Route } from "./+types/store";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "nosotros" },
    { name: "description", content: "about" },
  ];
}

export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Quiénes somos</h2>
      <p>
        Somos una comunidad de jugadores de Beyblade apasionados en Colombia,
        organizando torneos y fomentando la competencia sana.
      </p>
    </div>
  );
}