//Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */

var countWords = function(words1, words2) {
  let count = 0;
  let set1 = new Set(words1);
  let set2 = new Set(words2);

  for (const w of set1) {
    if (set2.has(w) &&
      words1.filter((e) => e === w).length === 1 &&
      words2.filter((e) => e === w).length === 1) {
      count++;
    }
  }

  return count;
};


console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]))
