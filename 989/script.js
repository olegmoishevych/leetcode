//Example 1:
//
// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:
//
// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:
//
// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = (num, k) => {
  let sumOfNums = BigInt(num.join('')) + BigInt(k);
  return sumOfNums.toString().split('').map(Number);
}


console.log(addToArrayForm([1,2,0,0], 34))
