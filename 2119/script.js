//Example 1:
//
// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
// Example 2:
//
// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
// Example 3:
//
// Input: num = 0
// Output: true
// Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.

/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = (num) => {
  let reversedNums = +num.toString().split('').reverse().join('')
  let doubleReversedNums = +reversedNums.toString().split('').reverse().join('')

  return doubleReversedNums === num
};

console.log(isSameAfterReversals(0))
