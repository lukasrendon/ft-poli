import { Route } from "react-router-dom";
import GestionTareas from "../pages/gestionTareas";
import Register from "../components/registro/componenteRegistro";

export const Rutas = () => (
  <Route path="rutas">
    <Route path="gestionTareas" element={<GestionTareas />} />
    <Route path="registro" element={<Register />} />
  </Route>
);
