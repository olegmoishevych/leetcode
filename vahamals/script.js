// function calculatePreorders(N) {
//   const preorders = [1];
//
//   for (let i = 1; i <= N; i++) {
//     let count = 0;
//
//     for (let j = 0; j < i; j++) {
//       count += preorders[j] * preorders[i - j - 1];
//     }
//
//     preorders.push(count);
//   }
//
//   return preorders;
// }

function calculatePreorders(N) {
  const preorders = [1];
  for (let i = 1; i <= N; i++) {
    preorders.push([...preorders].reduce((acc, val, j) => acc + val * preorders[i - j - 1], 0));
  }
  return preorders;
}

const N = 4;
const result = calculatePreorders(N);
console.log(result);
