import React, { Component } from "react";
import { connect } from "react-redux"; //Will need to use mapStateToProps & mapDispatchToProps
import * as actions from "../actions/actions"; //Get all actions from actions folder;
import Message from "../components/Message.jsx"; //import child component (Message);
import TableHead from "../components/TableHead.jsx";
import Analytics from "../components/Analytics.jsx"; //import child component (Analytics);

//Grab messageArray from state for props to use;
const mapStateToProps = store => ({
  messageArr: store.messageArray,
  view: store.view
});

//Initialize method for props to use;
const mapDispatchToProps = dispatch => ({
  socketMessage: data => dispatch(actions.addMessage(data)),
  setView: view => dispatch(actions.setView(view))
});

const handleClick = (event, props, view) => {
  event.preventDefault();
  props.setView(view);
}

const handleView = (props) => {
  if (props.view === "table") {
    const infoHolder = [];
    //Destructure messageArr from this.props;
    const { messageArr } = props;

    //Loop through each element inside messageArr (which is an object and send it down to child components);
    messageArr.forEach((el, index) => {
      //el = data object we pushed in. => send it down into the child component as a property/attribute;
      infoHolder.push(<Message key={`${el}` + index} info={el} />);
    })
    /*
    We want every new request to be on the top when we render, 
    therefore we want to reverse the array because otherwise every new request will be on the bottom
    */
    infoHolder.reverse();
    return (
      <div>
        <TableHead />
        {infoHolder}
      </div>
    );
  }
  else {
    return (
      <Analytics />
    );
  }
}

//Created Class component called Connection => THIS IS OUR MAIN CONTAINER TO RENDER;
class Connection extends Component {
  //Need constructor to send props down into child components;
  constructor(props) {
    super(props);
  }

  //Lifecycle method to connect WebSocket with front-end;
  componentDidMount() {
    //Connect to port 2000 WebSocket;
    const socket = new WebSocket("ws://localhost:2000");

    //Added eventListener to listen for any data coming inside websocket server;
    socket.addEventListener('message', (event) => {
      //Send data received to reducer function;
      this.props.socketMessage(JSON.parse(event.data));
    });
  }

  render() {
    const view = handleView(this.props);
    return (
      <div>
        <img src="../Webp.net-resizeimage.png" />
        <div id="switch-container">
          <button onClick={event => handleClick(event, this.props, "table")}>Table View</button>
          <button onClick={event => handleClick(event, this.props, "analytics")}>Analytics</button>
        </div>
        <div id="title-container">
          <h1 id="title">Fetch Me If You Can</h1>
          <p id="about">Your favorite live server visualizer</p>
        </div>
        {view}
      </div>
    );
  }
}

//Needed to use mapStateToProps & mapDispatchToProps then export Main Container;
export default connect(mapStateToProps, mapDispatchToProps)(Connection);
