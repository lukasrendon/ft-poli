import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Rutas } from "./routes/rutas";
// Componentes
import Home from "./pages/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
// Estilos
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {Rutas()}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
