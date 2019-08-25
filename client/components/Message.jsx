import React from "react";
//placeholder information to construct messages div. REVISE
const Message = props => {
  return (
    <div>
      <pre className="child-body">{JSON.stringify(props.info.body, undefined, 2)}</pre>
      <pre className="child-header">{JSON.stringify(props.info.header, undefined, 2)}</pre>
      <pre className="child-cookies">{JSON.stringify(props.info.cookies, undefined, 2)}</pre>
    </div>
  )
};

export default Message;
