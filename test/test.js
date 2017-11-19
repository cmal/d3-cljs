var assert = require('assert');
var d3c = require('../out/d3_cljs/index');

describe('Array', function() {
  describe('#1 indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
  describe('#2 indexOf()', function() {
    it('should return correct index when the value is present', function() {
      assert.equal(1, [1,2,3].indexOf(2));
    });
  });
});

describe('d3c.hello', function() {
  describe('#1 hello()', function() {
    it('should return hello', function() {
      assert.equal('hello', d3c.hello())
    })
  })
})

describe('d3c.amin', function() {
  describe('#2 amin()', function() {
    it('should return min value when array contains numbers', function() {
      assert.equal(4, d3c.amin([5, 4, 6]))
    })
    it('should return min value when array contains null', function() {
      assert.equal(4, d3c.amin([null, 5, 4, 6]))
    })
    it('should return min key when provide a function', function() {
      assert.equal(4, d3c.amin([null, 5, 4, 6], function(item) { return item; }))
    })
    it('should return min key when provide a function that change the value', function() {
      assert.equal(4, d3c.amin([null, 5, 4, 6], function(item) { return item - 1; }))
    })
  })
})

describe('d3c.amax', function() {
  describe('#3 amax()', function(){
    it('should return max value when array contains numbers', function() {
      assert.equal(6, d3c.amax([5, 4, 6]))
    })
    it('should return max value when array contains null', function() {
      assert.equal(6, d3c.amax([null, 5, 4, 6]))
    })
    it('should return max key when provide a function', function() {
      assert.equal(6, d3c.amax([null, 5, 4, 6]), function(item) { return item; })
    })
    it('should return max key when provide a function that change the value', function() {
      assert.equal(6, d3c.amax([null, 5, 4, 6]), function(item) { return item - 1; })
    })
  })
})
