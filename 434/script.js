//Example 1:
//
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:
//
// Input: s = "Hello"
// Output: 1

/**
 * @param {string} s
 * @return {number}
 */
const countSegments = (s) => s.split(' ').filter(el => el !== '').length
console.log(countSegments(", , , ,        a, eaefa"))
