import type { Route } from "../+types/home";
import UnderConstruction from "~/components/under_construction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "home" },
    { name: "description", content: "bienvenido a beyblade cali" },
  ];
}

export default function Beys() {
  return  <UnderConstruction/>;

}
