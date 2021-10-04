import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { PassContext } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <PassContext>
      <App />
    </PassContext>
  </React.StrictMode>,
  document.getElementById("root")
);
