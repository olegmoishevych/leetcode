const removeDuplicates = (s) => {
  
  let stack = []

  for (const char of s) {
    if(stack.length === 0 || stack[stack.length - 1] !== char){
      stack.push(char)
    } else {
      stack.pop()
    }
  }
  

  return stack.join('')
  
}

console.log(removeDuplicates('azxxzy'))
