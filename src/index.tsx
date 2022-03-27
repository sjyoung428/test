import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkMode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
