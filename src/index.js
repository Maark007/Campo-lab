import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/home";
import GlobalStyles from "./globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
