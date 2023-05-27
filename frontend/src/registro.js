import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [token, setToken] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/usuarios/registro", { username, email, password, confirmation })
      .then((response) => {
        console.log(response.data);
        //redirigir a la página de inicio de sesión
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="wrapper"  style={{
      display: "flex"
  }}> 
      <div className="registerContainer"   style={{width: "50%"}}>

        <div className="containerForm" style={{display:"grid"}}>
           <img src = "./static/sumerios.jpg" style = {{
    width: "400px",
    margin: "auto",
    padding: "40px",
  }}></img>
          <h2>Registro de Usuario</h2>
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
      <div style={{
        width: "50%", 
        backgroundImage: "url('./static/Lateral.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        }}>
        
      </div>
    </div>
  );
}

export default Register;
