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



// const romanToInt = (s) =>{
//     const roman = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
//
//     let total = 0
//
//     for (let i = 0; i < s.length; i++) {
//         if(roman[s[i]] < roman[s[i + 1]]){
//             total -= roman[s[i]]
//         }else {
//             total += roman[s[i]]
//         }
//     }
//     return total
// };
// console.log(romanToInt("MCMXCIV")); // Ожидается 1994

/**
 * [LeetCode Problem #14](https://leetcode.com/problems/longest-common-prefix/)
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * For example, if the input array is ["flower","flow","flight"], the output should be "fl". This is because "fl" is the longest common prefix that is shared by all the strings in the array.
 * If the input array is ["dog","racecar","car"], the output should be "". This is because there is no common prefix among the input strings.
 *
 * Example 1:
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * Explanation: "fl" is the longest common prefix that is shared by all the strings in the array.
 * Example 2:
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 *
 * @param {string[]} strs
 * @return {string}
 */

// const longestCommonPrefix = (strs) => {
//     if(strs.length === 0) return ''
//     let prefix = strs[0]
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) !== 0){
//             prefix = prefix.substring(0, prefix.length - 1)
//             if(prefix === "") return ""
//         }
//     }
//     return prefix
// };
//
// console.log(longestCommonPrefix(["flower","flow","flight"]))

/**
 * [LeetCode Problem #20](https://leetcode.com/problems/valid-parentheses/)
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * For example, if the input string is "()", the output should be true. This is because the string is valid as per the rules.
 * If the input string is "()[]{}", the output should be true. This is because the string is valid as per the rules.
 * If the input string is "(]", the output should be false. This is because the string is not valid as per the rules.
 *
 * Example 1:
 *
 * Input: s = "()"
 * Output: true
 * Explanation: The string is valid as per the rules.
 * Example 2:
 *
 * Input: s = "()[]{}"
 * Output: true
 * Explanation: The string is valid as per the rules.
 * Example 3:
 *
 * Input: s = "(]"
 * Output: false
 * Explanation: The string is not valid as per the rules.
 *
 * Constraints:
 *
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 *
 * @param {string} s
 * @return {boolean}
 */

// const isValid = (s)=>{
//     const validSymbols = new Map();
//     validSymbols.set('(', ')');
//     validSymbols.set('[', ']');
//     validSymbols.set('{', '}');
//
//     const stack = []
//
//     for (let i = 0; i < s.length; i++) {
//         if(validSymbols.has(s[i])){
//             stack.push(s[i])
//         }else {
//             if(stack.length === 0 || validSymbols.get(stack.pop()) !== s[i]){
//                 return false
//             }
//         }
//     }
//     return !stack.length
// };
// console.log(isValid('{}'))

/**

 LeetCode Problem #121
 You are given an array prices where prices[i] is the price of a given stock on the ith day.
 You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 For example, if the input array is [7,1,5,3,6,4], the output should be 5. This is because the maximum profit can be achieved by buying on day 2 (price = 1) and selling on day 5 (price = 6), profit = 6-1 = 5.
 Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 If the input array is [7,6,4,3,1], the output should be 0. This is because no transactions can be done and the max profit = 0.
 Example 1:
 Input: prices = [7,1,5,3,6,4]
 Output: 5
 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 Example 2:
 Input: prices = [7,6,4,3,1]
 Output: 0
 Explanation: In this case, no transactions are done and the max profit = 0.
 Constraints:
 1 <= prices.length <= 10^5
 0 <= prices[i] <= 10^4
 @param {number[]} prices
 @return {number}
 */

// const maxProfit = function(prices) {
//     const maxPrise = Infinity
//     console.log(maxPrise)
// };
//
// // const maxPrise = Infinity
// // console.log(maxPrise)

/**

 LeetCode Problem #217
 You are given an integer array nums. The task is to determine if any value appears at least twice in the array. If any value is repeated, return true. If all elements are distinct, return false.
 For example, if the input array is [1,2,3,1], the output should be true because the value 1 appears twice.
 If the input array is [1,2,3,4], the output should be false because all values are distinct.
 If the input array is [1,1,1,3,3,4,3,2,4,2], the output should be true because the values 1, 3, and 4 appear more than once.
 Example 1:
 Input: nums = [1,2,3,1]
 Output: true
 Explanation: The value 1 appears twice in the array.
 Example 2:
 Input: nums = [1,2,3,4]
 Output: false
 Explanation: All values in the array are distinct.
 Example 3:
 Input: nums = [1,1,1,3,3,4,3,2,4,2]
 Output: true
 Explanation: The values 1, 3, and 4 appear more than once in the array.
 Constraints:
 1 <= nums.length <= 10^5
 -10^9 <= nums[i] <= 10^9
 @param {number[]} nums
 @return {boolean}
 */

// const containsDuplicate = (nums) => {
//     const actualNums = new Map()
//     let dublicates = 0
//     for (let i = 0; i < nums.length; i++) {
//         actualNums.set(nums[i], (actualNums.get(nums[i]) || 0) + 1)
//     }
//     actualNums.forEach(value => {
//         if(value >1){
//          dublicates++
//         }
//     })
//     return dublicates
// };
//
// console.log(containsDuplicate([1,2,3,4,5,2,3,4]))

//The given description is not related to the LeetCode Problem #217. It appears to be a description of another problem related to function composition and evaluation.
//
// The problem is titled "Function Composition." Given an array of functions [f1, f2, f3, ..., fn], the task is to return a new function that represents the composition of all the functions in the array.
//
// Function composition is defined as fn(x) = f(g(h(x))).
//
// In this context, each function in the array takes an integer as input and returns an integer as output.
//
// The function composition of an empty list of functions is defined as the identity function f(x) = x.
//
// The description provides three examples to illustrate how the function composition works. For example:
//
// Example 1:
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
//
// Example 2:
// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
//
// Example 3:
// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function.
//
