import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./app";
import Login from "./login";
import Register from "./registro";
import "./style.css";
import Animation from "./components/animation";
/**
 * Componente CheckAuthentication
 *
 * Este componente se encarga de verificar la autenticación del usuario y redirigirlo al inicio de sesión en caso de no haberlo hecho.
 * Cumple con los requisitos de la Historia de Usuario PI1-17.
 *
 * @param {object} children - Componentes hijos a renderizar.
 * @returns {JSX.Element} - Elemento JSX que representa el componente CheckAuthentication.
 */
const CheckAuthentication = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return <Suspense fallback={Animation}>{children}</Suspense>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <CheckAuthentication>
            <App />
          </CheckAuthentication>
        }
      />
      <Route
        path="/registro"
        element={
          <Suspense fallback={Animation}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={Animation}>
            <Login />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);
