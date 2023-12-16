/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = (nums) => {
  return nums.map((el) => el.toString().split('')).flat()
}

console.log(separateDigits([11,2,3,4,5,6]))
