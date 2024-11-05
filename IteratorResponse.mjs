/**
 * Represents the response of an iterator.
 */
export default class IteratorResponse {
  /**
   * Creates an instance of IteratorResponse.
   * @param {*} value - The value to be returned by the iterator.
   */
  constructor(value) {
    this.value = value
    this.done = value == null
  }
}
