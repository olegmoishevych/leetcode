//Example 1:
//
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
//
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  let sortedNums = nums.sort((a,b) => (a - b))
  let result = []

  for (let i = 0; i < sortedNums.length; i++) {
    result.push(sortedNums[i] * sortedNums[i])
  }

  return result.sort((a,b) => (a - b))
}

console.log(sortedSquares([-4,-1,0,3,10]))
