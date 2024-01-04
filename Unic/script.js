//[4, 1, 2, 1, 2]

const findUniqNum = (num) => {
  for (const n of num) {

    if(num.indexOf(n) === num.lastIndexOf(n)){
      return parseInt(n, 10)
    }

  }
}

console.log(findUniqNum([4,1,2,1,2]))
