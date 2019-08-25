import React from "react";
//placeholder information to construct messages div. REVISE
const Message = props => {
  return (
    <div id="msgBox">
      <span id="header"><h2>Request Type: {props.info.type} </h2></span>
      <div id="reqDiv">
        <div><h3>Header</h3></div>
        <pre id="child-header"><h3> {JSON.stringify(props.info.header, undefined, 2)}</h3></pre>
        <div><h3>Body</h3></div>
        <pre id="child-body"><h3> {JSON.stringify(props.info.body, undefined, 2)}</h3></pre>
        <div><h3>Cookies</h3></div>
        <pre id="child-cookies"> {JSON.stringify(props.info.cookies, undefined, 2)}</pre>
      </div>
    </div>
  )
};

export default Message;
