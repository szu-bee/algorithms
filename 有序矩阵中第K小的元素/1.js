/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(matrix, k) {
  if (matrix.length === 1) return matrix[0][0]

  const arr = matrix.reduce((acc, cur) => [...acc, ...cur], []).sort((a, b) => a - b)
  return arr[k - 1]
}
