//Example 1:
//
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:
//
// Input: nums = [2,0,1]
// Output: [0,1,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => nums.sort((a,b) => (a - b))

console.log(sortColors([2,0,2,1,1,0]))
