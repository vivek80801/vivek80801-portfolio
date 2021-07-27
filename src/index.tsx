import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { ThemeChangerProvider } from "./components/context";

render(
  <React.StrictMode>
    <Router>
      <ThemeChangerProvider>
        <App />
      </ThemeChangerProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
