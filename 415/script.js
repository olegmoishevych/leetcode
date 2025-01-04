//Example 1:
//
// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:
//
// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:
//
// Input: num1 = "0", num2 = "0"
// Output: "0"
// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
const addStrings = (num1, num2) => (BigInt(num1) + BigInt(num2)).toString()
console.log(addStrings("456", "77"))
