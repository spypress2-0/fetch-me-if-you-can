const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const socket = require('./socket');
const path = require('path');


//ON Connection parse all requests & cookies
app.use(express.json());
app.use(cookieParser());

socket.init().then(ws => {
  app.use(express.json());
  app.use(cookieParser());
  app.use('*', (req, res) => {

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
  });
});

//Listen on all Requests
// app.use('/build', express.static(path.join(__dirname, '../build')))

// app.get('/prod', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// })

app.listen(3000);

