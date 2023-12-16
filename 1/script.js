// aba = true
// abc = false

// const foo = (str) => {
//   return str.split('').join() === str.split('').reverse().join()
// }
//
// console.log(foo('aba'))
//
// let arr = ['1,2,3,4,5']
// let copy = [...arr]
// console.log(...copy)

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
//
// let arr3 = [...arr1, ...arr2]
//
// console.log(arr3)

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321

let descendingOrder = (n) => +n.toString().split('').sort((a,b)=> b - a).join('')


console.log(descendingOrder(42145))
