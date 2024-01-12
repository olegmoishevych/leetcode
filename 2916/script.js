//Example 1:
//
// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:
//
// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  if(!this.length) return -1

  return this[this.length - 1]
};

const arr = [null, {}, 3];
console.log(arr.last()) // 3
