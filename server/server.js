const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 2000 });

// app.use('/build', express.static(path.resolve(__dirname, '../build/')));

wss.on("connection", function connection(ws) { 
  app.use(express.json());
  app.use(cookieParser());
  app.use("*", (req, res, next) => {
    const data = {
      header: null,
      cookies: null,
      body: null,
      type:null
    };
    // console.log('server.js file', req.body);
    !req.method ? data.type = 'Method not sent' : data.type = req.method;
    !req.headers ? data.header = 'Headers not sent' : data.header = req.headers;
    !req.cookies ? data.cookies = 'There are no cookies' : data.cookies = req.cookies;
    !req.body ? data.body = 'There is no body' : data.body = req.body;

    ws.send(JSON.stringify(data));
    res.send('Anything')
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
