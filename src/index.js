import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./assets/styles/main.scss";
import App from "./components/App";

// Render our App component in DOM
render(
  <StrictMode>
    {" "}
    <App />{" "}
  </StrictMode>,
  document.getElementById("root")
);
