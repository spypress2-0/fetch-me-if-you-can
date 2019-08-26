//Middle WebSocket connection for server and client;

//Establish new server on same port as server;
const socket = new WebSocket("ws://localhost:2000/");

//Listening for when server is opened
socket.addEventListener('open', (event) => {
  socket.send('Hello Server');
});

//Listening for any "message/data" that comes through the socket;
socket.addEventListener('message', (event) => {
  console.log('Socket Event Data: ', JSON.parse(event.data));
});
