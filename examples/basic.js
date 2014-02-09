/**
 * basic example
 */

var foreach = require('../')

function * gen (array) {
  yield * foreach(array, function * (num) {
    yield num + 1
  })
}


for (var num of gen([1, 2, 3])) console.log(num)
