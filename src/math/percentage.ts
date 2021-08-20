/**
 * Provides the percentage difference between two numbers
 * @param a Initial number
 * @param b Secondary value
 * @return {number} The difference as a percentage value with Math.ceil rounding.
 * @example const difference = percentageDifference(50, 100).toEqual(50)
 */
export const percentageDifference = (a: number, b: number) => {
  return Math.ceil((a / b) * 100)
}
