import type { Route } from "../+types/beys";
import UnderConstruction from "~/atomic_design/templates/under_constructions/under_construction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "nosotros" },
    { name: "description", content: "about" },
  ];
}

export default function Beys() {
  return  <UnderConstruction/>;

}
