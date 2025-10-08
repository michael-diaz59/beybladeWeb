import type { Route } from "../+types/home";
import UnderConstruction from "~/atomic_design/templates/under_constructions/under_construction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "home" },
    { name: "description", content: "bienvenido a beyblade cali" },
  ];
}

export default function Beys() {
  return  <UnderConstruction/>;

}
