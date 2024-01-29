//Example 1:
//
// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:
//
// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = (s1, s2) => {
  let countObj = {}

  for (const word of s1.split(' ')) {
    countObj[word] = (countObj[word] || 0) + 1
  }

  for (const word of s2.split(' ')) {
    countObj[word] = (countObj[word] || 0) + 1
  }

  let result = []

  for (const key in countObj) {
    if(countObj[key] === 1){
      result.push(key)
    }
  }

  return result
}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'))
