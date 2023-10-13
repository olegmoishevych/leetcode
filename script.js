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

/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
let pivotIndex = function(nums) {
    let totalSum = 0
    let leftSum = 0

    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }
    console.log(leftSum)
    for (let i = 0; i < nums.length; i++) {
        console.log(totalSum)
        console.log(leftSum - leftSum - nums[i])
        console.log(i)
        if(leftSum === totalSum - leftSum - nums[i]){
            console.log(i)
            return i
        }
        leftSum += nums[i]
    }

    return - 1

};
console.log(pivotIndex([1,7,3,6,5,6]))
