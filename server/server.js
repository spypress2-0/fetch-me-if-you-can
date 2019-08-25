const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 2000 });

wss.on("connection", function connection(ws) { 
  app.use(express.json());
  app.use(cookieParser());
  app.use("*", (req, res, next) => {
    const data = {
      header: null,
      cookies: null,
      body: null,
    };
    // console.log('server.js file', req.body);
    !req.method ? data.header = 'Headers not sent' : data.header = req.method;
    !req.cookies ? data.cookies = 'There are no cookies' : data.cookies = req.cookies;
    !req.body ? data.body = 'There is no body' : data.body = req.body;

    ws.send(JSON.stringify(data));
    res.send('Anything')
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
