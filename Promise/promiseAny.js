// implementation of Promise.any() polyfill

const any = function (promisesArray) {
  const promiseErrors = new Array(promisesArray.length);
  let counter = 0; //to keep count of how many promises are getting rejected

  //return a new promise
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          promiseErrors[counter] = error;
          counter += 1;

          if (counter === promisesArray.length) {
            reject(promiseErrors);
          }
        });
    });
  });
};

const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(reject, 600, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

any([test1, test2, test3])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));

/*
  Order of Execution when all the promises get rejected:
    - [ "three", "two", "one" ]
    - based on the timer set, the promiseError array is filled with the rejection messages
*/
