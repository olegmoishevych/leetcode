// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  let set = new Set()
  let countOfDuplicates = 0
  let duplicateArr = []

  for (const char of text) {

    if(set.has(char)){
      countOfDuplicates++
      duplicateArr.push(char)
    }

    set.add(char)
  }

  return {duplicateArr, countOfDuplicates}
}

console.log(duplicateCount('ABBA'))
