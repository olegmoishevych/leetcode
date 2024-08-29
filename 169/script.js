// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  let count = 0
  let candidate

  for (let i = 0; i < nums.length; i++) {

    if(count === 0){
      candidate = nums[i]
    }

    count += (candidate === nums[i]) ? 1 : -1
  }

  return candidate
}

console.log(majorityElement([8,8,7,7,7,8]))
