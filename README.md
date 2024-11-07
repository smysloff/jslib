# JSQoLib

A small JavaScript library that enhances quality of life by solving various problems.

## TypeChecker

A set of methods for checking data types in JavaScript.

```javascript
import { isNumber } from './jsqolib/index.mjs'

isNumber(10)   // true
isNumber('10') // true
isNumber([10]) // false
isNumber(null) // false
isNumber('')   // false
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
import { dateTime } from './jsqolib/index.mjs'

// Current date and time in the format 'YYYY-MM-DD HH:mm:ss'
dateTime()

// Current date in the format 'DD-MM-YYYY'
dateTime('%d-%m-%Y')

// Custom date in the format 'YYYY-MM-DD HH:mm:ss'
dateTime(customDateObject)

// Custom date in the format 'DD-MM-YYYY'
dateTime(customDateObject, '%d-%m-%Y')
```


## Random

Generates a random integer between minimum and maximum values.

```javascript
random(0, 4) // random int between 0-4 inclusive
```


## RangeNumber

Creates a range of numbers with the specified step (default is 1). The function uses lazy evaluation, which allows to create a conditionally infinite range.

```javascript
import { range } from './jsqolib/index.mjs'

for (const number in range(0, 5)) {
  console.log(number) // 0, 1, 2, 3, 4, 5
}

console.log(...range(-5, 5, 2)) // -5, -3, -1, 1, 3, 5
```
