//[4, 1, 2, 1, 2]

const findUniqNum = (num) => {

  for (const n of num) {
    console.log(num.lastIndexOf(n))
    console.log(num.indexOf(n))
    if(num.indexOf(n) === num.lastIndexOf(n)) return n

  }

  return 0
}

console.log(findUniqNum([4,1,2,1,2]))
