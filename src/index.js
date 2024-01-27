import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
//didnt knew about wether its specified to use redux or redux toolkit so went with redux

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
