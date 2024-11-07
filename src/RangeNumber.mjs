/* file: RangeNumber.mjs */

import IterableObject from './IterableObject.mjs'
import RangeIterator from './RangeIterator.mjs'

/**
 * Class for creating a range of numbers.
 */
export default class RangeNumber {

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
