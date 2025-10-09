import { Routes, Route } from "react-router-dom";
import BaseLayout from "./routes/base/_base_layout";
import AuthLayout from "./routes/authentication/auth_layout";
import StoreLayout from "./routes/store/store_layout";
import Home from "./routes/base/home";
import About from "./routes/base/about";
import Calendar from "./routes/base/calendar";
import Players from "./routes/base/players";
import Teams from "./routes/base/teams";
import Beys from "./routes/base/beys";
import Store from "./routes/store/store";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/beys" element={<Beys />} />
      </Route>
      <Route path="/store" element={< StoreLayout />}>
        <Route path="/store" element={<Store />} />
      </Route>
       <Route path="/auth" element={< AuthLayout />}>
        
      </Route>
    </Routes>

    
  );
}
