# JSLib

A small JavaScript library that solves various problems.

## TypeChecker

A set of methods for checking data types in JavaScript.

```javascript
import { isNumber } from './jslib/utils.mjs'

console.log(isNumber('10')) // true false
console.log(isNumber([10])) // true false
```

### List of checkers

| function           | description                                                     |
|--------------------|-----------------------------------------------------------------|
| isNull             | Checks if the value is null                                     |
| isUndefined        | Checks if the value is undefined                                |
| isNone             | Checks if the value is null or undefined                        |
| isBool             | Checks if the value is a boolean                                |
| isObject           | Checks if the value is an object                                |
| isArray            | Checks if the value is an array                                 |
| isString           | Checks if the value is a string                                 |
| isEmptyString      | Checks if the string is empty                                   |
| isWhiteSpaceString | Checks if the string consists only of whitespace                |
| isNumber           | Checks if the value is a number or a string containing a number |
| isFunction         | Checks if the value is a function                               |
| isIterable         | Checks if the value is iterable                                 |


## RangeNumber

Creates a range of numbers with the specified step (default is 1). The function uses lazy evaluation, which allows to create a conditionally infinite range.

```javascript
import { range } from './jslib/utils.mjs'

for (const number in range(0, 5)) {
  console.log(number) // 0, 1, 2, 3, 4, 5
}

console.log(...range(-5, 5, 2)) // -5, -3, -1, 1, 3, 5
```
