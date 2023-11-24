import React from "react";
import ReactDom from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

ReactDom.render(
  <div className="overview">
    {" "}
    <App defaultCity="New York" />
  </div>,
  document.querySelector("#weather")
);
