import React from "react";
import TableHead from './TableHead.jsx';

/*
  Now each data we have access to inside this component is very unpleasing to the eye;
  Especially the body & header;

  ie: 
    Body = {
	    "MARK":"POPEYES",
	    "ANTHONY": "SANDWICH"
    }
  
    Header = {
      "content-type": "application/json",
      "user-agent": "PostmanRuntime/7.15.2",
      "accept": "",
      "cache-control": "no-cache",
      "postman-token": "b8eb9bfc-5606-4c75-9bac-f080984662cc",
      "host": "localhost:3000",
      "accept-encoding": "gzip, deflate",
      "content-length": "45",
      "connection": "keep-alive,
    }

    Visualizers are used to help the user visualize something they can't easily conceive;
    Therefore we want to parse this data and seperate each key and value pair so we can send them as innerHTML;
*/

const Message = props => {
  /*
    We need to grab what we need:
      We care about content.length, we care about 
  */

  //HEADER
  const headArr = []; //Initalize empty array to render
  const headerKeysArr = Object.keys(props.info.header);
  // Keys of Header
  const headerValuesArr = Object.values(props.info.header); // Values of Header
  //loop through each key;
  headerKeysArr.forEach((key, index) => {
    //push into initialize empty array a P TAG that seperates keys and values into a sentence w/ unique keys;
    headArr.push(
      <p key={`${key}` + index} className="header-data">
        {key} = {headerValuesArr[index]}
      </p>
    );
  });

  //BODY
  // Need to parse through due to nested objects and arrays inside body object.
  const flattenObject = object => {
    return Object.assign({}, ...function _flatten(objectBit, path = '') {
      return [].concat(
        ...Object.keys(objectBit).map(
          key => typeof objectBit[key] === 'object' ? _flatten(objectBit[key], path + '+') :
            ({ [`${path}+ ${key}`]: objectBit[key] })
        )
      )
    }(object));
  };

  const bodyArr = [];
  const newObj = flattenObject(props.info.body);
  const bodyKeysArr = Object.keys(newObj);
  const bodyValuesArr = Object.values(newObj);

  bodyKeysArr.forEach((key, index) => {
    bodyArr.push(<p key={`${key}` + index} className="body-data">{key} = {bodyValuesArr[index]}</p>);
  })
  //COOKIES
  const cookieArr = [];
  const cookieKeysArr = Object.keys(props.info.cookies);
  const cookieValuesArr = Object.values(props.info.cookies);
  cookieKeysArr.forEach((key, index) => {
    cookieArr.push(<p key={`${key}` + index} className="cookie-data">Name: {key} | Value: {cookieValuesArr[index]}</p>);
  });

  const newRow = {
    requestType: props.info.type,
    contentLength: props.info.header['content-length'],
    originalUrl: props.info.originalUrl
  }
  /*
    Here we have a main message container;
    This container is divided into 4 parts (Method-Types, Headers, Body, Cookies);
  */

  const statusArr = [
    [200, "OK"],
    [200, "OK"],
    [200, "OK"],
    [400, "Bad Request"],
    [200, "OK"],
    [200, "OK"],
    [404, "Not Found"],
    [200, "OK"],
    [200, "OK"],
    [500, "Internal Server Error"],
  ]

  const randomNumber = Math.floor(Math.random()*10)

  return (
    <table border = '1' id='table-body'>
      <tbody>
        <tr>
          <td>{newRow.requestType}</td>
          <td>{newRow.contentLength}</td>
          <td>{newRow.originalUrl}</td>
          <td>{statusArr[randomNumber][0]}</td>
          <td>{statusArr[randomNumber][1]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Message;
