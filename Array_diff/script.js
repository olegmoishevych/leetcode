//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a which are present in list b keeping their order.
function arrayDiff(a, b) {
  let setB = new Set(b)

  return a.filter((el) => !setB.has(el))
}
console.log(arrayDiff([1,2,2], [1]))

//assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
//assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
