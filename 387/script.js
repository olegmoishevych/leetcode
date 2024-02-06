//Example 1:
//
// Input: s = "leetcode"
// Output: 0
// Example 2:
//
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
//
// Input: s = "aabb"
// Output: -1

/**
 * @param {string} s
 * @return {number}
 */
// const firstUniqChar = (s) => {
//   let obj = {}
//
//   for (const char of s) {
//     obj[char] = (obj[char] || 0) +1
//   }
//
//   for (let i = 0; i < s.length; i++) {
//
//     if(obj[s[i]] === 1){
//       return i
//     }
//
//   }
//
//   return -1
// }

const firstUniqChar = (s) => {
  for (let i = 0; i < s.length; i++) {

    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
      return i
    }

  }

  return -1
}

console.log(firstUniqChar('loveleetcode'))
