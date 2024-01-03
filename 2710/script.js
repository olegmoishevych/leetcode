//Example 1:
//
// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".
// Example 2:
//
// Input: num = "123"
// Output: "123"
// Explanation: Integer "123" has no trailing zeros, we return integer "123".

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  let arr = []

  for (let i = num.length - 1; i >= 0; i--) {
    let curNum = +num[i]
    console.log(curNum)

    if(curNum !== 0){
      arr.unshift(+num.slice(0, i + 1))
      break
    }


  }

  return arr.join('')
};

console.log(removeTrailingZeros("51230100"))
