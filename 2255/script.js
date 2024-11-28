//Example 1:
// Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
// Output: 3
// Explanation:
// The strings in words which are a prefix of s = "abc" are:
// "a", "ab", and "abc".
// Thus the number of strings in words which are a prefix of s is 3.
// Example 2:
//
// Input: words = ["a","a"], s = "aa"
// Output: 2
// Explanation:
// Both of the strings are a prefix of s.
// Note that the same string can occur multiple times in words, and it should be counted each time.

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
const countPrefixes = (words, s) => words.filter(el => s.startsWith(el)).length

  // let count = 0
  //
  // for (let i = 0; i < words.length; i++) {
  //   if(s.startsWith(words[i])){
  //     count++
  //   }
  // }
  //
  // return count

console.log(countPrefixes(["a","b","c","ab","bc","abc"], 'abc'))
