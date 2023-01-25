import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import axios from "axios";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token") || "";
  return config;
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
