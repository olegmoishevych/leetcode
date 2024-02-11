//Example 1:
//
// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:
//
// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:
//
// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = (s) => {
  let letters = s.split('').filter(char => /[a-zA-Z]/.test(char))

  return s.split('').map(el => /[a-zA-Z]/.test(el) ? letters.pop() : el).join('')
}

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"))
