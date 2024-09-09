//Example 1:
//
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:
//
// Input: arr = [1,2]
// Output: false
// Example 3:
//
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  let obj = {}
  let set = new Set()

  for (const el of arr) {
    obj[el] = (obj[el] || 0) + 1
  }

  for (const key in obj) {
    console.log(key)
    if(set.has(obj[key])){
      return false
    }else {
      set.add(obj[key])
    }
  }

  return true
};
console.log(uniqueOccurrences([1,2]))
