//{ a: { b: { c: [1] }}, d: 2}

const obj = { a: { b: { c: [1] }}, d: 2}

// const objCopy1 = Object.assign(obj)
// console.log(objCopy1)
// const objCopy2 = {...obj}
// console.log(objCopy2)
// const objCopy3 = JSON.parse(JSON.stringify(obj))
// console.log(objCopy3)

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const deepCopy = deepClone(obj);
console.log(deepCopy)

