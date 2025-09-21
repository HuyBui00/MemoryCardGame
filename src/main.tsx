import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
