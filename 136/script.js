//Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
//
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
//
// Input: nums = [1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
// const singleNumber = (nums) => {
//   return nums.filter((el) => {
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//
//       if(nums[i] === el){
//         count++
//       }
//
//     }
//
//     return count === 1
//
//   })
//
// }

const singleNumber = (nums) => nums.reduce((prev, curr) => prev ^ curr, 0)
  // let result = 0;
  //
  // for (let num of nums) {
  //   result ^= num;
  // }
  //
  // return result;

console.log(singleNumber([4,1,2,1,2]))
