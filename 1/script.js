// aba = true
// abc = false

const foo = (str) => {
  return str.split('').join() === str.split('').reverse().join()
}

console.log(foo('aba'))

let arr = ['1,2,3,4,5']
let copy = [...arr]
console.log(...copy)
