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

const filter = function(arr, fn) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)){
            result.push(arr[i])
        }
    }
    return result
};

