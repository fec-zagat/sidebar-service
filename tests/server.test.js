const request = require('supertest');
const app = require('../server/index');

describe('GET /r', function () {
  it ('responds with json', function(done) {
    request(app)
    .get('/r')
    .expect('Content-Type', /json/)
    .expect(200, done)
  });
})