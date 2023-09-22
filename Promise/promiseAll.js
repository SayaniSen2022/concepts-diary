// Promise.all() polyfill: Implementation

const myPromiseAll = function (taskList) {
  const results = [];

  let promisesCompleted = 0;

  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      //if promise passes
      promise
        .then((val) => {
          results[index] = val;
          promisesCompleted += 1;

          //if all the promises are completed, resolve and return the result.

          if (promisesCompleted === taskList.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
};

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
}

const taskList = [task(6000), task(3000), task(5000)];

//run promise.all

myPromiseAll(taskList)
  .then((results) => console.log("got results", results))
  .catch(console.error);
