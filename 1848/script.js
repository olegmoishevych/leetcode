//Example 1:
//
// Input: nums = [1,2,3,4,5], target = 5, start = 3
// Output: 1
// Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.
// Example 2:
//
// Input: nums = [1], target = 1, start = 0
// Output: 0
// Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.
// Example 3:
//
// Input: nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
// Output: 0
// Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const getMinDistance = (nums, target, start) => {

}

console.log(getMinDistance([1,2,3,4,5], 5, 3))
