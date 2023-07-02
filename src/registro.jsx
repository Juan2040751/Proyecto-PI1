import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Backdrop, CircularProgress } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";

/**
 * Componente Register
 *
 * Este componente representa la página de registro de usuarios.
 * Forma parte de la historia de usuario PI1-19: Como usuario, deseo poder crear una cuenta en
 * la página para acceder a la información exclusiva que se presenta en ella.
 */
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");
  const [openB, setOpenB] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setOpenB(true);
    await axios
      .post("/api/usuarios/registro", {
        username,
        email,
        password,
        confirmation,
      })
      .then(({ data }) => {
        if (data.message === "Registration successful.") {
          setExito("Te has registrado exitosamente");
          localStorage.setItem("isLogged", "true");
          localStorage.setItem("userId", data.id);
          localStorage.setItem("user", data.username);
          localStorage.setItem("session", JSON.stringify(data.session))
          navigate("/");
        } else {
          setError(data.message);
          localStorage.setItem("isLogged", "true");
        }
      })
      .catch((error) => {
        setError("Ocurrió un error. Por favor, inténtelo otra vez.");
      });
    setOpenB(false);
  };
  useEffect(() => {
    const conectServer = async () => {
      await axios.get("/api/usuarios/").catch((error) => {
        const { response } = error;
        console.log(response);
      });
    };
    conectServer();
  }, []);

  return (
    <>
      <div
        className="wrapper"
        style={{
          display: "flex",
        }}
      >
        <div className="regLogContainer" style={{ width: "50%" }}>
          <div className="containerForm" style={{ display: "grid" }}>
            <LazyLoadImage
              src="./static/Sumerios.jpg"
              style={{
                width: "400px",
                margin: "auto",
                padding: "40px",
              }}
              effect="blur"
              loading="lazy"
              alt="sumerios app logo"
            ></LazyLoadImage>
            <h2>Registro de Usuario</h2>
            {error && <div className="error-alert"> {error} </div>}
            {exito && (
              <div className="success-alert alert alert-success text-center">
                {" "}
                {exito}{" "}
              </div>
            )}
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Nombre de usuario:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmation" className="form-label">
                  Confirmar contraseña:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmation"
                  value={confirmation}
                  onChange={(e) => setConfirmation(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success w-100 mb-3">
                Registrarme
              </button>
              <div className="text-center">
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-primary mb-3"
                >
                  Iniciar sesión
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

export default Register;
