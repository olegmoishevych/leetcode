//Дан массив:
//
// [2, 3, 1, 7, 4, 9, 5, 8]
//
// Нужно отсортировать по возрастанию только нечетные числа:
//
// // [2, 1, 3, 5, 4, 7, 9, 8]

const foo = (arr) => {
  return arr.sort((a,b) => (a % 2) - (b % 2))
}

console.log(foo([2, 3, 1, 7, 4, 9, 5, 8]))
