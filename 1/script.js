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

// let descendingOrder = (n) => +n.toString().split('').sort((a,b)=> b - a).join('')
//
//
// console.log(descendingOrder(42145))
//
// let number = 10
// const counter = () => number += 1
//
//
// console.log(counter(number)); // 11
// console.log(counter(number)); // 12
// console.log(counter(number)); // 13
// console.log(counter(number)); // 14
// console.log(counter(number)); // 15
// console.log(counter(number)); // 16

var func = (str) => {
  var obj = {}

  for (const key of str) {

    if(!obj[key]){
      obj[key] = 1

    } else {
      obj[key]++
    }

  }

  return obj

}
func('str') //?
// console.log(func('sstr'))


