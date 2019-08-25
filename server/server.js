const express = require('express');
const app = express();
const path = require('path');

// const port = 3000;
const WebSocket = require('ws');
// Initialize instance of the WebSocket server 
const wss = new WebSocket.Server({ port: 2000 })

wss.on('connection', function connection(ws) {
  // const data = {
  //   header: null,
  //   cookies: null,
  //   body: null,
  app.use(express.json());
  const cookieParser = require('cookie-parser');

  app.use('*', (req, res, next) => {
    //using JSON.stringify() to fix this error message: The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object.
    // let test = 'a';
    // ws.send(`${test}`)
    // if (!res.headersSent) data.header = 'Headers not sent';
    // if (!req.cookies) data.cookies = 'There are no cookies';
    // if (req.body) data.body = req.body;
      ws.send(JSON.stringify(req.body));
    // can send multiple ws.send();
    next();
  });
});


app.listen(3000, () => {
  console.log(`Listening on port 3000...`);
});
