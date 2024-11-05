# JSLib

A small library with classes and functions that solve various tasks.

## range

A function that creates a range of numbers with a specified step (default is 1). The function uses lazy evaluation, allowing for the creation of a conditionally infinite range.

```javascript
import { range } from './jslib/range.mjs'

for (const number in range(0, 5)) {
  console.log(number) // 0, 1, 2, 3, 4, 5
}

console.log(...range(-5, 5, 2)) // -5, -3, -1, 1, 3, 5
```

## TypeChecker

A class that provides static methods for checking data types in JavaScript.

```javascript

import Type from './TypeChecker.mjs'

const { isNumber } = Type

console.log(isNumber('10'), isNumber([10])) // true false

```
