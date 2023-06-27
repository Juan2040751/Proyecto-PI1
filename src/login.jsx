import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Backdrop, CircularProgress } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

/**
 * Componente Login
 *
 * Este componente representa la página de inicio de sesión de usuarios.
 * Forma parte de la historia de usuario PI1-20
 */

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [openB, setOpenB] = useState(false);
  const handleLogin = async (e) => {
    setOpenB(true);
    e.preventDefault();
    await axios
      .post("http://localhost:8000/usuarios/login", { email, password })
      .then(({ data }) => {
        if (data.message === "Login successful") {
          localStorage.setItem("isLogged", "true");
          localStorage.setItem("userId", data.id);
          localStorage.setItem("user", data.username);
          localStorage.setItem("session", JSON.stringify(data.session));
          navigate("/");
        } else {
          setError("Acceso inválido. Por favor, inténtelo otra vez.");
          localStorage.setItem("isLogged", "false");
        }
      })
      .catch((error) => {
        setError("Ocurrió un error. Por favor, inténtelo otra vez.");
      });
    setOpenB(false);
  };

  const closeError = () => {
    setError("");
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
        }}
      >
        <div className="regLogContainer" style={{ width: "50%" }}>
          <div
            className="containerForm"
            style={{
              display: "grid",
            }}
          >
            <LazyLoadImage
              src="./static/Sumerios.jpg"
              style={{
                width: "400px",
                margin: "auto",
                padding: "40px",
              }}
              effect="blur"
              alt="Sumerios"
            ></LazyLoadImage>
            <h2>Hey, bienvenido &#x1F44B;</h2>
            {error && (
              <div className="error-alert">
                {error}
                <button className="close-btn" onClick={closeError}>
                  X
                </button>
              </div>
            )}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Contraseña:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success w-100 mb-3">
                Iniciar sesión
              </button>
              <div className="text-center">
                <button
                  onClick={() => navigate("/registro")}
                  className="btn btn-primary mb-3"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            backgroundImage: "url('./static/Lateral.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openB}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default Login;
