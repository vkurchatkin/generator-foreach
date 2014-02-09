/**
 * fancy recursive array flattening
 */

var foreach = require('../')

function * value (val) {
  yield val
}

function * flatten (array) {
  yield * Array.isArray(array) ? foreach(array, flatten) : value(array)
}

var array = [1, 2, [3, [4, 5, [6, 7]]]]

for (var num of flatten(array)) console.log(num)
