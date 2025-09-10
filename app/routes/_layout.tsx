import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store-core";
import { toggleTheme } from "../store/themeSlice";
import { Switch } from "@mui/material";

export default function Layout() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <div>
      {/* 🔹 Header común */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/about" className="hover:underline">Quiénes somos</Link>
          <Link to="/calendar" className="hover:underline">Calendario</Link>
          <Link to="/players" className="hover:underline">Jugadores</Link>
          <Link to="/teams" className="hover:underline">Equipos</Link>
          <Link to="/beys" className="hover:underline">Beys</Link>
          <Link to="/store" className="hover:underline">Tienda</Link>
        </nav>

        {/* 🔹 Switch de tema */}
        <div className="flex items-center gap-2">
          <span>{mode === "light" ? "☀️" : "🌙"}</span>
          <Switch
            checked={mode === "dark"}
            onChange={() => dispatch(toggleTheme())}
          />
        </div>
      </header>

      {/* 🔹 Aquí React Router renderiza la página hija */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}