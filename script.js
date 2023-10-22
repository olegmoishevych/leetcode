// /**
//  * @param {number[]} flowerbed
//  * @param {number} n
//  * @return {boolean}
//  */
// let canPlaceFlowers = function(flowerbed, n) {
//     let count = 0
//
//     for (let i = 0; i < flowerbed.length; i++) {
//         if(!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]){
//             flowerbed[i] = 1
//             count++
//         }
//     }
//
//     return count >= n
// };
//
// // Input: flowerbed = [1,0,0,0,1], n = 1
// // Output: true
//
// // Input: flowerbed = [1,0,0,0,1], n = 2
// // Output: false
// // O(n), где n — это длина массива flowerbed
//
// console.log(canPlaceFlowers([1,0,0,0,1], 1))

// let double = (arr) => {
//     let map = new Map()
//     let array = []
//
//     for (let i = 0; i < arr.length; i++) {
//         if(map.has(arr[i])){
//             array.push(arr[i])
//         }else {
//             map.set(arr[i], 1)
//         }
//     }
//     return array.length > 0 ? array : null
// }
// console.log(double([1,2,3,4,5,5,5,6,6]))

// let countOfString = (str) => {
//     let obj = {}
//
//     for (const word of str) {
//         if(!obj[word]){
//             obj[word] = 1
//         }else {
//             obj[word]++
//         }
//     }
//     return obj
// }
// console.log(countOfString('strrr'))

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// // O(n)
// let pivotIndex = function(nums) {
//     let totalSum = 0
//     let leftSum = 0
//
//     for (let i = 0; i < nums.length; i++) {
//         totalSum += nums[i]
//     }
//     console.log(leftSum)
//     for (let i = 0; i < nums.length; i++) {
//         console.log(totalSum)
//         console.log(leftSum - leftSum - nums[i])
//         console.log(i)
//         if(leftSum === totalSum - leftSum - nums[i]){
//             console.log(i)
//             return i
//         }
//         leftSum += nums[i]
//     }
//
//     return - 1
//
// };
// console.log(pivotIndex([1,7,3,6,5,6]))

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// let reverseList = function(head) {
//     let prev = null
//     let current = head
//     let next = null
//
//     while (current !== null){
//         next = current.next
//         current.next = prev
//         prev = current
//         current = next
//     }
//     head = prev
//     return head
// }
// // O(n)
// console.log(reverseList([1,2]))
//
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// let maxSubArray = function(nums) {
//     let max_current = nums[0]
//     let max_global = nums[0]
//
//     for (let i = 1; i < nums.length; i++) {
//         max_current = Math.max(nums[i], max_current + nums[i])
//
//         if(max_current > max_global){
//             max_global = max_current
//         }
//     }
//     return max_global
// };
//
// // let numbers = [1, 2, 3, 4, 5];
// // let maxNumber = Math.max(...numbers); // вернет 5
//
// //O(n)
// console.log(maxSubArray([5,4,-1,7,8]))
//
// /**
//  * @param {Array} arr
//  * @param {Function} fn
//  * @return {Array}
//  */
// // O(n log n).
// const sortBy = (arr, fn) => arr.sort((a,b) => fn(a) - fn(b))
// console.log(sortBy([1,2,3,4,5], fn = (x) => x))

// /**
//  * @param {Object|Array} obj
//  * @return {boolean}
//  *///O(n)
// let isEmpty = (obj)=> Object.keys(obj).length === 0
// console.log(isEmpty({}))

// function sortDigitsDescending(digits) {
//     return digits.sort((a, b) => b - a);
// }
//
// const digits = [3, 9, 5, 4, 8];
// const sortedDigits = sortDigitsDescending(digits);
// console.log(sortedDigits);  //[9, 8, 5, 4, 3]
// /**
//  * @param {string} val
//  * @return {Object}
//  */
// let expect = function(val) {
//  return {
//      toBe(value){
//          if(value === val) return true
//          throw new Error('Not Equal')
//      },
//      notToBe(value) {
//          if(value !== val) return true
//          throw new Error('Equal')
//      }
//  }
// };
//
// try{
//     let res = expect(5).notToBe(5)
//     console.log(res)
// }catch (e){
//     console.log(e)
// }
//
// // // O(1)
// /**
//  * expect(5).toBe(5); // true
//  * expect(5).notToBe(5); // throws "Equal"
//  */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let buildArray = function(nums) {
    let ans = []

    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]])
    }

    return ans
};
console.log(buildArray([0,1,2,3,4,5]))
