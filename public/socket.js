const socket = new WebSocket("ws://localhost:2000/");

socket.addEventListener('open', (event) => {
  socket.send('Hello Server');
});

socket.addEventListener('message', (event) => {
  //* potentially store a variable to send to front end?
  // let variableHoldingEventData = event.data;
  // console.log('Socket Event Data: ', variableHoldingEventData);
  console.log('Socket Event Data: ', JSON.parse(event.data));
});

// document.querySelector('#button').addEventListener('click', () => {
//   console.log('clicked');
//   socket.send('Clicked');
// })