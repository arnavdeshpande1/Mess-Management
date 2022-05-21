//apiTest.js
const req = require('supertest');
const app = require('./server');
describe('POST /register', function () {
    it('registering user', function (done) {
        let data = {
            "name":"arnav",
            "email":"arnav@gmail.com",
            "password":"123456" 
        }
        req(app)
            .post('/api/users/register')
            .send(data)
            .expect(404, done)
    });
});

describe('POST /login', function () {
    it('login with user', function (done) {
        let data = {
            "email":"arnav@gmail.com",
            "password":"123456" 
        }
        req(app)
            .post('/api/auth')
            .send(data)
            .expect(200, done)
    })
})
