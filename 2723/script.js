//Example 1:
//
// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
// Example 2:
//
// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
// const addTwoPromises = (promise1, promise2) => Promise.all([promise1, promise2]).then(([promise1, promise2]) => promise1 + promise2)
const addTwoPromises = async function (p1,p2){
  const n1 = await p1
  const n2 = await p2

  return n1 + n2
}

console.log(addTwoPromises(
  new Promise(resolve => setTimeout(() => resolve(2), 20)),
  new Promise(resolve => setTimeout(() => resolve(5), 60))))

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
