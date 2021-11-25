import React from "react";
import reactDom from "react-dom";

import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";

import { StateContextProvider } from "./Context/ContextProvider";

import App from "./App";
import "./global.css";

reactDom.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>,
  document.getElementById("root")
);
