import { Box, Button, IconButton } from "@mui/material";
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
import LogoutIcon from "@mui/icons-material/Logout";
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

              <IconButton
                aria-label="Logout"
                onClick={handleLogout}
                style={{ margin: "10px" }}
              >
                <LogoutIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default NavbarApp;
