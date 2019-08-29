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
    <img src="../output-onlinepngtools_1_1_64x64.png" />
    <button>Table</button>
    <button>Analytics</button>
    <h1 id='title'>Fetch Me If You Can</h1>
    <p id='about'>Your favorite live server visualizer</p>
    <App />
  </Provider>,
  document.querySelector("#root")
);
