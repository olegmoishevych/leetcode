// //Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
//
// //a = "xyaabbbccccdefww"
// // b = "xxxxyyyyabklmopq"
// // longest(a, b) -> "abcdefklmopqwxy"
// //
// // a = "abcdefghijklmnopqrstuvwxyz"
// // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
//
// // const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')
// //
// // console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'))
//
// //For example, take 153 (3 digits), which is narcissistic:
// //
// //     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// // and 1652 (4 digits), which isn't:
// //
// //     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
//
// function narcissistic(number) {
//   let numberStrLength = number.toString().split('').length
//   let mappedNumber = number.toString().split('')
//   let totalSum = 0
//
//
//   for (let i = 0; i < mappedNumber.length; i++) {
//     totalSum += Math.pow(mappedNumber[i],numberStrLength)
//   }
//
//   return totalSum === number
// }
//
// console.log(isNarcissistic(1652))

// const strCounter = (str) => {
//   let counter = {}
//
//   for (const char of str) {
//     counter[char] = (counter[char] || 0) + 1
//   }
//
//   return counter
// }
//
// console.log(strCounter('strr'))

//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  """is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

// const order = (words) => words.split(' ').sort((a,b) => a.match(/\d+/)[0] - b.match(/\d+/)[0]).join(' ')
//
// console.log(order("is2 Thi1s T4est 3a"))

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

const addToArrayForm = (num, k) => {
  const sum = BigInt(num.join('')) + BigInt(k)

  return sum.toString().split('')
}

console.log(addToArrayForm([2,1,5], 806))
