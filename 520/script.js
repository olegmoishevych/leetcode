//Example 1:
//
// Input: word = "USA"
// Output: true
// Example 2:
//
// Input: word = "FlaG"
// Output: false

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  let ruleThree = word.toUpperCase() === word;
  let ruleOne = word.slice(1).toLowerCase() === word.slice(1);
  let ruleTwo = word.toLowerCase() === word;

  return ruleThree || ruleOne || ruleTwo
}

console.log(detectCapitalUse('FlaG'))
