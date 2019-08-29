import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./App.jsx";
import './styles.scss'

//Render for main App Component, that has store inside as an attibute inside it's Provider;
//Provides store to component;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
