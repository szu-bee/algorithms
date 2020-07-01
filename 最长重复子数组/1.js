/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const findLength = (A, B) => {
  const m = A.length
  const n = B.length
  const dp = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }
  let res = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      res = Math.max(dp[i][j], res)
    }
  }
  return res
}