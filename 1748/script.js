//1748. Sum of Unique Elements
// Easy
// Topics
// Companies
// Hint
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
//
// Return the sum of all the unique elements of nums.
//
// Example 1:
//
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:
//
// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:
//
// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let counts = {}
  let initialValue = 0

  for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1
  }

  for (const char in counts) {
    if(counts[char] === 1){
      initialValue += +char
    }
  }

  return initialValue
};

console.log(sumOfUnique([1,1,1,1,1]))
