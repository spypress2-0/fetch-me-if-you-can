// require supertest?


// basic route testing

// 1. test if it serves the initial html file when GET request '/prod' received
// 2. check if websocket connection has been made (research how to test websocket connections)
// 3. test on different Req.methods (e.g. POST, PUT, PATCH, DELETE, etc.)
// 4. check if the data format sent to client is in JSON format
// 5.
// 6.
// 7.
// 8.



// reference from testing unit:
// https://www.npmjs.com/package/supertest

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('/markets', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get('/markets')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200);
      });

      // For this test, you'll need to inspect the body of the response and
      // ensure it contains the markets list. Check the markets.dev.json file
      // in the dev database to get an idea of what shape you're expecting.
      xit('markets from "DB" jso n are in body of response', () => {
      });
    });

    describe('PUT', () => {
      xit('responds with 200 status and application/json content type', () => {
      });

      xit('responds with the updated market list', () => {
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
      });
    });
  });
});
