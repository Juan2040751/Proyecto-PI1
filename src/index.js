import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import App from "./app";
import Landing from './components/landing';
import Featured from "./components/featured_event";
import EventFour from "./components/events/event_four";
import EventThree from "./components/events/event_three"
import EventOne from "./components/events/event_one"
import EventTwo from "./components/events/event_two"
import Register from "./registro";
import Login from "./login";
import { ScrollControls, Scroll } from "@react-three/drei";
import Home from "./home";

const CheckAuthentication = ({ children }) => {
  const navigate = useNavigate();
/*
  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged !== 'true') {
      navigate('/login');
    }    
  }, [navigate]);
*/
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
