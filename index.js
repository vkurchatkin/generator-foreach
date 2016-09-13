function * foreach (array, fn, context) {
  var i = 0
  if("undefined" !== array && array instanceof Array) {
      var length = array.length

      for (;i < length; i++) {
        yield * fn.call(context, array[i], i, array)
      }
  }
}

module.exports = foreach
