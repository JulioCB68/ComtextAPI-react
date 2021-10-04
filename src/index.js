import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FrutaProvider } from "./context/index";


ReactDOM.render(
  <React.StrictMode>
    <FrutaProvider>
      <App />
    </FrutaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
