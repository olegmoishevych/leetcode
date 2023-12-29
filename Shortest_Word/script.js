//Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// function findShort(s){
//   let arr = s.split(' ')
//   let minStrLength = Number.MAX_VALUE
//
//   for (let i = 0; i < arr.length; i++) {
//
//     minStrLength = Math.min(minStrLength, arr[i].length)
//
//   }
//
//   return minStrLength
// }

const findShort = (s) => s.
split(' ').
reduce((minLength, word) =>
  Math.min(minLength, word.length), Number.MAX_VALUE)

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
//3
