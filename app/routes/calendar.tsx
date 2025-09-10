import type { Route } from "./+types/calendar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "calendar" },
  ];
}

export default function Calendar() {
  const eventos = [
    { fecha: "2025-09-15", nombre: "Torneo Bogotá" },
    { fecha: "2025-10-05", nombre: "Torneo Medellín" },
    { fecha: "2025-11-02", nombre: "Torneo Cali" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Calendario de torneos</h2>
      <ul className="space-y-2">
        {eventos.map((e, i) => (
          <li key={i} className="p-2 bg-white shadow rounded">
            <strong>{e.fecha}</strong> - {e.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}
