import { Box, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import "intersection-observer";
import React, { useEffect } from "react";
import { useIsVisible } from "react-is-visible";
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
function Section({ page, reference, isVisible }) {
  const handleClick = () => {
    reference?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Button
      onClick={handleClick}
      style={{
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
  const pages = ["Destacado", "Museo", "Gastronomía"];
  const actualPage = [
    0.2 < scroll && scroll < 0.5,
    0.5 < scroll && scroll < 0.8,
    0.8 < scroll,
  ];
  console.log(actualPage, scroll);
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

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
                <img
                  src={logoapp}
                  alt="logo"
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default NavbarApp;
