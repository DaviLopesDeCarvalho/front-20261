import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Erro404 from "./pages/Erro404";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
    <Route element={<Layout />}>{}
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Erro404 />} />
    </Route>
    </Routes>
  )
}

export default App;