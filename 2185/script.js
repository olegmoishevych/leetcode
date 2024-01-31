//Example 1:
//
// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:
//
// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = (words, pref) => words.filter((el) => el.startsWith(pref)).length;
  // let count = 0

  // for (let i = 0; i < words.length; i++) {
  //   console.log(words[i])
  //   if(words[i].startsWith(pref)){
  //     count++
  //   }
  // }

  // return count


console.log(prefixCount( ["pay","attention","practice","attend"],"at"))
