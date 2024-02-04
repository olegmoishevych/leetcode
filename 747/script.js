//Example 1:
//
// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:
//
// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = (nums) => {
  let maxNum = Math.max(...nums)
  let indexOfMaxNum = nums.indexOf(maxNum)

  for (let i = 0; i < nums.length; i++) {

    if(i !== indexOfMaxNum && nums[i] * 2 > maxNum){
      return -1
    }

  }

  return indexOfMaxNum
}

console.log(dominantIndex([3,6,1,0]))
