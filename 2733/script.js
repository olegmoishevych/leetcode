//Example 1:
//
// Input: nums = [3,2,1,4]
// Output: 2
// Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.
// Example 2:
//
// Input: nums = [1,2]
// Output: -1
// Explanation: Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.

/**
 * @param {number[]} nums
 * @return {number}
 */
// const findNonMinOrMax = (nums) => nums.find((e) => e !== Math.min(...nums) && e !== Math.max(...nums)) || -1
const findNonMinOrMax = (nums) => {
  let max = Math.max(...nums)
  let min = Math.min(...nums)

  for (const num of nums) {

    if(num !== max && num !== min){
      return num
    }

  }
  return -1
}

console.log(findNonMinOrMax([3,2,1,4]))
