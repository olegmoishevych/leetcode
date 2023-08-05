/**

 Problem #2634
 You are given an integer array arr and a filtering function fn. The task is to return a filtered array filteredArr.

 The fn function takes one or two arguments:
 1. arr[i] - number from the arr
 2. i - index of arr[i]

 filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

 Please solve it without the built-in Array.filter method.

 For example, if the input array is [0,10,20,30] and the filtering function is greaterThan10(n) { return n > 10; }, the output should be [20,30] because only the values 20 and 30 are greater than 10.
 If the input array is [1,2,3] and the filtering function is firstIndex(n, i) { return i === 0; }, the output should be [1] because only the first element of the array satisfies the condition.
 If the input array is [-2,-1,0,1,2] and the filtering function is plusOne(n) { return n + 1 }, the output should be [-2,0,1,2] because the values -2, 0, 1, and 2, when incremented by 1, result in truthy values.

 Example 1:
 Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
 Output: [20,30]
 Explanation: The function filters out values that are not greater than 10.

 Example 2:
 Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
 Output: [1]
 Explanation: fn can also accept the index of each element. In this case, the function removes elements not at index 0.

 Example 3:
 Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
 Output: [-2,0,1,2]
 Explanation: Falsey values such as 0 should be filtered out.

 Constraints:
 1 <= arr.length <= 10^5
 -10^9 <= arr[i] <= 10^9
 @param {number[]} arr
 @param {function} fn
 @return {number[]}
 */

// const filter = function(arr, fn) {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         if(fn(arr[i], i)){
//             result.push(arr[i])
//         }
//     }
//     return result
// };

/**

 Problem #2635
 You are given an integer array arr and a mapping function fn. The task is to return a new array with a transformation applied to each element.

 The returned array should be created such that returnedArray[i] = fn(arr[i], i).

 Please solve it without the built-in Array.map method.

 For example, if the input array is [1,2,3] and the mapping function is plusone(n) { return n + 1; }, the output should be [2,3,4] because each value in the array is increased by one.
 If the input array is [1,2,3] and the mapping function is plusI(n, i) { return n + i; }, the output should be [1,3,5] because each value is increased by its index.
 If the input array is [10,20,30] and the mapping function is constant() { return 42; }, the output should be [42,42,42] because the function always returns 42.

 Example 1:
 Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
 Output: [2,3,4]
 Explanation: The function increases each value in the array by one.

 Example 2:
 Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
 Output: [1,3,5]
 Explanation: The function increases each value by the index it resides in.

 Example 3:
 Input: arr = [10,20,30], fn = function constant() { return 42; }
 Output: [42,42,42]
 Explanation: The function always returns 42.

 Constraints:
 0 <= arr.length <= 1000
 -10^9 <= arr[i] <= 10^9
 fn returns a number
 @param {number[]} arr
 @param {function} fn
 @return {number[]}
 */

// const map = function(arr, fn) {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//        newArr.push(fn(arr[i],i))
//
//     }
//     return newArr
// };

// const map = (arr, fn) => Array.from(arr, fn)
//
// const str = 'hello'
// console.log(Array.from(str))

/**

 Problem #2637
 You are given an asynchronous function `fn` and a time `t` in milliseconds. Your task is to return a new time-limited version of the input function. The function `fn` takes arguments provided to the time-limited function.

 The time-limited function should adhere to the following rules:

 1. If the `fn` completes within the time limit of `t` milliseconds, the time-limited function should resolve with the result.
 2. If the execution of the `fn` exceeds the time limit, the time-limited function should reject with the string "Time Limit Exceeded".

 For example, if the input function `fn` is set to resolve after 100ms and the time limit `t` is set to 50ms, the time-limited function should reject because the time limit was reached before the function could resolve.

 Example 1:
 Input:
 fn = async (n) => {
   await new Promise(res => setTimeout(res, 100));
   return n * n;
 }
 inputs = [5]
 t = 50
 Output: {"rejected":"Time Limit Exceeded","time":50}
 Explanation: The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.

 Example 2:
 Input:
 fn = async (n) => {
   await new Promise(res => setTimeout(res, 100));
   return n * n;
 }
 inputs = [5]
 t = 150
 Output: {"resolved":25,"time":100}
 Explanation: The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.

 Example 3:
 Input:
 fn = async (a, b) => {
   await new Promise(res => setTimeout(res, 120));
   return a + b;
 }
 inputs = [5,10]
 t = 150
 Output: {"resolved":15,"time":120}
 Explanation: The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.

 Example 4:
 Input:
 fn = async () => {
   throw "Error";
 }
 inputs = []
 t = 1000
 Output: {"rejected":"Error","time":0}
 Explanation: The function immediately throws an error.

 Constraints:
 0 <= inputs.length <= 10
 0 <= t <= 1000
 fn returns a promise
 @param {function} fn
 @param {number} t
 @param {any[]} inputs
 @return {Promise}
 */
