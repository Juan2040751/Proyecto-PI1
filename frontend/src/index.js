
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import App from "./app";
import Register from "./registro";
import Login from "./login";

const CheckAuthentication = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged !== 'true') {
      navigate('/login');
      console.log(isLogged);
    }    
  }, [navigate]);

  return children;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CheckAuthentication><App /></CheckAuthentication>} />
      <Route path="/registro" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
