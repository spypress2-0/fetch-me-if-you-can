/**
 * ************************************
 *
 * @module  websocket.js
 * @description
 *
 * ************************************
 */

const socket = new WebSocket('ws://localhost:2000');
socket.addEventListener('open', (event) => {
  socket.send('Hello Server');
});

socket.addEventListener('message', (event) => {
  console.log('Socket Event Data ', event.data);
});


export default socket;
