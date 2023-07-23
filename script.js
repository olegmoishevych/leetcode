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

// //nums = [2,7,11,15], target = 9
//     // [0,1]
// const twoSum = (nums, target) => {
//         let map = new Map();
//
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === target) {
//                 return [i];
//             }
//             let complement = target - nums[i];
//             if (map.has(complement)) {
//                 return [map.get(complement), i];
//             }
//             map.set(nums[i], i);
//         }
//         return null
//     };
// // console.log(twoSum([2,7,11,15], 2))
// // const arr = [1,2,3,4,5];
// // const index = arr.map((el, index) => index)
// // console.log(index)
//
// const arr = [2,7,11,15]
// let map = new Map()
// for (let i = 0; i < arr.length; i++) {
//     map.set(i, arr[i])
// }
// console.log(map)

/**
 * [LeetCode Problem #13](https://leetcode.com/problems/roman-to-integer/)
 * Given a string s representing a Roman numeral, convert it to an integer.
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 * For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 *
 * Example 1:
 *
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 * Example 2:
 *
 * Input: s = "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * Example 3:
 *
 * Input: s = "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 *
 * Constraints:
 *
 * 1 <= s.length <= 15
 * s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 *
 * @param {string} s
 * @return {number}
 */



const romanToInt = (s) =>{
    const roman = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};

    let total = 0

    for (let i = 0; i < s.length; i++) {
        if(roman[s[i]] < roman[s[i + 1]]){
            total -= roman[s[i]]
        }else {
            total += roman[s[i]]
        }
    }
    return total
};
console.log(romanToInt("MCMXCIV")); // Ожидается 1994
// console.log(romanToInt("MCMXCIV")); // Ожидается 1994