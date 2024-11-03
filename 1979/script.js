//Example 1:
// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.
// Example 2:
//
// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.
// Example 3:
//
// Input: nums = [3,3]
// Output: 3
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 3.
// The greatest common divisor of 3 and 3 is 3.

/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = (nums) => {
  let smallerNum = Math.min(...nums)
  let maxNum = Math.max(...nums)
  let divisor = 0

  for (let i = 0; i <= smallerNum; i++) {

    if(maxNum % i === 0 && smallerNum % i === 0){
      divisor = i
    }

  }

  return divisor
}

console.log(findGCD([7,5,6,8,3]))
//2
