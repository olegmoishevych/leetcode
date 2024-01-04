//1704. Determine if String Halves Are Alike
// Easy
// Topics
// Companies
// Hint
// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
//
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
//
// Return true if a and b are alike. Otherwise, return false.
//
//
//
// Example 1:
//
// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:
//
// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  let mid = s.length / 2
  console.log(mid)
  let aCount = 0
  let bCount = 0

  for (let i = 0; i < s.length; i++) {

    if(vowels.has(s[i])){
      console.log(vowels[s[i]])
      i < mid ? aCount++ : bCount++
    }

  }

  return aCount === bCount
};

console.log(halvesAreAlike('MerryChristmas'))
