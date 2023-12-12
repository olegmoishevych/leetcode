// //1281. Subtract the Product and Sum of Digits of an Integer
// // Easy
// // Topics
// // Companies
// // Hint
// // Given an integer number n, return the difference between the product of its digits and the sum of its digits.
// //
// //
// // Example 1:
// //
// // Input: n = 234
// // Output: 15
// // Explanation:
// // Product of digits = 2 * 3 * 4 = 24
// // Sum of digits = 2 + 3 + 4 = 9
// // Result = 24 - 9 = 15
// // Example 2:
// //
// // Input: n = 4421
// // Output: 21
// // Explanation:
// // Product of digits = 4 * 4 * 2 * 1 = 32
// // Sum of digits = 4 + 4 + 2 + 1 = 11
// // Result = 32 - 11 = 21
//
// /**
//  * @param {number} n
//  * @return {number}
//  */
// let subtractProductAndSum = function(n) {
//   let num = n.toString().split('')
//   let sum1 = 1
//   let sum2 = 0
//
//   for (let i = 0; i < num.length; i++) {
//      sum1 *= parseInt(num[i])
//      sum2 += parseInt(num[i])
//   }
//
//   return sum1 - sum2
// };
//
// console.log(subtractProductAndSum(705))


// var foo = (arr1, arr2) => {
//   var set = new Set(arr1)
//
//   return arr2.filter( (num) => set.has( num ))
// }
//
// console.log(foo([1, 2, 3, 4, 5, 6], [3, 4, 7, 8, 9, 1]));


// let foo = (s) => {
//   let obj = {}
//
//   for (const word of s) {
//     if(!obj[word]){
//       obj[word] = 1
//     }else {
//       obj[word]++
//     }
//   }
//
//   return obj
// }
//
// console.log(foo('stringgg'))



