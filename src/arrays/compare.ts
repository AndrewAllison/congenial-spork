/**
 * Used with {Array} sort function with compare objects based on a property and rearrange them
 * @example
 * someArray.sort((a,b) => compare(a,b, 'username', 'desc')
 * @param a Object to be sorted
 * @param b Object to be compared
 * @param orderBy Field / prop name for the comparison
 * @param orderDir Sort direction asc or desc
 */
export const compare = (
  a: Record<string, any>,
  b: Record<string, any>,
  orderBy: string,
  orderDir: string
) => {
  if (a[orderBy] < b[orderBy]) {
    return orderDir === 'desc' ? -1 : 1
  }
  if (a[orderBy] > b[orderBy]) {
    return orderDir === 'desc' ? 1 : -1
  }
  return 0
}
