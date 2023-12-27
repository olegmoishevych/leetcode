//Implement the function unique_in_order which takes as argument a
// sequence and returns a list of items without any elements with
// the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  if(!iterable || !iterable.length) return []

  let res = [iterable[0]]
  console.log(res)

  for (let i = 1; i < iterable.length; i++) {
    console.log(iterable[i - 1])
    if(iterable[i] !== iterable[i - 1]) res.push(iterable[i])

  }

  return res
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
