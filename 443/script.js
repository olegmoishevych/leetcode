//Example 1:
//
// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:
//
// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:
//
// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
  if (chars.length < 2) return chars

  let obj = {}
  let charsStr = chars.toString().trim().split(',')


  for (const charsStrElement of charsStr) {

    if(!obj[charsStrElement]){
      obj[charsStrElement] = 1

    }else {
      obj[charsStrElement]++
    }
  }


  return Object
    .entries(obj)
    .map(([key, value]) => key + value)
    .join('')
    .split('')
};

console.log(compress( ["a","a","b","b","c","c","c"]))
