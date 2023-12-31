//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let obj = {}

  for (const objElement of string) {

    if(!obj[objElement]){
      obj[objElement] = 1
    }else {
      obj[objElement]++
    }

  }

  return obj
}

console.log(count('ABC'))
//   test('a', {'a': 1});
//   test('ab', {'a': 1, 'b': 1});
//   test('aba', {'a': 2, 'b': 1});
//   test('ABC', {'A': 1, 'B': 1, 'C': 1});
