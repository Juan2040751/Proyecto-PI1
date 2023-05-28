import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Html } from "@react-three/drei";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios
      .post("https://pi1-backend.onrender.com/usuarios/registro", {
        username,
        email,
        password,
        confirmation,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Registration successful.") {
          setExito("Te has registrado exitosamente");
          setTimeout(() => {
            navigate("/");
          }, 2200);
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <>
      <Html fullscreen>
        <div className="wrapper containerFlex">
          <div className="registerContainer">
            <div className="containerForm">
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
                <button type="submit" className="btn btn-primary">
                  Registrarme
                </button>
              </form>
            </div>
          </div>
        </div>
      </Html>
    </>
  );
}

export default Register;
