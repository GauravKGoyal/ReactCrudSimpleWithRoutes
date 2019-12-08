import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./styles.css";
import { Route, HashRouter, BrowserRouter } from "react-router-dom";



// function App() {
//   return (
//     <div>

// sd
//     </div>
//   );
// }


const rootElement = document.getElementById("root");
ReactDOM.render(<HashRouter><App /></HashRouter> , rootElement);
