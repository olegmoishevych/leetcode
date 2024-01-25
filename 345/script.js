//Given a string s, reverse only all the vowels in the string and return it.
//
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
//
//
//
// Example 1:
//
// Input: s = "hello"
// Output: "holle"
// Example 2:
//
// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = s.match(/[aeiou]/gi);
  console.log(vowels)

  return s.replace(/[aeiou]/ig, el => vowels.pop());
};


console.log(reverseVowels('hello'))
//const str = 'apelsinu';
//
// const sortedStr = str.split('').sort((a, b) => {
//   const order = { 'a': 1, 'u': 2 }; // Задаем порядок сортировки букв
//   return (order[a] || 0) - (order[b] || 0);
// }).join('');
//
// console.log(sortedStr);
