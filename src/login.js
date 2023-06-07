import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/usuarios/login", { email, password })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Login successful") {
          localStorage.setItem('isLogged', 'true');
          navigate("/");
        } else {
          setError("Acceso inválido. Por favor, inténtelo otra vez.");
          localStorage.setItem('isLogged', 'false');
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const closeError = () => {
    setError("");
  };

  return (
    <>

      <div className="" style={{
        display: "flex"
      }}>
        <div className="loginContainer"

          style={{ width: "50%" }}
        >
          <div className="containerForm" style={{
            display: "grid"
          }}>
            <img src="./static/Sumerios.jpg" style={{
              width: "400px",
              margin: "auto",
              padding: "40px",
            }}></img>
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
              <button
                type="submit" className="btn btn-success w-100 mb-3">
                Iniciar sesión
              </button>
              <div className="text-center">
                <button
                  onClick={() => navigate("/registro")}
                  className="btn btn-primary mb-3"
                >
                  Crear cuenta nueva
                </button>
              </div>
            </form>
          </div>
        </div>
        <div style={{
          width: "50%",
          backgroundImage: "url('./static/Lateral.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>

        </div>
      </div>

    </>
  );
}

export default Login;
