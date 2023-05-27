import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./app";
import Landing from './components/landing';
import Featured from "./components/featured_event";
import EventFour from "./components/events/event_four";
import EventThree from "./components/events/event_three"
import EventOne from "./components/events/event_one"
import EventTwo from "./components/events/event_two"
import Register from "./registro";
import Login from "./login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <App>
            <Landing/>
          </App>
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
          <App>
            <Featured />
          </App>
        }
      />
      <Route
        path="/event_one"
        element={
          <App>
            <EventOne />
          </App>
        }
      />
      <Route
        path="/event_two"
        element={
          <App>
            <EventTwo />
          </App>
        }
      />
      <Route
        path="/event_three"
        element={
          <App>
            <EventThree />
          </App>
        }
      />
      <Route
        path="/event_four"
        element={
          <App>
            <EventFour />
          </App>
        }
      />
    </Routes>
  </BrowserRouter>
);
