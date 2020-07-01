/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const findLength = function(A, B) {
  if (!A.length || !B.length) return 0

  let longestArrLen = 0
  for (let i = 0; i < A.length; i++) {
    let curLongestArrLen = 0
    let curAIndex = i
    let j = 0
    while (j < B.length) {
      if (A[curAIndex] === B[j]) {
        curLongestArrLen++
        curAIndex++
        longestArrLen = Math.max(longestArrLen, curLongestArrLen)
      } else {
        curAIndex = i
        curLongestArrLen = 0
      }
      j++
    }
  }
  return longestArrLen
}

findLength([0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,1,0,0]) // 9
// findLength([0,1,1,1,1],[1,0,1,0,1]) // 2