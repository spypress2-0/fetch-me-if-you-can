import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

// const mapStateToProps = store => ({
//   collection: store.collection
// });

const mapStateToProps = (store) => ({
  messages: store.message,
  collection: store.collection,
});

const mapDispatchToProps = (dispatch) => {
  return {
    socketMessage: (data) => dispatch(actions.addMessage),
  };
};

class Connection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const socket = new WebSocket('ws://localhost:2000');
    socket.addEventListener('open', (event) => {
      socket.send('Hello Server');
    });
    socket.addEventListener('message', (event) => {
      this.props.socketMessage(event.data);
    });
  }

  render() {
    return <div>{this.props.message}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Connection);
