# JSQoLib

A small JavaScript library that enhances quality of life by solving various problems.

## TypeChecker

A set of methods for checking data types in JavaScript.

```javascript
import { isNumber } from './jsqolib/utils.mjs'

console.log(isNumber(10))   // true
console.log(isNumber('10')) // true
console.log(isNumber([10])) // false
console.log(isNumber(null)) // false
console.log(isNumber(''))   // false
```

### List of checkers

|                    |                                                                 |
|--------------------|-----------------------------------------------------------------|
| isNull             | Checks if the value is null                                     |
| isUndefined        | Checks if the value is undefined                                |
| isNone             | Checks if the value is null or undefined                        |
| isBool             | Checks if the value is a boolean                                |
| isObject           | Checks if the value is an object                                |
| isArray            | Checks if the value is an array                                 |
| isString           | Checks if the value is a string                                 |
| isEmptyString      | Checks if the string is empty                                   |
| isWhiteSpaceString | Checks if the string is empty or consists only of whitespace    |
| isNumber           | Checks if the value is a number or a string containing a number |
| isFunction         | Checks if the value is a function                               |
| isIterable         | Checks if the value is iterable                                 |


## DateTime

Gets a string representation of the date and time in the specified format.

```javascript
import { dateTime } from './jsqolib/utils.mjs'

// Returns the current date and time in the format 'YYYY-MM-DD HH:mm:ss'
DateTime.getDateTime()

// Returns the current date in the format 'DD-MM-YYYY'
DateTime.getDateTime('%d-%m-%Y')

// Returns custom date in the default format
DateTime.getDateTime(customDateObject)
```


## RangeNumber

Creates a range of numbers with the specified step (default is 1). The function uses lazy evaluation, which allows to create a conditionally infinite range.

```javascript
import { range } from './jsqolib/utils.mjs'

for (const number in range(0, 5)) {
  console.log(number) // 0, 1, 2, 3, 4, 5
}

console.log(...range(-5, 5, 2)) // -5, -3, -1, 1, 3, 5
```
