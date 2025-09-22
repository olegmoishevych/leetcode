//s.startsWith(
//Example 1:
//
// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.
// Example 2:
//
// Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
// Output: false
// Explanation:
// It is impossible to make s using a prefix of arr.
/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = (s, words) => {
  let prefix = '';
  for (let word of words) {
    prefix += word;
    if (s.startsWith(prefix)) {
      if (prefix === s) return true;
    } else {
      return false;
    }
  }
  return false;
};


console.log(isPrefixString('iloveleetcode', ["i","love","leetcode","apples"]))
