function findUniq(arr) {
  for (const arrElement of arr) {

    if(arr.indexOf(arrElement) === arr.lastIndexOf(arrElement)){
      return arrElement
    }
  }

  return 0
}

console.log(findUniq([1,1,1,1,1,1,2]))


//     assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
//     assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
//     assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
//     assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
//     assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
