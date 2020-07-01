/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  bubbleSort(nums, k)
  return nums[nums.length - k]
}

const bubbleSort = (arr, k) => {
  for (let i = 0; i < k; i++) {
    let hasSwap = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        hasSwap = true
      }
    }
    if (!hasSwap) {
      break
    }
  }
}