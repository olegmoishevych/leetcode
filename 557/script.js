//Example 1:
//
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:
//
// Input: s = "Mr Ding"
// Output: "rM gniD"

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  let a = s.split('').reverse().filter((el) => el !== '').join('')
  let b = a.split(' ').reverse().join(' ')
  console.log(a)
  console.log(b)
  return b
}

console.log(reverseWords('Mr Ding'))
