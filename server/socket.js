const WebSocket = require('ws');

module.exports = {
  init() {
    const wss = new WebSocket.Server({ port: 2000 })
    return new Promise((resolve, rej) => {
      wss.on('connection', ws => resolve(ws));
      wss.on('error', err => rej(err));
    })
  }
}