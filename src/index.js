import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PositionProvider } from "./Components/Context/Position";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PositionProvider>
        <App />
      </PositionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
