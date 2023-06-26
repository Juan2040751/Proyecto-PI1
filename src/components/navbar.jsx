import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, AvatarGroup, Box, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import "intersection-observer";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import logoapp from "../images/Sumerios.jpg";
/**
 * Componente Section
 *
 * Este archivo representa el componente de una sección de la barra de navegación.
 * Cumple con los requisitos de la Historia de Usuario PI1-8,
 * donde se espera que el usuario tenga una barra de navegación que le permita acceder a cada sección de la aplicación.
 * @param {string} page - Página asociada a la sección.
 * @param {object} reference - Referencia al elemento HTML.
 * @returns {JSX.Element} - Elemento JSX que representa una sección de la barra de navegación.
 */
function Section({ page, reference, isVisible, onClick }) {
  const handleClick = () => {
    reference?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Button
      onClick={onClick ? onClick : handleClick}
      style={{
        animationDuration: "1s",
        backgroundColor: isVisible ? "#0d6efd" : "transparent",
        color: isVisible ? "white" : "black",
      }}
      sx={{
        my: 2,
        color: "black",
        display: "block",
        fontSize: 14,
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#e0e0e0",
        },
      }}
    >
      {page}
    </Button>
  );
}
/**
 * Transforma un string a un color
 * @param {*} string cadena a convertir
 * @returns color
 */
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

/**
 * Crea una configuracion para el icono de un usuario
 * @param {*} name - Nombre del usuario
 * @returns las propiedades del avatar de un usuario en base a su nombre
 */
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children:
      name.split(" ").length > 1
        ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
        : `${name.split(" ")[0][0]}`,
  };
}

/**
 * Componente NavbarApp
 *
 * Este archivo representa el componente de la barra de navegación presente en cada sección de la aplicación.
 * Cumple con los requisitos de la Historia de Usuario PI1-7,
 * donde se espera que el usuario tenga una barra de navegación presente en cada sección de la aplicación
 * para poder identificar en qué sección de la aplicación se encuentra.
 *
 * @param {function} window - Función que devuelve el objeto window (opcional).
 * @param {Array} references - Array de referencias a las secciones de la aplicación.
 * @param {object} LandingRef - Referencia a la sección principal de la página (opcional).
 * @returns {JSX.Element} - Elemento JSX que representa el componente de la barra de navegación.
 */
function NavbarApp({ window, references, LandingRef, scroll }) {
  const user =
    localStorage.getItem("user") !== null
      ? localStorage.getItem("user")
      : "User";
  const pages = ["Destacado", "Arquitectura", "Museo", "Gastronomía"];
  const actualPage = [
    0.2 < scroll && scroll < 0.4,
    0.4 < scroll && scroll < 0.6,
    0.6 < scroll && scroll < 0.8,
    0.8 < scroll,
  ];

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar color="inherit" sx={{ height: 60 }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ height: 0, justifyContent: "center" }}>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: "left",
                marginLeft: "2%",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  LandingRef?.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <LazyLoadImage
                  src={logoapp}
                  alt="logo"
                  effect="blur"
                  style={{ height: 40, marginRight: 8 }}
                />
              </Button>
            </Box>

            <Box
              sx={{
                flexGrow: 3,
                display: { xs: "flex", md: "flex" },
                justifyContent: "right",
              }}
            >
              {pages.map((page, index) => (
                <Section
                  key={page}
                  page={page}
                  reference={references[index]}
                  isVisible={actualPage[index]}
                />
              ))}
              <AvatarGroup style={{ alignItems: "center" }}>
                <Avatar {...stringAvatar(user)} />
                <Avatar onClick={handleLogout} className="logout-avatar">
                  <LogoutIcon className="logout-icon-avatar" />
                </Avatar>
              </AvatarGroup>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default NavbarApp;
