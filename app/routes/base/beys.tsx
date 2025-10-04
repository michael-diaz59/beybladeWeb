import type { Route } from "../+types/beys";
import UnderConstruction from "~/components/under_construction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "nosotros" },
    { name: "description", content: "about" },
  ];
}

export default function Beys() {
  return  <UnderConstruction/>;

}
