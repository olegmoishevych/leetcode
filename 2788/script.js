//Example 1:
//
// Input: words = ["one.two.three","four.five","six"], separator = "."
// Output: ["one","two","three","four","five","six"]
// Explanation: In this example we split as follows:
//
// "one.two.three" splits into "one", "two", "three"
// "four.five" splits into "four", "five"
// "six" splits into "six"
//
// Hence, the resulting array is ["one","two","three","four","five","six"].
// Example 2:
//
// Input: words = ["$easy$","$problem$"], separator = "$"
// Output: ["easy","problem"]
// Explanation: In this example we split as follows:
//
// "$easy$" splits into "easy" (excluding empty strings)
// "$problem$" splits into "problem" (excluding empty strings)
//
// Hence, the resulting array is ["easy","problem"].
// Example 3:
//
// Input: words = ["|||"], separator = "|"
// Output: []
// Explanation: In this example the resulting split of "|||" will contain only empty strings, so we return an empty array [].

/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
const splitWordsBySeparator = (words, separator) => {
  return words.join(separator).split(separator).filter(Boolean)
}

console.log(splitWordsBySeparator(["|||"], "|"))
