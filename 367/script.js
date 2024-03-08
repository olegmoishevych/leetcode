//Example 1:
//
// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
// Example 2:
//
// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => Math.sqrt(num) % 1 === 0


console.log(isPerfectSquare(16))
