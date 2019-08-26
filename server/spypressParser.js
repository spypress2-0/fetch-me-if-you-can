const socket = require('./socket');

const spypressParser = (req, res, next) => {

  //Data we're going to send to the establish WebSocket Server for the Front-end to grab;
  //All set as null until we define the data coming in.
  const data = {
    header: null,
    cookies: null,
    body: null,
    type: null
  };

  //Defining any requests that comes in such as Methods, Headers, Cookies & Body.
  !req.method ? data.type = 'Method not sent' : data.type = req.method;
  !req.headers ? data.header = 'Headers not sent' : data.header = req.headers;
  !req.cookies ? data.cookies = 'There are no cookies' : data.cookies = req.cookies;
  !req.body ? data.body = 'There is no body' : data.body = req.body;

  //Sending data object to WebSocket Server for Front-End to grab.
  ws.send(JSON.stringify(data));
  next();
}

module.exports = spypressParser;