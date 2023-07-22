/**
 * [LeetCode Problem #1](https://leetcode.com/problems/....)
 * Returns the last element of an array. Returns -1 if array is empty.
 * @param {Array} arr - Input array.
 * @return {number} - Last element of array.
 */
// Array.prototype.last = function () {
//     if (this.length === 0) return -1;
//     return this[this.length - 1];
// };

// Testing the function
// const arr = [1, 2, 3]; should return 3
// const arr = []; should return -1
// console.log(arr.last());

/**
 * [LeetCode Problem #2](https://leetcode.com/problems/....)
 * Returns a reduced array using a reducer function.
 * @param {Array} nums - Array of numbers.
 * @param {function} fn - Reducer function.
 * @param {*} init - Initial value.
 * @return {*} - Reduced value.
 */
// var reduce = function (nums, fn, init) {
//     if (nums.length === 0) {
//         return init;
//     }
//     let val = init;
//     for (let i = 0; i < nums.length; i++) {
//         val = fn(val, nums[i]);
//     }
//     return val;
// };

/**
 * [LeetCode Problem #2](https://leetcode.com/problems/two-sum/)
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//nums = [2,7,11,15], target = 9
    // [0,1]
const twoSum = (nums, target) => {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                return [i];
            }
            let complement = target - nums[i];
            if (map.has(complement)) {
                return [map.get(complement), i];
            }
            map.set(nums[i], i);
        }
        return null
    };
console.log(twoSum([2,7,11,15], 2))
// const arr = [1,2,3,4,5];
// const index = arr.map((el, index) => index)
// console.log(index)


