/* file: Random.mjs */

/**
 * A utility class for generating random numbers.
 */
export default class Random {

  /**
   * Generates a random integer between minimum and maximum values.
   *
   * @param {number} min - The minimum value (inclusive).
   * @param {number} max - The maximum value (inclusive).
   * @returns {number} A random integer between min and max.
   *
   * @example
   * // Returns a random integer between 1 and 10
   * const randomNumber = Random.getRandom(1, 10)
   *
   * @example
   * // Returns a random integer between 0 and 100
   * const anotherRandomNumber = Random.getRandom(0, 100)
   */
  static getRandom(min, max) {
    return min + Math.trunc(
      Math.random() * (max - min + 1))
  }

  /**
   * Generates a seedable random number generator.
   *
   * @todo Implement the seedable random number generator.
   */
  static getSeedableRandom() {
    // @todo
  }

}
