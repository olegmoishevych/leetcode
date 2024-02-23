//Example 1:
//
// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:
//
// Input: nums = [3,1,3,4,2]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
// const findDuplicate = nums => nums.find((num, index) => nums.indexOf(num) !== index);

const findDuplicate = (nums) => {
  let set = new Set()
  let n

  for (const num of nums) {

    if(set.has(num)){
      n = num
    }

    set.add(num)
  }

  return n
}

console.log(findDuplicate([1,3,4,2,2]))
