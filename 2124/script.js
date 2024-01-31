//Example 1:
//
// Input: s = "aaabbb"
// Output: true
// Explanation:
// The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
// Hence, every 'a' appears before every 'b' and we return true.
// Example 2:
//
// Input: s = "abab"
// Output: false
// Explanation:
// There is an 'a' at index 2 and a 'b' at index 1.
// Hence, not every 'a' appears before every 'b' and we return false.
// Example 3:
//
// Input: s = "bbb"
// Output: true
// Explanation:
// There are no 'a's, hence, every 'a' appears before every 'b' and we return true.

/**
 * @param {string} s
 * @return {boolean}
 */
const checkString = (s) => {
  for (let i = 0; i < s.length; i++) {

    if(s[i] === 'b' && s[i + 1] === 'a') {
      return false
    }

  }

  return true
}

console.log(checkString('bbbb'))
