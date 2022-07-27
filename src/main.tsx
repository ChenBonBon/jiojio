import { ConfigProvider } from "joy";
import "joy/dist/style.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ConfigProvider.config({
  theme: {
    variables: {
      "btn-border-radius": "16px",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
