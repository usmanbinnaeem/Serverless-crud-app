import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <div>
    <App name={<strong>Usman</strong>} date={7 + ",June" + 2020} />,
  </div>,
  document.getElementById("root")
);
