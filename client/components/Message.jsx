import React from "react";
//placeholder information to construct messages div. REVISE
const Message = props => {
  console.log(props.message)
  return <div id="message">{props.message.hello}</div>;
};

export default Message;
