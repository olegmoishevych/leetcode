//2160. Minimum Sum of Four Digit Number After Splitting Digits

// Easy
// Topics
// Companies
// Hint
// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.
//
// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.
// Example 1:
//
// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
// Example 2:
//
// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.

/**
 * @param {number} num
 * @return {number}
 */
// let minimumSum = function(num) {
//   let arrNum = num.toString().split('').sort((a,b) => a - b)
//   let num1 = 0
//   let num2 = 0
//
//   for (let i = 0; i < arrNum.length; i++) {
//
//     if(i % 2) {
//       num1 = num1 + Number(arrNum[i])
//     } else {
//       num2 = num2 + Number(arrNum[i])
//     }
//
//   }
//
//   return num1 + num2
// };

let minimumSum = (num) => {
  let target = num.toString().split('').sort()

  return +(target[0] + target[2]) + +(target[1] + target[3])
}

console.log(minimumSum(4009))
