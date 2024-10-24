//Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function(str1, str2) {
  if(str1 + str2 !== str2 + str1) return ''

  const gcd = (a,b) => b === 0 ? a : gcd(b, a % b)
  const gcdLength = gcd(str1.length, str2.length)

  return str1.substring(0, gcdLength)
};


console.log(gcdOfStrings('LEET', 'CODE'))
