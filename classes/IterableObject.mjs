/* file: classes/IterableObject.mjs */

/**
 * Represents an iterable object.
 */
export default class IterableObject {

  /**
   * Creates an instance of IterableObject.
   * @param {Function} iterator - The iterator function.
   * @param {...*} args - Arguments to be passed to the iterator.
   */
  constructor(iterator, ...args) {
    this[Symbol.iterator] = () => new iterator(...args)
  }

}
