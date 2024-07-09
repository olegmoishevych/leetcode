//Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// const findOdd = (A) => {
//   let count = {}
//
//   for (const a of A) {
//     count[a] = (count[a] || 0) + 1
//   }
//
//   for (const num in count) {
//
//     if(count[num] % 2 !== 0){
//       return +num
//     }
//
//   }
// }
const findOdd = (arr) => arr.reduce((a,b) => a ^ b)

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
