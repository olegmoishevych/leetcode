// aba = true
// abc = false

const foo = (str) => {
  return str.split('').join() === str.split('').reverse().join()
}

console.log(foo('aba'))
