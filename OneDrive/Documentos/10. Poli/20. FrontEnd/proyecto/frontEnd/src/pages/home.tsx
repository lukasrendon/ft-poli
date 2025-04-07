import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import CardItem from "../shared/cardItem";
import { MdPerson, MdGroup, MdWarning } from "react-icons/md";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const options = [
    {
      id: 1,
      title: "Gestión de Usuarios",
      description:
        "Gestiona la distribución de usuarios",
      icon: <MdPerson size={40} color="#3085d6" />,
      color: "#e1efff",
      route: "/rutas/registro",
    },
    {
      id: 2,
      title: "Organizador de tareas",
      description:
        "Permite la gestión de tareas",
      icon: <MdGroup size={40} color="#e67e22" />,
      color: "#fbe8d3",
      route: "rutas/gestionTareas",
    },

  ];

  return (
      <div className="containerHome">
        <div className="gridHome">
          {options.map((option) => (
            <CardItem key={option.id} {...option} onClick={() => navigate(option.route)} />
          ))}
        </div>
      </div>
  );
};

export default Home;
