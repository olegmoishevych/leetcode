//Example 1:
//
// Input: nums = [[1,2],[3,4]], operation = "Add"
// Output: 10
// Explanation:
// const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// obj1 + obj2; // 10
// Example 2:
//
// Input: nums = [[23,98,42,70]], operation = "String"
// Output: "[23,98,42,70]"
// Explanation:
// const obj = new ArrayWrapper([23,98,42,70]);
// String(obj); // "[23,98,42,70]"
// Example 3:
//
// Input: nums = [[],[]], operation = "Add"
// Output: 0
// Explanation:
// const obj1 = new ArrayWrapper([]);
// const obj2 = new ArrayWrapper([]);
// obj1 + obj2; // 0

/**
 * @param {number[]} nums
 * @return {void}
 */
const ArrayWrapper = function(nums) {
  this.nums = nums
}

ArrayWrapper.prototype.valueOf = function() {
  return this.nums.reduce((prevValue, currValue) => prevValue + currValue, 0)
}

ArrayWrapper.prototype.toString = function() {
  return `[${this.nums.toString()}]`
}

const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2)

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

