export type RoutNav = {
  label: string;
  path: string;
};

export const baseAppBar: RoutNav[] = [
  { label: "Inicio", path: "/home" },
  { label: "Nosotros", path: "/about" },
  { label: "competitivo", path: "/calendar" },
  { label: "Tienda", path: "/store" },
];

const menuItems: RoutNav[] = [
  { label: "Inicio", path: "/" },
  { label: "Quiénes somos", path: "/about" },
  { label: "Calendario", path: "/calendar" },
  { label: "Jugadores", path: "/players" },
  { label: "Equipos", path: "/teams" },
  { label: "Beys", path: "/beys" },
  { label: "Tienda", path: "/store" },
];

export const nameRoutesMap = new Map([
  ["/home", "Inicio"],
  ["/about", "Nosotros"],
  ["/calendar", "Competitivo"],
  ["/store", "Tienda"],
]);