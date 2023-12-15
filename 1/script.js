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

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = [...arr1, ...arr2]

console.log(arr3)
