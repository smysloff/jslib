/* file: utils.mjs */

/* imports */
import TypeChecker from './src/TypeChecker.mjs'
import DateTime from './src/DateTime.mjs'
import Random from './src/Random.mjs'
import RangeNumber from './src/RangeNumber.mjs'

/* TypeChecker */
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

/* DateTime */
export const dateTime = DateTime.getDateTime

/* Random */
export const random = Random.getRandom

/* RangeNumber */
export function range(from, to, step) {
  return new RangeNumber(from, to, step)
}
