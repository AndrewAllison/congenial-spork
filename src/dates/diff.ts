import { DateTime } from 'luxon'

/**
 * Wrapper method for Luxon to compare a date to DateTime.now() and return a number of days
 * representing the difference
 * @param dueDate {DateTime} a Luxon Date time object representing the date to carry out the comparison on.
 * @param roundValues {boolean} Determines if the value should be rounded via Math.round defaults to 'true'
 * @returns {number} The number of days difference from not to the given date.
 */
const calculateDaysBetween = (dueDate: DateTime, roundValues = true) => {
  const dueDateDiff = dueDate.diff(DateTime.now(), ['days']).toObject()

  return dueDateDiff?.days
    ? roundValues
      ? Math.round(dueDateDiff.days)
      : dueDateDiff
    : 0
}

/**
 * Wrapper method for Luxon to compare a date to DateTime.now() and return an object
 * representing the difference ['days', 'weeks', 'months', 'years']
 * @param dueDate {DateTime} The date to find the difference of
 * @param roundValues should the values be Math.round()
 * @returns {object} Returns an object with 'days', 'weeks', 'months', 'years' props
 */
const calculateDiffBetween = (dueDate: DateTime, roundValues = true) => {
  const dueDateDiff = dueDate
    .diff(DateTime.now(), ['days', 'weeks', 'months', 'years'])
    .toObject()

  const { days, months, weeks, years } = dueDateDiff

  return {
    days: roundValues ? Math.round(days || 0) : days,
    weeks: roundValues ? Math.round(weeks || 0) : weeks,
    months: roundValues ? Math.round(months || 0) : months,
    years: roundValues ? Math.round(years || 0) : years,
  }
}

export { calculateDaysBetween, calculateDiffBetween }
