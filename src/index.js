import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Store from './Store';

const store = new Store();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  rootElement
);
