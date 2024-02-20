//Example 1:
//
// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
// Example 2:
//
// Input: nums = [2,3]
// Output: [2,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = (nums) => {
  const result = [];
  let evenIndex = 0;
  let oddIndex = 1;

  nums.forEach(num => {
    if (num % 2 === 0) {
      result[evenIndex] = num;
      evenIndex += 2;
    } else {
      result[oddIndex] = num;
      oddIndex += 2;
    }
  });

  return result;
};


console.log(sortArrayByParityII([4,2,5,7]))
