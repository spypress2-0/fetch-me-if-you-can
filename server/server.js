const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const spypressParser = require('./spypressParser')
const path = require('path');
const WebSocket = require('ws');
const client = require('./socket.js')
const wss = client();
// const wss = new WebSocket.Server({ port: 2000 });

// We have to open up the Websocket connection and place ALL routes within it.
//Websocket Connection to port 2000;


//Event listener for WebSocket Connection.


//ON Connection parse all requests & cookies
app.use(express.json());
app.use(cookieParser());
//Listen on all Requests
app.use(spypressParser(wss));
// Place routes for your server here! \/


app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
