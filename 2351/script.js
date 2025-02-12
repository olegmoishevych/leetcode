//Example 1:
// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.
// Example 2:
// Input: s = "abcdd"
// Output: "d"
// Explanation:
// The only letter that appears twice is 'd' so we return 'd'.

/**
 * @param {string} s
 * @return {character}
 */
const repeatedCharacter = (s) => {
  // let obj = {}
  //
  // for (const char of s) {
  //   obj[char] = (obj[char] || 0) + 1
  //
  //   if(obj[char] === 2){
  //     return char
  //   }
  //
  // }
  let set = new Set()

  for (const char of s) {
    if(set.has(char)) {
      return char
    }

    set.add(char)
  }
}

console.log(repeatedCharacter('abcdd'))
