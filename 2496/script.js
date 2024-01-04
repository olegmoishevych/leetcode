/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  let length = strs.map(item => {
    if (!isNaN(item) && !Array.isArray(item)) {
      return parseInt(item, 10)
    }

    return item.length

  });

  return Math.max(...length)
};

console.log(maximumValue(["alic3","bob","3","4","00000"]))
//Example 1:
// Input: strs = ["alic3","bob","3","4","00000"]
// Output: 5

//Example 2:
// Input: strs = ["1","01","001","0001"]
// Output: 1
