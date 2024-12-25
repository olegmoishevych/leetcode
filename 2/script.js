// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const solution = (str) => {
  let result = []

  for ( let i = 0; i < str.length; i+=2 ) {
    result.push(str.substring(i, i + 2))
  }

  if(result.length > 0 && result[result.length - 1].length === 1){
    result[result.length - 1] += '_'
  }

  return result
}


// console.log(solution('hello'))
