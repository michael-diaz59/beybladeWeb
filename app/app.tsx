import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Calendar from "./routes/calendar";
import Players from "./routes/players";
import Layout from "./routes/_layout";
import Teams from "./routes/teams";
import Beys from "./routes/beys";
import Store from "./routes/store";

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
