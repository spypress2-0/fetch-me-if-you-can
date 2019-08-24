const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');

const WebSocket = require('ws');
// Initialize instance of the WebSocket server 
const wss = new WebSocket.Server({ port: 2000 });
// app.use(express.json());
// app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.cookie('This is', 'Your Cookie');
// });

wss.on('connection', function connection(ws) {
  app.use(express.json());
  app.use(cookieParser());
  
  app.use('*', (req, res, next) => {
    ws.send(JSON.stringify(req.body));
    next();
  });
  // last thing inside here
})

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
