import React, { component } from 'react';
import Connection from './containers/Connection.jsx';
// import socket from './actions/websockets';

class App extends React.Component {
  // THIS IS A PRESENTATIONAL COMPONENT.
  // DO WE EVEN NEED THIS IF WERE MANAGING STATE IN THE STORE??????
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <Connection />
      </div>
    );
  }
}

export default App;
