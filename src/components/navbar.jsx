import { Box, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import "intersection-observer";
import React from "react";
import { useIsVisible } from "react-is-visible";
import logoapp from "../images/Sumerios.jpg";
function Section({ page, reference }) {
  const isVisible = useIsVisible(reference);
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
function NavbarApp({ window, references, LandingRef }) {
  const pages = ["Destacado", "Museo", "Gastronomía"];

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
                <Section key={page} page={page} reference={references[index]} />
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default NavbarApp;
