import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./app";
import Home from "./home";
import Login from "./login";
import Register from "./registro";
import "./style.css";

const CheckAuthentication = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged !== 'true') {
      navigate('/login');
    }    
  }, [navigate]);

  return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <CheckAuthentication>
            <App>
              < Home />
            </App>
          </CheckAuthentication>
        }
      />

      <Route path="/registro" 
        element={
          <App>
            <Register />
          </App>
        } 
      />

      <Route path="/login" 
        element={
          <App>
            <Login />
          </App>
        
        } 
      />
    </Routes>
  </BrowserRouter>
);
