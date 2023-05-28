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

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <CheckAuthentication>
            <App>
              <Landing/>
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
      
      <Route
        path="/featured"
        element={
          <CheckAuthentication>
            <App>
              <Featured />
            </App>
          </CheckAuthentication>
        }
      />

      <Route
        path="/event_one"
        element={
          <CheckAuthentication>
            <App>
              <EventOne />
            </App>
          </CheckAuthentication>
        }
      />

      <Route
        path="/event_two"
        element={
          <CheckAuthentication>
            <App>
              <EventTwo />
            </App>
          </CheckAuthentication>
        }
      />

      <Route
        path="/event_three"
        element={
          <CheckAuthentication>
            <App>
              <EventThree />
            </App>
          </CheckAuthentication>
        }
      />

      <Route
        path="/event_four"
        element={
          <CheckAuthentication>
            <App>
              <EventFour />
            </App>
          </CheckAuthentication>
        }
      />
    </Routes>
  </BrowserRouter>
);
