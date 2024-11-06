/* file: classes/RangeIterator.mjs */

import AbstractBaseIterator from './AbstractBaseIterator.mjs'
import IteratorResponse from './IteratorResponse.mjs'

/**
 * Iterator for generating a range of numbers.
 */
export default class RangeIterator extends AbstractBaseIterator {

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
