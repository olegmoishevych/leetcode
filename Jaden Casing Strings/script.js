//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

var toJadenCase = function (str) {
  let res = str.split(' ')
  console.log(res)

  let finalArr = res.map((el) => {
    console.log(el.charAt(0))
    return el.charAt(0).toUpperCase() + el.slice(1)
  })

  return finalArr.join(' ')
};
console.log(toJadenCase('How can mirrors be real if our eyes arent real'))
