import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import serviceProxy from "./service-proxy";

ReactDOM.render(
  <App/>, document.getElementById("app"));
serviceProxy.loadResources();
