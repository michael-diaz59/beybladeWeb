import type { Route } from "../+types/store";
import UnderConstruction from "~/atomic_design/templates/under_constructions/under_construction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "nosotros" },
    { name: "description", content: "about" },
  ];
}

export default function About() {
  return  <UnderConstruction/>;
}