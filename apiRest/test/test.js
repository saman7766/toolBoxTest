var app = require('../app.js');
var request = require('supertest');
var chai = require('chai');

var expect = chai.expect;

it('testing text endpoint', function(done) {
    request(app.listen())
        .get('/get/testing')
        .end(function(err, res) { 
            expect(res.statusCode).to.equal(200); 
            expect(res.text).to.be.equal('{"texto" : "testing"}');
            done();
        }); 
});