import React, { Component } from "react";
import Connection from "./containers/Connection.jsx";
// import socket from './actions/websockets';

class App extends Component {
  // THIS IS A PRESENTATIONAL COMPONENT.
  // DO WE EVEN NEED THIS IF WERE MANAGING STATE IN THE STORE??????
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div id="outerBox">
        <Connection />
      </div>
    );
  }
}

export default App;
