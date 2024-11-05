/**
 * The TypeChecker class provides static methods
 * for checking data types in JavaScript.
 */
export default class TypeChecker {

  /**
   * Checks if the value is null.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is null,
   *                      otherwise false.
   */
  static isNull(value) {
    return value === null
  }

  /**
   * Checks if the value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is undefined,
   *                      otherwise false.
   */
  static isUndefined(value) {
    return value === undefined
  }

  /**
   * Checks if the value is null or undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is null or undefined,
   *                      otherwise false.
   */
  static isNone(value) {
    return value == null
  }

  /**
   * Checks if the value is a boolean.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is a boolean,
   *                      otherwise false.
   */
  static isBool(value) {
    return typeof value === 'boolean'
  }

  /**
   * Checks if the value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is an object,
   *                      otherwise false.
   */
  static isObject(value) {
    return value !== null
      && typeof value === 'object'
  }

  /**
   * Checks if the value is an array.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is an array,
   *                      otherwise false.
   */
  static isArray(value) {
    return Array.isArray(value)
  }

  /**
   * Checks if the value is a string.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is a string,
   *                      otherwise false.
   */
  static isString(value) {
    return typeof value === 'string'
      || value instanceof String
  }

  /**
   * Checks if the string is empty.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the string is empty,
   *                      otherwise false.
   */
  static isEmptyString(value) {
    return TypeChecker.isString(value)
      && value.length === 0
  }

  /**
   * Checks if the string consists only of whitespace.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the string is empty or
   *                      consists only of whitespace, otherwise false.
   */
  static isWhiteSpaceString(value) {
    return TypeChecker.isString(value)
      && value.trim().length === 0
  }

  /**
   * Checks if the value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is a number,
   *                      otherwise false.
   */
  static isNumber(value) {
    return (typeof value === 'number'
      || TypeChecker.isString(value))
        && !isNaN(parseFloat(value))
  }

  /**
   * Checks if the value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is a function,
   *                      otherwise false.
   */
  static isFunction(value) {
    return typeof value === 'function'
  }

  /**
   * Checks if the value is iterable.
   * @param {*} value - The value to check.
   * @returns {boolean} - Returns true if the value is iterable,
   *                      otherwise false.
   */
  static isIterable(value) {
    return value != null
      && TypeChecker.isFunction(value[Symbol.iterator])
  }

}

export const isNull             = TypeChecker.isNull
export const isUndefined        = TypeChecker.isUndefined
export const isNone             = TypeChecker.isNone
export const isBool             = TypeChecker.isBool
export const isObject           = TypeChecker.isObject
export const isArray            = TypeChecker.isArray
export const isString           = TypeChecker.isString
export const isEmptyString      = TypeChecker.isEmptyString
export const isWhiteSpaceString = TypeChecker.isWhiteSpaceString
export const isNumber           = TypeChecker.isNumber
export const isFunction         = TypeChecker.isFunction
export const isIterable         = TypeChecker.isIterable
