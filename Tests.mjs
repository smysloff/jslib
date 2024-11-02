// file: Tests.mjs

/**
 * A class for running and managing tests.
 */
export default class Tests {
  /**
   * Creates an instance of the Tests class.
   * Initializes the test and error counters.
   */
  constructor() {
    this.tests = 0
    this.errors = 0
  }

  /**
   * Runs a test case.
   *
   * @param {string} name - The name of the test case.
   * @param {Function} callback - The function to be tested.
   * @param {Array} args - The arguments to pass to the callback function.
   * @param {string} reference - The expected result of the test.
   */
  run(name, callback, args, reference) {
    let result
    ++this.tests
    try {
      result = JSON.stringify(callback(args))
      result === reference
        ? this.#success(name, args, reference, result)
        : this.#failure(name, args, reference, result)
    } catch (error) {
      result === reference
        ? this.#success(name, args, reference, result, error.message)
        : this.#failure(name, args, reference, result, error.message)
    }
  }

  /**
   * Outputs the results of the tests.
   * Displays the total number of tests run and the number of errors encountered.
   */
  result() {
    console.log('-------------------------')
    console.log(`tests:  ${this.tests}`)
    console.log(`errors: ${this.errors}`)
  }

  /**
   * Logs a successful test result.
   *
   * @private
   * @param {string} name - The name of the test case.
   * @param {Array} args - The arguments used in the test.
   * @param {string} reference - The expected result of the test.
   * @param {string} result - The actual result of the test.
   * @param {string} [message] - An optional message to display.
   */
  #success(name, args, reference, result, message) {
    console.log('✔', name, JSON.stringify(args), reference, /*message ?? result*/)
  }

  /**
   * Logs a failed test result.
   *
   * @private
   * @param {string} name - The name of the test case.
   * @param {Array} args - The arguments used in the test.
   * @param {string} reference - The expected result of the test.
   * @param {string} result - The actual result of the test.
   * @param {string} [message] - An optional message to display.
   */
  #failure(name, args, reference, result, message) {
    ++this.errors
    console.log('✘', name, JSON.stringify(args), reference, /*message ?? result*/)
  }
}
