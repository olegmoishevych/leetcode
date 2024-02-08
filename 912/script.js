//Example 1:
//
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:
//
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  return nums.sort((a,b) => a - b)
};

console.log(sortArray([5,1,1,2,0,0]))
