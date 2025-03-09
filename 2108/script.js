//Example 1:
// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:
//
// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:
//

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

const firstPalindrome = (words) => {
  const findPalindromeElement = words.find((word) => {
    const reversedElement = word.toLowerCase().split('').reverse().join('')

    return word.toLowerCase().split('').join('') === reversedElement
  })

  return findPalindromeElement || ''
  // for (const word of words) {
  //
  //   if(word.toUpperCase().split('').reverse().join('') === word.toUpperCase().split('').join('')){
  //     return word
  //   }
  //
  // }
  // return ''
}

console.log(firstPalindrome(["notapalindrome","racecar"]))
