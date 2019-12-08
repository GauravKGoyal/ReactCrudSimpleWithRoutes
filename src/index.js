import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./styles.css";
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  rootElement
);
