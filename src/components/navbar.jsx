import { Box, Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";
import logoapp from "../images/Sumerios.jpg"

function NavbarApp({ window }) {
  const pages = ["Historia", "Ubicación", "Lengua", "Datos de interés"];

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (

    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar color="inherit" sx={{ height: 60 }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ height: 0, justifyContent: 'center' }}>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: "left",
                marginLeft: "2%",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 1,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "Tenor Sans, sans-serif",
                  fontWeight: 500,
                  color: "inherit",
                  textDecoration: "none",
                  textTransform: "none",
                  alignItems: "center",
                }}
              >
                <img src={logoapp} alt="logo" style={{ height: 40, marginRight: 8 }} />
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 3,
                display: { xs: "flex", md: "flex" },
                justifyContent: "right",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
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
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>

  );
}

export default NavbarApp;
