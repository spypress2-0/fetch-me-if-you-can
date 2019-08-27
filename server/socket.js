const WebSocket = require('ws');


function webSocketClient() {
  const wss = new WebSocket.Server({ port: 2000 })
  const ws = wss.on('connection', function connection(ws) {

    return ws;
  })
  return ws;
}

module.exports = webSocketClient