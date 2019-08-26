const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const WebSocket = require("ws");
const path = require('path');

// We have to open up the Websocket connection and place ALL routes within it.
//Websocket Connection to port 2000;
const wss = new WebSocket.Server({ port: 2000 });

//Event listener for WebSocket Connection.
wss.on("connection", function connection(ws) {

  //ON Connection parse all requests & cookies
  app.use(express.json());
  app.use(cookieParser());
  //Listen on all Requests
  app.use("*", (req, res) => {

    //Data we're going to send to the establish WebSocket Server for the Front-end to grab;
    //All set as null until we define the data coming in.
    const data = {
      header: null,
      cookies: null,
      body: null,
      type: null
    };

    //Defining any requests that comes in such as Methods, Headers, Cookies & Body.
    !req.method ? data.type = 'Method not sent' : data.type = req.method;
    !req.headers ? data.header = 'Headers not sent' : data.header = req.headers;
    !req.cookies ? data.cookies = 'There are no cookies' : data.cookies = req.cookies;
    !req.body ? data.body = 'There is no body' : data.body = req.body;

    //Sending data object to WebSocket Server for Front-End to grab.
    ws.send(JSON.stringify(data));
    // Passing connection off to the next route.
    next();
  });
  // Place routes for your server here! \/






  // Place routes for your server here! ^

  // Catch all route. Remove if you do not need it.
  app.use('*', (req, res, next) => res.send('Testing With SpyPress!'))
  // Catch all route. Remove if you do not need it.
});






app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
