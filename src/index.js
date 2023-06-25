import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/app.scss";
import ColorModeSwitcher from "./ColorModeSwitcher";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeSwitcher />
    <App />
  </React.StrictMode>
);
