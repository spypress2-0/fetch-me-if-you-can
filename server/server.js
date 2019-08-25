const express = require("express");
const app = express();
// const cookieParser = require('cookie-parser');
const path = require("path");

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 2000 });

// app.use(express.json());
wss.on("connection", function connection(ws) {
  // app.use(cookieParser());
  app.use("*", (req, res, next) => {
    console.log('req.body from server.js: ', req.body);
    ws.send(JSON.stringify(req.body));
    next();
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
