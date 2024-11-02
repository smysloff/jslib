/**
 * Represents the response of an iterator.
 */
export class IteratorResponse {
  /**
   * Creates an instance of IteratorResponse.
   * @param {*} value - The value to be returned by the iterator.
   */
  constructor(value) {
    this.value = value
    this.done = value == null
  }
}

/**
 * Represents an iterable object.
 */
export class IterableObject {
  /**
   * Creates an instance of IterableObject.
   * @param {Function} iterator - The iterator function.
   * @param {...*} args - Arguments to be passed to the iterator.
   */
  constructor(iterator, ...args) {
    this[Symbol.iterator] = () => new iterator(...args)
  }
}

/**
 * Abstract base class for iterators.
 */
export default class AbstractBaseIterator {}

/**
 * Iterator for generating a range of numbers.
 */
class RangeIterator extends AbstractBaseIterator {
  /**
   * Creates an instance of RangeIterator.
   * @param {number} from - The starting number of the range.
   * @param {number} to - The ending number of the range.
   * @param {number} step - The step value for the range.
   */
  constructor(from, to, step) {
    super()

    // Scale factor to maintain precision
    const scaleFactor = Math.pow(10, this.#getDecimalPlaces(step))
    from = Math.round(from * scaleFactor)
    to = Math.round(to * scaleFactor)
    step = Math.round(step * scaleFactor)

    this.next = () => {
      if (
        step > 0 && from > to
        || step < 0 && from < to
      ) {
        return new IteratorResponse()
      }
      const response = new IteratorResponse(from / scaleFactor)
      from += step
      return response
    }
  }

  /**
   * Gets the number of decimal places in a number.
   * @param {number} num - The number to check.
   * @returns {number} The number of decimal places.
   */
  #getDecimalPlaces(num) {
    const str = num.toString()
    const decimalIndex = str.indexOf('.')
    return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1
  }
}

/**
 * Class for creating a range of numbers.
 */
export class RangeNumber {
  /**
   * Creates an instance of RangeNumber.
   * @param {number} from - The starting number of the range.
   * @param {number} to - The ending number of the range.
   * @param {number} [step=1] - The step value for the range.
   */
  constructor(from, to, step = 1) {
    this.#validateArguments(from, to, step);
    return new IterableObject(RangeIterator, from, to, step)
  }

  /**
   * Validates the arguments for the range.
   * @param {number} from - The starting number of the range.
   * @param {number} to - The ending number of the range.
   * @param {number} step - The step value for the range.
   * @throws {TypeError} If the arguments are not valid.
   */
  #validateArguments(from, to, step) {
    if (
      isNaN(parseFloat(from)) ||
      isNaN(parseFloat(to)) ||
      isNaN(parseFloat(step))
    ) {
      throw new TypeError('range arguments must be numeric values')
    }
    if (from < to && step <= 0) {
      throw new TypeError("'step' must be a positive value if 'from' is less than 'to'")
    }
    if (from > to && step >= 0) {
      throw new TypeError("'step' must be a negative value if 'from' is greater than 'to'")
    }
  }
}

/**
 * Creates a range of numbers.
 * @param {number} from - The starting number of the range.
 * @param {number} to - The ending number of the range.
 * @param {number} [step=1] - The step value for the range.
 * @returns {IterableObject} An iterable object representing the range.
 */
export function range(from, to, step) {
  return new RangeNumber(from, to, step)
}


// file: iterators.tests.mjs
import Tests from './Tests.mjs'

const tests = new Tests()
const callback = (args) => [...range(...args)]

// Existing tests
tests.run('range', callback, [1, 5],       '[1,2,3,4,5]')
tests.run('range', callback, [5, 1, -1],   '[5,4,3,2,1]')
tests.run('range', callback, [1, 1],       '[1]')
tests.run('range', callback, [0, 0],       '[0]')
tests.run('range', callback, [0, 0, -1],   '[0]')
tests.run('range', callback, [1, 5, -1],   undefined) // should throw
tests.run('range', callback, [-1, 5, 1],   '[-1,0,1,2,3,4,5]')
tests.run('range', callback, [1, -5, -1],  '[1,0,-1,-2,-3,-4,-5]')

// Additional tests
tests.run('range', callback, [5, 1, -1],   '[5,4,3,2,1]')
tests.run('range', callback, [0, 10, 2],   '[0,2,4,6,8,10]')
tests.run('range', callback, [-5, -1, 1],  '[-5,-4,-3,-2,-1]')
tests.run('range', callback, [1, 5, 0],    undefined) // should throw
tests.run('range', callback, ['a', 5],     undefined) // should throw
tests.run('range', callback, [0, 1, 0.2],  '[0,0.2,0.4,0.6,0.8,1]')
tests.run('range', callback, [1, 0, -0.2], '[1,0.8,0.6,0.4,0.2,0]')

tests.result()
