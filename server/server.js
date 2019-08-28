const path = require('path');
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const WebSocket = require("ws");
//Websocket Connection to port 2000;
const wss = new WebSocket.Server({ port: 2000 });

//Event listener for WebSocket Connection.
wss.on("connection", function connection(ws) { 

  //ON Connection parse all requests & cookies
  app.use(express.json());
  app.use(cookieParser());
  //Listen on all Requests
  app.use("*", (req, res, next) => {

    //Data we're going to send to the establish WebSocket Server for the Front-end to grab;
    //All set as null until we define the data coming in.
    const data = {
      header: null,
      cookies: null,
      body: null,
      type:null
    };

    //Defining any requests that comes in such as Methods, Headers, Cookies & Body.
    !req.method ? data.type = 'Method not sent' : data.type = req.method;
    !req.headers ? data.header = 'Headers not sent' : data.header = req.headers;
    !req.cookies ? data.cookies = 'There are no cookies' : data.cookies = req.cookies;
    !req.body ? data.body = 'There is no body' : data.body = req.body;

    //Sending data object to WebSocket Server for Front-End to grab.
    ws.send(JSON.stringify(data));
    //Connection Confirmation.
    next();
  });
  //[INSERT YOUR ROUTES HERE];
});

//Running NPM START. Need to go to localhost:3000/prod to view page.
app.use('/build', express.static(path.join(__dirname, '../build')))

app.get('/prod', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});

