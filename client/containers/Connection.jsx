import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Message from "../components/Message.jsx";

const mapStateToProps = store => ({
  // messages was plural, changed to message
  message: store.messageArray
});

const mapDispatchToProps = dispatch => ({
  // return {
  socketMessage: data => dispatch(actions.addMessage(data))
  // }
  // missing outer open/close parens, added that in, see mapStateToProps to see how it needs the open parens
});

class Connection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('this.props inside componentdidmount', this.props);
    // this.props.socketMessage("HELLO");
    // console.log("component did mount");
    const socket = new WebSocket("ws://localhost:2000");

    socket.addEventListener ('message', (event) => {
      // console.log("INSIDE SOCKET METHOD", this.props);
      // FileReader turns object blobs back into readable text. 
      const blobReader = new FileReader();
      blobReader.onload = (e) => { 
        console.log('target inside blobreader.onload', e.target.result);
      }
      console.log('read as text inside didmount', blobReader.readAsText(event.data));
     ;
      // return this.props.socketMessage(event);
    });
  }
  render() {
    const divBlobArr = [];
    for (let i = 0; i < this.props.message.length; i += 1) {
      divBlobArr.push(<Message key={i} message={this.props.message[i]} />);
    }
    // return <div>{this.props.message}</div>;
    return <div>{divBlobArr}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connection);
