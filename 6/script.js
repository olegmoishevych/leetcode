//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


//a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')
//
// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'))

//For example, take 153 (3 digits), which is narcissistic:
//
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

function narcissistic(number) {
  let numberStrLength = number.toString().split('').length
  let mappedNumber = number.toString().split('')
  let totalSum = 0


  for (let i = 0; i < mappedNumber.length; i++) {
    totalSum += Math.pow(mappedNumber[i],numberStrLength)
  }

  return totalSum === number
}

console.log(isNarcissistic(1652))
