/**

 Problem #2634
 You are given an integer array arr and a filtering function fn. The task is to return a filtered array filteredArr.

 The fn function takes one or two arguments:
 1. arr[i] - number from the arr
 2. i - index of arr[i]

 filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

 Please solve it without the built-in Array.filter method.

 For example, if the input array is [0,10,20,30] and the filtering function is greaterThan10(n) { return n > 10; }, the output should be [20,30] because only the values 20 and 30 are greater than 10.
 If the input array is [1,2,3] and the filtering function is firstIndex(n, i) { return i === 0; }, the output should be [1] because only the first element of the array satisfies the condition.
 If the input array is [-2,-1,0,1,2] and the filtering function is plusOne(n) { return n + 1 }, the output should be [-2,0,1,2] because the values -2, 0, 1, and 2, when incremented by 1, result in truthy values.

 Example 1:
 Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
 Output: [20,30]
 Explanation: The function filters out values that are not greater than 10.

 Example 2:
 Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
 Output: [1]
 Explanation: fn can also accept the index of each element. In this case, the function removes elements not at index 0.

 Example 3:
 Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
 Output: [-2,0,1,2]
 Explanation: Falsey values such as 0 should be filtered out.

 Constraints:
 1 <= arr.length <= 10^5
 -10^9 <= arr[i] <= 10^9
 @param {number[]} arr
 @param {function} fn
 @return {number[]}
 */

// const filter = function(arr, fn) {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         if(fn(arr[i], i)){
//             result.push(arr[i])
//         }
//     }
//     return result
// };

/**

 Problem #2635
 You are given an integer array arr and a mapping function fn. The task is to return a new array with a transformation applied to each element.

 The returned array should be created such that returnedArray[i] = fn(arr[i], i).

 Please solve it without the built-in Array.map method.

 For example, if the input array is [1,2,3] and the mapping function is plusone(n) { return n + 1; }, the output should be [2,3,4] because each value in the array is increased by one.
 If the input array is [1,2,3] and the mapping function is plusI(n, i) { return n + i; }, the output should be [1,3,5] because each value is increased by its index.
 If the input array is [10,20,30] and the mapping function is constant() { return 42; }, the output should be [42,42,42] because the function always returns 42.

 Example 1:
 Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
 Output: [2,3,4]
 Explanation: The function increases each value in the array by one.

 Example 2:
 Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
 Output: [1,3,5]
 Explanation: The function increases each value by the index it resides in.

 Example 3:
 Input: arr = [10,20,30], fn = function constant() { return 42; }
 Output: [42,42,42]
 Explanation: The function always returns 42.

 Constraints:
 0 <= arr.length <= 1000
 -10^9 <= arr[i] <= 10^9
 fn returns a number
 @param {number[]} arr
 @param {function} fn
 @return {number[]}
 */

// const map = function(arr, fn) {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//        newArr.push(fn(arr[i],i))
//
//     }
//     return newArr
// };

// const map = (arr, fn) => Array.from(arr, fn)
//
// const str = 'hello'
// console.log(Array.from(str))

/**
 * Problem #2703
 * Return Length of Arguments Passed
 *
 * You are required to write a function `argumentsLength` that takes in a variable number of arguments
 * and returns the count of arguments passed to it.
 *
 * The function should adhere to the following rules:
 * 1. It should count the number of arguments passed.
 * 2. It should return the count as a number.
 *
 * Example 1:
 * Input: argumentsLength(5)
 * Output: 1
 * Explanation: One value was passed to the function so it should return 1.
 *
 * Example 2:
 * Input: argumentsLength({}, null, "3")
 * Output: 3
 * Explanation: Three values were passed to the function so it should return 3.
 *
 * Constraints:
 * - The function can accept a valid JSON array as arguments.
 * - 0 <= argsArr.length <= 100
 *
 * @param {...any} args - The arguments passed to the function.
 * @return {number} - The count of arguments passed.
 */
// const argumentsLength = function(...args) {
//     return args.length
// };
// console.log(argumentsLength())

/**
 * Problem #2666
 * Allow One Function Call
 *
 * You are tasked to create a function `once` that takes in another function `fn` as its argument.
 * The returned function should be identical to `fn` but with a constraint that it can be called only once.
 *
 * The function should adhere to the following rules:
 * 1. The first time the returned function is called, it should execute `fn` and return its result.
 * 2. Any subsequent calls to the returned function should not execute `fn` and should return `undefined`.
 *
 * Example 1:
 * Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
 * Output: [{"calls":1,"value":6}]
 * Explanation:
 * const onceFn = once(fn);
 * onceFn(1, 2, 3); // 6
 * onceFn(2, 3, 6); // undefined, fn was not called
 *
 * Example 2:
 * Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
 * Output: [{"calls":1,"value":140}]
 * Explanation:
 * const onceFn = once(fn);
 * onceFn(5, 7, 4); // 140
 * onceFn(2, 3, 6); // undefined, fn was not called
 * onceFn(4, 6, 8); // undefined, fn was not called
 *
 * Constraints:
 * - 1 <= calls.length <= 10
 * - 1 <= calls[i].length <= 100
 * - 2 <= JSON.stringify(calls).length <= 1000
 *
 * @param {function} fn - The original function.
 * @return {function} - The new function that can be called only once.
 */

// function add(a, b, c) {
//     return a + b + c;
// }
//
// const once = function(fn) {
//     let called = false
//     let result
//     return function(...args){
//         if(!called){
//             called = true
//             result = fn(...args)
//             return result
//         }
//     }
// };
//
// const onceAdd = once(add);
// console.log(onceAdd(1,2,3))

/**
 * Problem #2665
 * Counter II
 *
 * Create a function named `createCounter` that accepts an initial integer `init`.
 * The function should return an object with three methods:
 * 1. `increment()` - Increases the current value by 1 and then returns it.
 * 2. `decrement()` - Reduces the current value by 1 and then returns it.
 * 3. `reset()` - Sets the current value to `init` and then returns it.
 *
 * Example 1:
 * Input: init = 5, calls = ["increment","reset","decrement"]
 * Output: [6,5,4]
 * Explanation:
 * const counter = createCounter(5);
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 *
 * Example 2:
 * Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
 * Output: [1,2,1,0,0]
 * Explanation:
 * const counter = createCounter(0);
 * counter.increment(); // 1
 * counter.increment(); // 2
 * counter.decrement(); // 1
 * counter.reset(); // 0
 * counter.reset(); // 0
 *
 * Constraints:
 * -1000 <= init <= 1000
 * Total calls not to exceed 1000.
 *
 * @param {number} init - The initial value for the counter.
 * @return {object} - An object with three methods: increment, decrement, and reset.
 */

// const createCounter = (init) => {
//     const startValue = init;
//     return {
//         increment: () => ++init,
//         decrement: () => --init,
//         reset: () => init = startValue
//     };
// };
//
//
// const counter = createCounter(5)
// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.reset())
// console.log(counter.decrement())
// console.log(counter.decrement())

/**
 * Problem #2723
 * Add Two Promises
 *
 * Create a function that accepts two promises, promise1 and promise2.
 * Both promises will resolve with a number.
 * The function should return a new promise that resolves with the sum of the two numbers.
 *
 * Example 1:
 * Input:
 * promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
 * promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
 * Output: 7
 * Explanation:
 * The two input promises resolve with the values of 2 and 5 respectively.
 * The returned promise should resolve with a value of 2 + 5 = 7.
 * The time the returned promise resolves is not judged for this problem.
 *
 * Example 2:
 * Input:
 * promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
 * promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
 * Output: -2
 * Explanation:
 * The two input promises resolve with the values of 10 and -12 respectively.
 * The returned promise should resolve with a value of 10 + -12 = -2.
 *
 * Constraints:
 * promise1 and promise2 are promises that resolve with a number.
 */

// const addTwoPromises = async (promise1, promise2) => {
//    const [res1, res2] = await Promise.all([promise1, promise2])
//     return res1 + res2
// };
// console.log(addTwoPromises(1,2))

/**
 * Problem #2715
 * Timeout Cancellation
 * Difficulty: Easy
 *
 * Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds,
 * the task is to implement a function `cancellable` that returns a cancel function `cancelFn`.
 *
 * The function `fn` should be called with the arguments from `args` after a delay of `t` milliseconds.
 * However, if the `cancelFn` is invoked before the delay of `t` milliseconds elapses,
 * specifically at `cancelT` ms, then the function `fn` should never be called.
 *
 * Example 1:
 * Input:
 * fn = (x) => x * 5, args = [2], t = 20, cancelT = 50
 * Output:
 * [{"time": 20, "returned": 10}]
 * Explanation:
 * The function `fn` is called after 20ms and returns a value of 10.
 * The cancellation function is scheduled to be called after 50ms,
 * which is after the function `fn` has already been executed.
 *
 * Example 2:
 * Input:
 * fn = (x) => x**2, args = [2], t = 100, cancelT = 50
 * Output:
 * []
 * Explanation:
 * The cancellation function is scheduled to be called after 50ms,
 * which is before the function `fn` is scheduled to be called at 100ms.
 * Therefore, the function `fn` is never executed.
 *
 * Example 3:
 * Input:
 * fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelT = 100
 * Output:
 * [{"time": 30, "returned": 8}]
 * Explanation:
 * The function `fn` is called after 30ms and returns a value of 8.
 * The cancellation function is scheduled to be called after 100ms,
 * which is after the function `fn` has already been executed.
 *
 * Constraints:
 * - `fn` is a function.
 * - `args` is a valid JSON array.
 * - 1 <= args.length <= 10
 * - 20 <= t <= 1000
 * - 10 <= cancelT <= 1000
 */

// const cancellable = (fn, args, t) => {
//     const timer = setTimeout(()=>{
//         fn(...args)
//     },t)
//     const canceledFunc = () => {
//         clearTimeout(timer)
//     }
//     return canceledFunc;
// };
// const testFunction = (message) => {
//     console.log(message);
// };
//
// // Вызов функции cancellable
// const cancelFn = cancellable(testFunction, ["Hello, World!"], 5000);
// setTimeout(()=>{
//     cancelFn()
//     console.log('res')
// },20000)

/**
 * 2629. Function Composition
 */
/**
 * @param {Function[]} functions
 * @return {Function}
 */
// const compose = function(functions) {
//     return function(x) {
//         if(functions.length === 0)
//             return x
//         for (let i = functions.length - 1; i >= 0; i--) {
//             x = functions[i](x)
//         }
//         return x
//     }
// };
// const addOne = x => x + 1;
// const square = x => x * x;
// const double = x => x * 2;
//
// const composedFunction = compose([addOne, square, double]);
//
// console.log(composedFunction(2));
// console.log(composedFunction(3));

/**
 * @return {Generator<number>}
 */
// const fibGenerator = function*() {
//     let a = 0, b = 1
//     yield a
//     while (true){
//         yield b;
//         [a, b] = [b, a + b]
//     }
// };
// const res = fibGenerator()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3
//
// }
// const res = generateSequence()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())

/**
 * @param {number[]} nums
 */

// function ArrayWrapper(nums) {
//     this.nums = nums
// }
//
// ArrayWrapper.prototype.valueOf = function() {
//     let num = 0
//     const valueArr = []
//     for (let i = 0; i < this.nums.length; i++) {
//         num += this.nums[i]
//     }
//     return num
// }
//
// ArrayWrapper.prototype.toString = function() {
//     return "[" + this.nums.toString() + "]"
// }
// const wrapper = new ArrayWrapper([1, 2, 3, 4]);
// console.log(wrapper.valueOf()); // 10
// console.log(wrapper.toString()); // 10

// function f(a) {
//     let num = 0
//     for (let i = 0; i < a.length; i++) {
//         num += a[i]
//     }
//     return num
// }
//
// console.log(f([1,2,3,4,5]))

/**
 * @return {Function}
 */

// const createHelloWorld = function() {
//     return function(...args) {
//         return 'Hello World'
//     }
// };
// console.log(createHelloWorld([1,2,3,5]))

// const containsDuplicate = (nums) => {
//     const arrMap = new Set()
//     for (let i = 0; i < nums.length; i++) {
//         if(arrMap.has(nums[i])) {
//             return true
//         }else {
//             arrMap.add(nums[i])
//         }
//     }
//     return false
// };
// console.log(containsDuplicate([1,2,3]))

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// const isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('')
// };
// console.log(isAnagram('слово', 'волос'))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const  twoSum = function(nums, target) {
//     const table = {}
//     for (let i = 0; i < nums.length; i++) {
//         console.log(i)
//         let different = target - nums[i]
//         if(different in table){
//             return [table[different], i]
//         }
//         table[nums[i]] = i
//     }
// }
// console.log(twoSum([1,2,3,4,5], 8))

// const theBiggestSumAtArray = (sum) => {
//     let  theBiggestSum = 0
//     for (let i = 0; i < sum.length; i++) {
//         console.log(sum[i])
//         if(sum[i] > theBiggestSum){
//             theBiggestSum = sum[i]
//         }
//     }
//     return theBiggestSum
// }
// console.log(theBiggestSumAtArray([1,2,3,4,5,6,16]))

// const sumAtArr = (arr) => {
//     let sum = 0
//     for (const arrElement of arr) {
//         sum += arrElement
//     }
//     return sum
// }
// console.log(sumAtArr([4,10]))

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const isPalindrome = function(s) {
//     if(s === null) return false
//     let letterA = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '')
//     console.log(letterA)
//     let letterS = letterA.split('').reverse().join('')
//     console.log(letterS)
//     return letterA === letterS
// };
// console.log(isPalindrome('A man, a plan, a canal: Panama'))
//
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const getConcatenation = (nums) => {
//     const arr = []
//     for (let i = 0; i < nums.length; i++) {
//         arr.push(nums[i])
//     }
//     arr.push(...arr)
//     return arr
// };

// const getConcatenation = (nums) => nums.concat(nums)
//
// console.log(getConcatenation([1,2,3,4,5]))

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLastWord = function(s) {
//     let str = s.trim().split(' ')
//     let newStr = str[str.length - 1].length
//     return newStr
// };
// console.log(lengthOfLastWord('hello man hehehe'))

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// const filter = function(arr, fn) {
//     const arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//         if(fn(arr[i], i)){
//             arr1.push(arr[i])
//         }
//     }
//     return arr1
// };

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array[]}
//  */
// const chunk = function(arr, size) {
//     const result = []
//
//     for (let i = 0; i < arr.length; i += size) {
//         let forArr = []
//         for (let j = i; j < i + size && j < arr.length; j++) {
//             forArr.push(arr[j])
//         }
//         result.push(forArr)
//     }
//     return result
// };
//
// console.log(chunk([1,2,3,4,5], 3))

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// const search = function(nums, target) {
//     let right = 0
//     let left = nums.length - 1
//     let mid
//
//     while (right <= left){
//         mid = Math.floor((right + left) / 2)
//         if(nums[mid] === target){
//             console.log(nums[mid])
//             return mid
//         }else if (nums[mid] < target){
//             right = mid + 1
//         }else {
//             left = mid - 1
//         }
//     }
//     return -1
// };
// console.log(search([1,2,3,4,5, 6,8,10,15], 1))

// /**
//  * @param {string} text
//  * @return {number}
//  */
// const maxNumberOfBalloons = function(text) {
//     const balloon1 = new Map()
//     const balloon2 = new Map()
//     const world = 'balloon'
//     let totalCountOrWords = Infinity
//     for (const worldElement of world) {
//         if(balloon1.has(worldElement)){
//             balloon1.set(worldElement, balloon1.get(worldElement) + 1)
//         }else {
//             balloon1.set(worldElement, 1)
//         }
//     }
//
//     for (const worldElement of text) {
//         if(balloon2.has(worldElement)){
//             balloon2.set(worldElement, balloon2.get(worldElement) + 1)
//         }else {
//             balloon2.set(worldElement, 1)
//         }
//     }
//
//     for (const [key, value] of balloon1) {
//         console.log(key)
//         console.log(value)
//         if(balloon2.has(key)){
//             const countInBalloon2 = balloon2.get(key)
//             totalCountOrWords = Math.min(totalCountOrWords, Math.floor(countInBalloon2 / value))
//         }else {
//             return 0
//         }
//     }
//     console.log(totalCountOrWords)
//     return totalCountOrWords
// };
// console.log(maxNumberOfBalloons('loonbalxballpoon'))

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const singleNumber = (nums) => {
//     let result = 0
//     for (let i = 0; i < nums.length; i++) {
//         result = result ^ nums[i]
//     }
//     console.log(result)
//     return result
// };
//
// console.log(singleNumber([1,1,2,3,3]))

// const singleNumber = (nums) => nums.reduce((res, num) => res ^ num, 0)
//
// console.log(singleNumber([1,1,2,3,3]))

// /**
//  * @param {number} n - a positive integer
//  * @return {number}
//  */
// const hammingWeight = (n) => n.toString(2).split('1').length - 1
//
// console.log(hammingWeight(00000000000000000000000000000001100011))

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const countBits = (n)=> {
//     let res = []
//
//     for (let i = 0; i <= n; i++) {
//         res.push(i.toString(2).split('').filter(b => b === '1').length)
//     }
//     return res
// }
// console.log(countBits(5))

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// const wordPattern = function(pattern, s) {
//     let sWords = s.split(' ')
//     if(pattern.length !== sWords.length) {
//         return false
//     }
//     let symbols1 = new Map()
//     let symbols2 = new Map()
//     for (let i = 0; i < pattern.length; i++) {
//         let char = pattern[i]
//         console.log(char)
//         let word = sWords[i]
//         console.log(word)
//         if(symbols1.has(char) && symbols1.get(char) !== word){
//             return false
//         }
//         if(symbols2.has(word) && symbols2.get(word) !== char){
//             return false
//         }
//         symbols1.set(char, word)
//         symbols2.set(word, char)
//     }
//     return true
// };
//
// console.log(wordPattern('abba', 'dog cat cat dog'))

// const dublFUnc = (arr) => {
//     let res = [...new Set(arr)]
//     return res
// }
// console.log(dublFUnc([1,1,2,3,4,5]))

// const dublFUnc = (arr) => arr.filter((el, index) => arr.indexOf(el) === index)
// console.log(dublFUnc([1,1,2,3,4,5]))

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// const strStr = (haystack, needle) => haystack.indexOf(needle)
// console.log(strStr('sadbutsad', 'sad'))

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const climbStairs = (n) => {
//     if(n <= 2) return n
//
//     let oneBefore = 2
//     let oneAfter = 1
//     let current = 0
//
//     for (let i = 3; i <= n; i++) {
//         current = oneBefore + oneAfter
//         oneAfter = oneBefore
//         oneBefore = current
//     }
//     return current
// }
// console.log(climbStairs(5))

// /**
//  * @param {string[]} operations
//  * @return {number}
//  */
// const calPoints = (operations) => {
//     // Используем массив в качестве стека для хранения счетов
//     let scores = [];
//
//     // Обходим каждую операцию
//     for (const operation of operations) {
//         if (operation === 'C') {
//             // Удаляем последний счет
//             scores.pop();
//         } else if (operation === 'D') {
//             // Добавляем удвоенный последний счет
//             scores.push(2 * scores[scores.length - 1]);
//         } else if (operation === "+") {
//             // Добавляем сумму двух последних счетов
//             scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
//         } else {
//             // Добавляем новый счет
//             scores.push(parseInt(operation));
//         }
//     }
//
//     // Возвращаем общий счет
//     return scores.reduce((total, score) => total + score, 0);
// };
//
//
// console.log(calPoints(['1', 'C']))

/**
 * @param {number[]} arr
 * @return {number[]}
 */

// Задача:
//     У вас есть массив чисел. Вам нужно заменить каждый элемент этого массива на самый большой элемент, который находится справа от текущего элемента. Если справа от элемента нет других элементов, замените его на -1.
//
// Примеры:
//
//     Входной массив: [17,18,5,4,6,1]
// Вывод: [18,6,6,6,1,-1]
// Пояснение:
//
//     Для элемента с индексом 0 (17) самый большой элемент справа - это 18.
// Для элемента с индексом 1 (18) самый большой элемент справа - это 6.
// Для элемента с индексом 2 (5) самый большой элемент справа - это 6.
// Для элемента с индексом 3 (4) самый большой элемент справа - это 6.
// Для элемента с индексом 4 (6) самый большой элемент справа - это 1.
// Для элемента с индексом 5 (1) справа нет элементов, поэтому заменяем на -1.
// Входной массив: [400]
// Вывод: [-1]
// Пояснение: У этого элемента нет элементов справа, поэтому заменяем его на -1.
//
// Ограничения:
//
//     Длина массива от 1 до 10^4.
// Значение каждого элемента массива от 1 до 10^5.
// Как решить:
//
//     Начните с предпоследнего элемента массива и двигайтесь к первому элементу.
//     Для каждого элемента найдите максимальное значение среди элементов справа и замените текущий элемент на найденное максимальное значение.
//     Замените последний элемент массива на -1.

// const replaceElements = function(arr) {
//     let res = []
//
//     for (let i = 0; i < arr.length - 1; i++) {
//         // console.log(arr.length- 1)
//         // console.log(i + 1)
//         // console.log(Math.max(...arr.slice(i + 1)))
//
//         // Находим максимальное значение среди элементов справа от текущего элемента
//         let maxVal = Math.max(...arr.slice(i + 1));
//         console.log(maxVal)
//         res.push(maxVal)
//     }
//
//     // console.log(res.push(-1))
//     // Добавляем -1 для последнего элемента
//     res.push(-1)
//
//     // console.log(res)
//     return res
// };
// console.log(replaceElements([1,2,3,4,5,6,7,8]))

// let str = 'aabbbcccccdd'
//
// const foo = (str) => {
//     let obj = {}
//
//     for (const char of str) {
//         if(!obj[char]){
//             obj[char] = 1
//         }else {
//             obj[char]++
//         }
//     }
//     return obj
// }
// console.log(foo(str))

// let arr = [1,2,3,2,3,4]
//
// let foo = (n) => {
//     let newArr = [...new Set(n)]
//     return newArr
// }
// console.log(foo(arr))
// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// let reverseString = function(s) {
//     let start = 0
//     let end = s.length - 1
//
//     while (start < end) {
//         let temp = s[start]
//         console.log(temp)
//         s[start] = s[end]
//         console.log(s[start])
//         s[end] = temp
//         console.log(s[end])
//
//         start++
//         end--
//     }
//     console.log(s)
//     return s
// }
// // console.log(reverseString('privet'.split('')));
//
// let reverseString2 = (n) => n.split('').reverse().join('')
// console.log(reverseString2('helo'))

// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// const removeElement = function(nums, val) {
//     // let arr = nums.filter((el) => el !== val)
//     // return arr
//     // start value of array
//     let index = 0
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i])
//         console.log(val)
//         if(nums[i] !== val){
//             console.log(nums[index])
//             console.log(nums[i])
//             nums[index] = nums[i]
//             index++
//         }
//     }
//     console.log(index)
//     return index
// };
// console.log(removeElement([1,2,2,3,4], 2))

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// const maxProfit = function(prices) {
//     let minPrice = Infinity
//     let maxProfit = 0
//
//     for (let i = 0; i < prices.length; i++) {
//         console.log(prices[i])
//         if(prices[i] < minPrice){
//             minPrice = prices[i]
//         }else {
//             let potentialProfit = prices[i] - minPrice;
//             console.log(potentialProfit)
//             console.log(prices[i] - minPrice)
//             if (potentialProfit > maxProfit) {
//                 maxProfit = potentialProfit;
//             }
//         }
//     }
//     console.log(maxProfit)
//     return maxProfit;
// };
// console.log(maxProfit([1,6,4,3,1]))

// dubl in array

// const arrayDublicates = (args) => {
//     let arr = new Map()
//     let dublicated = []
//
//     for (let i = 0; i < args.length; i++) {
//         console.log(arr)
//         if(arr.has(args[i]) && !dublicated.includes(args[i])){
//             dublicated.push(args[i])
//         }
//         arr.set(args[i], true)
//     }
//     console.log(dublicated)
//     return dublicated
// }
//
// console.log(arrayDublicates([1,1, 2,3,4,5,5]))

// const sumSumbolsOfStr = (str) => {
//     let obj = {}
//
//     for (const objElement of str) {
//         if(!obj[objElement]){
//             obj[objElement] = 1
//         }else {
//             obj[objElement]++
//         }
//     }
//     return  obj
// }
// console.log(sumSumbolsOfStr('ahahaha'))

// let dubl = (arr) => [...new Set(arr)]
// console.log(dubl([1,2,3,4,5,5,5]))

// let foo = (arr) => {
//     let set = new Set()
//     let dubls = []
//
//     for (let i = 0; i < arr.length; i++) {
//         if(set.has(arr[i]) && !dubls.includes(arr[i])){
//             dubls.push(arr[i])
//         }
//         set.add(arr[i])
//     }
//     return dubls
// }
// console.log(foo([1,2,3,3,5,5]))
//
// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// let mergeAlternately = function(word1, word2) {
//     let result = []
//
//     for (let i = 0, j = 0; i < word1.length || j < word2.length; i++, j++) {
//         if(i < word1.length){
//             result.push(word1[i])
//         }
//         if(j < word2.length){
//             result.push(word2[j])
//         }
//     }
//     console.log(result)
//     return result.join('')
// };
//
// console.log(mergeAlternately('pri', 'vet'))

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// let isSubsequence = function(s, t) {
//     let i = 0
//     let j = 0
//
//     while (j < t.length && i < s.length){
//         console.log(s[i])
//         console.log(t[j])
//
//         if(s[i] === t[j]){
//             i++
//         }
//         j++
//     }
//     return i === s.length
// };
//
// console.log(isSubsequence('aaaabaaaac', 'abc'))

// /**
//  * @param {string[]} emails
//  * @return {number}
//  */
// let numUniqueEmails = function(emails) {
//     let uniq = new Set()
//
//     for (let uniqEmail of emails) {
//         let [local, temp] = uniqEmail.split('@')
//
//         local = local.split('+')[0]
//         console.log(local)
//         local = local.split('.').join('')
//         console.log(local)
//         uniq.add(local + '@' + temp)
//         console.log(uniq)
//     }
//     console.log(uniq)
//     return uniq.size
// };
//
// console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// let majorityElement = function(nums) {
//     let hashTable = new Map()
//
//     for (let i = 0; i < nums.length; i++) {
//         if(hashTable.has(nums[i])) {
//             hashTable.set(nums[i], hashTable.get(nums[i]) + 1)
//         }
//         else {
//             hashTable.set(nums[i], 1)
//         }
//     }
//     for (const [key, value] of hashTable) {
//         console.log(value)
//         console.log(key)
//         if(value > nums.length / 2) return key
//     }
//
// };
// console.log(majorityElement([1,2,3,4,5]))

// let foo = (nums) => {
//     return [...new Set(nums)]
// }

// let foo = (str) => {
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
//
// console.log(foo('sssttrrrr'))

// let foo = (nums) => {
//     let hash = new Map()
//     let values = []
//     for (let i = 0; i < nums.length; i++) {
//         if(hash.has(nums[i])){
//             values.push(nums[i])
//         }else {
//             hash.set(nums[i], 1)
//         }
//     }
//     return values.length > 0 ? values : null
//
// }
//
// console.log(foo([1,2,3,4,4,2,1]))

// let dublicatFunc = (arg) => [...new Set(arg)]
// let sumOfDublFunc = (args) => {
//     let map = new Map()
//     let arr = []
//
//     for (let i = 0; i < args.length; i++) {
//         if(map.has(args[i])){
//             arr.push(args[i])
//         }else {
//             map.set(args[i], 1)
//         }
//     }
//     return arr.length > 0 ? arr : null
// }
// let sumWordsOfString = (str) => {
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
//
// console.log(sumWordsOfString('sstr'))

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// let findDisappearedNumbers = function(nums) {
//     let set = new Set()
//     let result = []
//
//     for (let i = 0; i < nums.length; i++) {
//         if(!set.has(nums[i])){
//             set.add(nums[i])
//         }
//     }
//
//     for (let i = 1; i <= nums.length; i++) {
//         if(!set.has(i)){
//             console.log(i)
//             result.push(i)
//         }
//     }
//     console.log(result)
//     return result
// };
//
// console.log(findDisappearedNumbers([1,2,3,4,6,8,9]))

// let sumOfDublFunc = (args) => {
//     let map = new Map()
//     let arr = []
//
//     for (let i = 0; i < args.length; i++) {
//         if(map.has(args[i])){
//             arr.push(args[i])
//         }else {
//             map.set(args[i], 1)
//         }
//     }
//     return arr.length > 0 ? arr : null
// }
// console.log(sumOfDublFunc([1,2,3,4,5,6,6,6]))

let sumOfStr = (str) => {
    let obj = {}

    for (const word of str) {
        if(!obj[word]){
            obj[word] = 1
        }else {
            obj[word]++
        }
    }
    return obj
}
console.log(sumOfStr('ssttr'))