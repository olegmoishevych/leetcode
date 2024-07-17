//map
const numbers = [1, 2, 3, 4];

const doubled = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);

console.log(doubled); // [2, 4, 6, 8]

//filter
const numbers = [1, 2, 3, 4];

const even = numbers.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(even); // [2, 4]
//some

const numbers = [1, 2, 3, 4];

const hasEven = numbers.reduce((acc, num) => acc || num % 2 === 0, false);

console.log(hasEven); // true

//every
const numbers = [1, 2, 3, 4];
const allEven = numbers.reduce((acc, num) => acc && num % 2 === 0, true);
console.log(allEven); // false

//find
const numbers = [1, 2, 3, 4];
const firstEven = numbers.reduce((acc, num) => {
  if (acc !== undefined) return acc;
  return num % 2 === 0 ? num : acc;
}, undefined);
console.log(firstEven); // 2

//forE
const numbers = [1, 2, 3, 4];
numbers.reduce((_, num) => {
  console.log(num * 2);
  return null;
}, null); // 2 4 6 8

//sort
const numbers = [4, 2, 3, 1];

const sorted = numbers.reduce((acc, num) => {
  let i = 0;
  while (i < acc.length && num > acc[i]) {
    i++;
  }
  acc.splice(i, 0, num);
  return acc;
}, []);

console.log(sorted); // [1, 2, 3, 4]


