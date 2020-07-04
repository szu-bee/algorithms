/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  return buildBST(nums, 0, nums.length - 1)
}

const buildBST = (nums, left, right) => {
  if (left > right) return null
  const mid = parseInt((left + right) / 2)
  const root = new TreeNode(nums[mid])
  root.left = buildBST(nums, left, mid - 1)
  root.right = buildBST(nums, mid + 1, right)
  return root
}