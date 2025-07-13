const arr = [
  {
    id: "a",
    name: "Ant",
    surname: "Bon"
  },
  {
    id: "b",
    name: "Bont",
    surname: "Cion"
  },
  {
    id: "c",
    name: "Fon",
  },
  {
    id: "d"
  }
];

const obj = {
  a: {
    name: "Ant",
    surname: "Bon"
  },
  b: {
    name: "Bont",
    surname: "Cion"
  },
  c: {
    name: "Fon",
  },
  d: null
}

const func = (arr) => arr.reduce((acc, cur) => {
  const {id, ...rest} = cur
  acc[id] = Object.keys(rest).length ? rest : null

  return acc
}, {})
console.log(func(arr))

// {} отримати обж з айдішками,
