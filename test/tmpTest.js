/*jslint node: true */
"use strict";

process.env.NODE_ENV = 'test';

var should = require('should');
var actionheroPrototype = require('actionhero').actionheroPrototype;
var actionhero = new actionheroPrototype();
var api;


describe('actionhero plugin ah-passport-plugin tests', function()
{

  before(function(done)
  {
    actionhero.start(function(err, a)
    {
      api = a;
      done();
    })
  });

  after(function(done)
  {
    actionhero.stop(function(err)
    {
      done();
    });
  })

  it("Should pass a pointless tmp test", function(done)
  {
      true.should.eql(true);
      return done();
  });


});