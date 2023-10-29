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

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// let buildArray = function(nums) {
//     let ans = []
//
//     for (let i = 0; i < nums.length; i++) {
//         ans.push(nums[nums[i]])
//     }
//
//     return ans
// };

// console.log(buildArray([0,1,2,3,4,5]))

// /**
//  * @param {string} address
//  * @return {string}
//  */
// // let defangIPaddr = (address) => address.split('.').join("[.]")
// let defangIPaddr = (address) => {
//     let value = ''
//
//     for (const valueElement of address) {
//         if(valueElement === '.'){
//             value += "[.]"
//         }else {
//             value += valueElement
//         }
//     }
//     return value
// }
//
// console.log(defangIPaddr("111.244.555"))

// let countOfStr = (str) => {
//     let hash = {}
//
//     for (const worlds of str) {
//         if(!hash[worlds]){
//             hash[worlds] = 1
//         }else {
//             hash[worlds]++
//         }
//     }
//
//     return hash
// }
// console.log(countOfStr('ssrssstr'))

// /**
//  * @param {string[]} operations
//  * @return {number}
//  */
// let finalValueAfterOperations = function(operations) {
//     let x = 0
//
//     for (const str of operations) {
//         switch (str) {
//             case '++X':
//             case 'X++':
//                 x++
//                 break;
//             case '--X':
//             case 'X--':
//                 x--
//                 break;
//             default:
//         }
//     }
//
//     return x
// };

//let finalValueAfterOperations = function(operations) {
//     return operations.reduce((x, operation) => {
//         if (operation.includes('+')) return x + 1;
//         if (operation.includes('-')) return x - 1;
//         return x;
//     }, 0);
// };

// console.log(finalValueAfterOperations(['++X', 'X++', '--X']))
//
// /**
//  * @param {string} jewels
//  * @param {string} stones
//  * @return {number}
//  */
// let numJewelsInStones = function(jewels, stones) {
//     let countOfJewels = 0
//
//     for (const stone of stones) {
//
//         if(jewels.includes(stone)){
//             countOfJewels++
//         }
//     }
//
//     return countOfJewels
// };
//
// console.log(numJewelsInStones('bB', 'aBBbbaA'))
//
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// let countPairs = function(nums, target) {
//     let count = 0
//
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] < target){
//                 count++
//             }
//         }
//     }
//     return count
// };
//
// console.log(countPairs([-1, 1, 2, 3, 1], 2))

// function lcs(X, Y) {
//     const m = X.length;
//     const n = Y.length;
//     const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
//
//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (X[i - 1] === Y[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1] + 1;
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//             }
//         }
//     }
//
//     let index = dp[m][n];
//     let lcs = Array(index).fill('');
//
//     let i = m, j = n;
//     while (i > 0 && j > 0) {
//         if (X[i - 1] === Y[j - 1]) {
//             lcs[index - 1] = X[i - 1];
//             i--; j--; index--;
//         } else if (dp[i - 1][j] > dp[i][j - 1]) {
//             i--;
//         } else {
//             j--;
//         }
//     }
//
//     return lcs.join('');
// }
//
// const X = "AGGTAB";
// const Y = "GXTXAYB";
// console.log("The Longest Common Subsequence is: " + lcs(X, Y));

// /**
//  * @param {string[]} sentences
//  * @return {number}
//  */
// let mostWordsFound = function(sentences) {
//     let maxCount = 0
//
//     for (const sentence of sentences) {
//         console.log(sentence)
//         let lenghtOfSentence = sentence.split(' ').length
//         console.log(lenghtOfSentence)
//         if(lenghtOfSentence > maxCount){
//             maxCount = lenghtOfSentence
//         }
//     }
//     console.log(maxCount)
//     return maxCount
//
// };
// console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))

// Евклидово расстояние между двумя точками
function euclideanDistance(point1, point2) {
    let sum = 0;
    for (let i = 0; i < point1.length; i++) {
        sum += Math.pow(point1[i] - point2[i], 2);
    }
    return Math.sqrt(sum);
}

// k-NN классификация
function kNN(data, query, k) {
    const distances = [];

    // Вычисляем расстояния от запроса до всех точек в данных
    for (const [point, label] of data) {
        const distance = euclideanDistance(point, query);
        distances.push([distance, label]);
    }

    // Сортируем и выбираем k ближайших соседей
    const kNearest = distances.sort((a, b) => a[0] - b[0]).slice(0, k);

    // Подсчитываем голоса для каждого класса
    const votes = {};
    for (const [, label] of kNearest) {
        votes[label] = (votes[label] || 0) + 1;
    }

    // Возвращаем класс с наибольшим количеством голосов
    return Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
}

// Пример использования
const data = [
    [[1, 1], 'A'],
    [[2, 2], 'A'],
    [[3, 3], 'A'],
    [[6, 6], 'B'],
    [[7, 7], 'B'],
    [[8, 8], 'B'],
];
const query = [5, 5];
const k = 3;

const label = kNN(data, query, k);
console.log(`The query point belongs to class ${label}`);
