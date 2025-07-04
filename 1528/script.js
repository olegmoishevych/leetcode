//1528. Shuffle String
// Easy
// Topics
// Companies
// Hint
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.
//
//
// Example 1:
//
//
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:
//
// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
let restoreString = (s, indices) => indices.reduce((acc, curr, i) => (acc[curr] = s[i], acc), []).join('');



console.log(restoreString('codeleet'), [4,5,6,7,0,2,1,3])
