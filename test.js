require('should')

var foreach = require('./')

describe('foreach', function () {
  it('should work with generator functions', function () {
    var array = [1, 2, 3]
    var res = []

    function * gen () {
      yield * foreach(array, iter)
    }

    function * iter (num) {
      yield num + 1
      yield num + 2
      yield num + 3
    }

    for (var num of gen()) res.push(num)

    res.should.eql([2, 3, 4, 3, 4, 5, 4, 5, 6])
  })

  it('should work with context', function () {
    var array = [1, 2, 3]
    var obj = {}

    function * gen () {
      yield * foreach(array, iter, obj)
    }

    function * iter (num) {
      this.should.be.equal(obj)
    }

    for (var num of gen()) ;
  })
})