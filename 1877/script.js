//Example 1:
//
// Input: nums = [3,5,2,3]
// Output: 7
// Explanation: The elements can be paired up into pairs (3,3) and (5,2).
// The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.
// Example 2:
//
// Input: nums = [3,5,4,2,4,6]
// Output: 8
// Explanation: The elements can be paired up into pairs (3,5), (4,4), and (6,2).
// The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8.

/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = (nums) => {
  nums.sort((a, b) => b - a)

  const result = []

  for (let i = 0; i < nums.length / 2; i++) {
    console.log(nums[i])
    const sum= nums[i] + nums[nums.length - 1]
      // nums[nums.length - 1 - i]
    console.log(sum)

    result.push(sum);

  }

  return Math.max(...result)
};

console.log(minPairSum([3,5,2,3]))
