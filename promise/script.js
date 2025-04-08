//Параллель
// Есть парочка функций, которые необходимо запустить параллельно:
//
// const fnA = (cb) => {
//   setTimeout(() => {
//     cb('a');
//   }, 300);
// }
//
// const fnB = (cb) => {
//   setTimeout(() => {
//     cb('b');
//   }, 200);
// }
//
// а результат вернуть только тогда, когда обе они будут завершены.

const fnA = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('a');
    }, 300);
  })
}

const fnB = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res('b');
    }, 200);
  })
}

const fnC = async (f1, f2) => {
  const func1 = await f1()
  const func2 = await f2()

  return [func1, func2]
}

fnC(fnA, fnB).then((res)=> {
  console.log(res)
})
