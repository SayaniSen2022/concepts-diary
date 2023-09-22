// implementation of promise.race() polyfill

const race = function (promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject).catch(reject);
    });
  });
};

const test1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

race([test1, test2, test3])
  .then((val) => console.log(val))
  .catch((error) => console.error(error));
