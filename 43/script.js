import bigInt from 'big-integer'

//Example 1:
//
// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:
//
// Input: num1 = "123", num2 = "456"
// Output: "56088"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => String(BigInt(num1) * BigInt(num2))
console.log(multiply("2", "3"))

