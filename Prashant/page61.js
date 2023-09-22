// Execute async function in Series

/*
Problem Statement: Implement a function that takes a list of async functions as input and
executes them in a series that is one at a time. The next task is
executed only when the previous task is completed.
*/

//Implementation using For...of loop

const asyncSeriesExecuter = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
};

// Implementation using recursion

// function asyncSeriesExecuter(promises) {
//   let promise = promises.shift(); //get the top task

//execute the task
//   promise.then((data) => {
//     console.log(data);

//recursively call the same function

//     if (promises.length > 0) {
//       asyncSeriesExecuter(promises);
//     }
//   });
// }

//Implementation using array.reduce()

// const asyncSeriesExecuter = function (promises) {
//   promises.reduce((acc, curr) => {
//     return acc.then(() => {
//       return curr.then((val) => console.log(val));
//     });
//   }, Promise.resolve());
// };

const asyncTask = function (k) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${k}`), 1000 * k);
  });
};

const promises = [asyncTask(2), asyncTask(3), asyncTask(5), asyncTask(9)];
asyncSeriesExecuter(promises);
