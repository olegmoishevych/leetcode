//1832. Check if the Sentence Is Pangram
// Easy
// Topics
// Companies
// Hint
// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
//
//
// Example 1:
//
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:
//
// Input: sentence = "leetcode"
// Output: false

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = (sentence) => new Set(sentence).size === 26

console.log(checkIfPangram('leetcode'))
