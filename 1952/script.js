//Example 1:
//
// Input: n = 2
// Output: false
// Explantion: 2 has only two divisors: 1 and 2.
// Example 2:
//
// Input: n = 4
// Output: true
// Explantion: 4 has three divisors: 1, 2, and 4.

/**
 * @param {number} n
 * @return {boolean}
 */
const isThree = (n) => {
  for (let i = 2; i < Math.sqrt(n); i++) {

    if(n % i === 0) return false

  }

  return Math.sqrt(n) % 1 === 0 && n !== 1
}

console.log(isThree(1))
