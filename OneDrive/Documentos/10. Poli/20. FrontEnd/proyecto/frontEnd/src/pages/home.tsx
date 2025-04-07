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
      title: "Lider APP",
      description:
        "Gestiona la distribución de casos, asegurando que cada solicitante reciba atención adecuada y a tiempo.",
      icon: <MdPerson size={40} color="#3085d6" />,
      color: "#e1efff",
      route: "/liderApp/BandejaCasosLiderApp",
    },
    {
      id: 2,
      title: "Profesional APP",
      description:
        "Supervisión y evaluar la información de los solicitantes, brindando acompañamiento y asegurando el cumplimiento de su atención.",
      icon: <MdGroup size={40} color="#e67e22" />,
      color: "#fbe8d3",
      route: "profesionalApp/BandejaCasosProfesionalApp",
    },
    {
      id: 3,
      title: "CERREM Mujeres",
      description:
        "Atención y seguimiento especializado a casos de mujeres en situación de vulnerabilidad, asegurando respuestas efectivas y oportunas.",
      icon: <MdWarning size={40} color="#d9534f" />,
      color: "#fdecea",
      route: "/cerremMujeres/BandejaCasosCerrem",
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
