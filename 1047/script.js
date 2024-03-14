//Example 1:
//
// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
// Example 2:
//
// Input: s = "azxxzy"
// Output: "ay"

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = (s) => {
  let stack = []

  for (const char of s) {
    if(stack.length === 0 || stack[stack.length - 1] !== char){
      stack.push(char)
    }else {
      stack.pop()
    }
  }

  return stack.join('')
}

console.log(removeDuplicates('azxxzy'))
