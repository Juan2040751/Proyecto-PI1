
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./app";
import Register from "./registro";
import Login from "./login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
