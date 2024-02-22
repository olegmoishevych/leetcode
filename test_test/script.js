const doSomething = (value) => console.log(value);

const debounce = (fn, delay) => {
  let timId

  return function (...args) {
      clearTimeout(timId)

      timId = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
  }
};

const debounced = debounce(doSomething, 1000);

debounced(1);
debounced(2);
debounced(3);
debounced(4);
debounced(5);
