import { Routes, Route } from "react-router-dom";
import Home from "./routes/base/home";
import About from "./routes/base/about";
import Calendar from "./routes/base/calendar";
import Players from "./routes/base/players";
import Layout from "./routes/base/_base_layout";
import Teams from "./routes/base/teams";
import Beys from "./routes/base/beys";
import Store from "./routes/base/store";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/beys" element={<Beys />} />
        <Route path="/store" element={<Store />} />
      </Route>
    </Routes>
  );
}
