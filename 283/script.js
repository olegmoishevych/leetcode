//Пример 1:
//
// Ввод: числа = [0,1,0,3,12]
//  Вывод: [1,3,12,0,0]
// Пример 2:
//
// Ввод: числа = [0]
//  Вывод: [0]


const moveZeroes = (nums) => {
  return nums.sort((a, b) => (a === 0) - (b === 0))
}

console.log(moveZeroes([0,1,0,3,2,12]))
