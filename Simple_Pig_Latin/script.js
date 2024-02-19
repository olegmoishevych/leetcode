//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (str) => str.replace(/(\w)(\w*)/g, '$2$1ay')

console.log(pigIt('Hello world !'))
