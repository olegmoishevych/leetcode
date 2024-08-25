// s: 1, t: 1, r: 2
const sumCharOrStr = (str) => {
  const obj = {}

  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1
  }

 return obj
}

