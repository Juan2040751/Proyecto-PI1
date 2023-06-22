import { CircularProgress } from "@mui/material";
import React from "react";
import "./components.css";

/**
* Componente Animation
* Este archivo representa el componente de animación de carga que se muestra durante la carga inicial del recurso.
* Cumple con los requisitos de la Historia de Usuario PI1-24, donde se espera que se agregue una animación de carga
* durante la carga inicial del recurso para proporcionar una experiencia visual agradable al usuario mientras espera.
@returns {JSX.Element} - Elemento JSX que representa el componente de animación de carga.
*/
export default function Animation() {
  return <CircularProgress color="inherit" />;
}
