import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

import "antd/dist/antd.min.css";
import "./styles/index.scss";

ReactDOM.render(
  <BrowserRouter basename="/React-Router-Custom-Prompt">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
