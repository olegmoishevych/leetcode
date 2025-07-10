//1816. Truncate Sentence

// Easy
// Topics
// Companies
// Hint
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).
// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// Example 1:
//
// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".
// Example 2:
//
// Input: s = "What is the solution to this problem", k = 4
// Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".
// Example 3:
//
// Input: s = "chopper is not a tanuki", k = 5
// Output: "chopper is not a tanuki"

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = (s, k) => s
    .split(' ')
    .slice(0, k)
    .join(' ')


// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
console.log(truncateSentence("Hello how are you Contestant"), 4)
