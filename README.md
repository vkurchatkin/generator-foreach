# generator-foreach
## forEach for generators

Imagine you want to use `forEach` inside a generator function:

```javascript

var stuff = [1, 2, 3, 4, 5]

function * fn () {
  stuff.forEach(something)

  function something (item) {
    console.log(item)
  }
}

for (var i of fn());

```

It works ok, but what if you want to yield a value based on an `item`?

```javascript

var stuff = [1, 2, 3, 4, 5]

function * fn () {
  stuff.forEach(something)

  function something (item) {
    yield item
  }
}

for (var i of fn()) console.log(i)

```

Doesn't work anymore! You can't use `yield` inside an ordinary function. So `generator-foreach` comes into play:

```javascript

var foreach = require('generator-foreach')
var stuff = [1, 2, 3, 4, 5]

function * fn () {
  yield * foreach(stuff, something)

  function * something (item) {
    yield item
  }
}

for (var i of fn()) console.log(i)

```

Do use it you need to remember a couple of things:

 - pass an array as a first argument;
 - use `yield *` before `foreach`;
 - make your iterator generator function.


# Examples
## Basic

Use `--harmony` or `--harmony-generators --harmony-iteration` flags

```javascript
/**
 * basic example
 */

var foreach = require('generator-foreach')

function * gen (array) {
  yield * foreach(array, function * (num) {
    yield num + 1
  })
}


for (var num of gen([1, 2, 3])) console.log(num)

```

## Fancy recursive array flattening

Use `--harmony` or `--harmony-generators --harmony-iteration` flags

```javascript
/**
 * fancy recursive array flattening
 */

var foreach = require('generator-foreach')

function * value (val) {
  yield val
}

function * flatten (array) {
  yield * Array.isArray(array) ? foreach(array, flatten) : value(array)
}

var array = [1, 2, [3, [4, 5, [6, 7]]]]

for (var num of flatten(array)) console.log(num)

```
