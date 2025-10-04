import type { Route } from "../+types/players";
import UnderConstruction from "~/components/under_construction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "nosotros" },
    { name: "description", content: "about" },
  ];
}

export default function About() {
   return  <UnderConstruction/>;
}
