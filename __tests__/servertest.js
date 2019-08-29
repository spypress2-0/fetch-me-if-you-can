// require supertest?
const request = require('supertest');

const server = 'http://localhost:3000';


// basic route testing

// 1. test if it serves the initial html file when GET request '/prod' received
// 2. check if websocket connection has been made (research how to test websocket connections)
// 3. test on different Req.methods (e.g. POST, PUT, PATCH, DELETE, etc.)
// 4. check if the data format sent to client is in JSON format


// reference from testing unit:
// https://www.npmjs.com/package/supertest

describe('Basic routing on initial connection request from client', () => {
  describe('/prod', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/prod')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
    describe('POST', () => {
      xit('responds with 200 status and text/html content type', () => {
        return request(server)
          .post('/prod')
          .expect('Content-Type', /json/)
          .expect(200);
      });
    });
  });
});