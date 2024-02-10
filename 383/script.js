//Example 1:
//
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
//
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
//
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  let magazineObj = {}

  for (const char of magazine) {
    magazineObj[char] = (magazineObj[char] || 0) + 1;
  }


  for (const r of ransomNote) {

    if (magazineObj[r]) {
      magazineObj[r]--
    } else {
      return false
    }

  }

  return true
}

console.log(canConstruct('aa', 'aab'))
