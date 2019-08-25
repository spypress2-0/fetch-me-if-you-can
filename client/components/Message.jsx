import React from "react";
//placeholder information to construct messages div. REVISE
const Message = props => {
  return (
    <div id="msgBox">
      <pre className="header"><h2>Request Type: {props.info.type} </h2></pre>
      <div id="reqDiv">
        <pre className="child-header">Header: {JSON.stringify(props.info.header, undefined, 2)}</pre>
        <pre className="child-body"><h3>Body: {JSON.stringify(props.info.body, undefined, 2)}</h3></pre>
        <pre className="child-cookies">Cookies: {JSON.stringify(props.info.cookies, undefined, 2)}</pre>
      </div>
    </div>
  )
};

export default Message;
