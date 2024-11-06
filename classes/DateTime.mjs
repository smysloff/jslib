/* file: classes/DateTime.mjs */

/**
 * DateTime class for working with date and time.
 */
export default class DateTime {

  /**
   * Gets a string representation of the date and time in the specified format.
   *
   * @param {Date|string} [date=new Date()] - The date to format.
   * If a string is provided, it will be interpreted as the format.
   * @param {string} [fmt='%y-%m-%d %h:%i:%s'] - The format in which the date will be returned.
   * Available specifiers:
   * - %y: year (4 digits)
   * - %m: month (2 digits)
   * - %d: day (2 digits)
   * - %h: hours (2 digits)
   * - %i: minutes (2 digits)
   * - %s: seconds (2 digits)
   *
   * @returns {string} A string representing the date and time in the specified format.
   *
   * @example
   * // Returns the current date and time in the format 'YYYY-MM-DD HH:mm:ss'
   * DateTime.getDateTime();
   *
   * @example
   * // Returns the date in the format 'DD-MM-YYYY'
   * DateTime.getDateTime(new Date(), '%d-%m-%Y');
   */
  static getDateTime(
    date = new Date(),
    fmt = '%y-%m-%d %h:%i:%s'
  ) {

    const normalize = (n) => n.toString().padStart(2, '0')

    if (
      arguments.length === 1
        && typeof date === 'string'
    ) {
      fmt = date
      date = new Date()
    }

    const y = date.getFullYear()
    const m = normalize(date.getMonth() + 1)
    const d = normalize(date.getDate())
    const h = normalize(date.getHours())
    const i = normalize(date.getMinutes())
    const s = normalize(date.getSeconds())

    return fmt
      .replaceAll(/%y/g, y)
      .replaceAll(/%m/g, m)
      .replaceAll(/%d/g, d)
      .replaceAll(/%h/g, h)
      .replaceAll(/%i/g, i)
      .replaceAll(/%s/g, s)
  }

}
