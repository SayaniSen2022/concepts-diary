// write a promise that resolves after 5s

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello world!");
  }, 5000);
});

console.log(promise);
//initially the state of the promise will be pending, then after 5s the state of promise will be updated.

// setTimeout(() => {
//   console.log(promise);
// }, 6000); //Output: Promise { 'Hello World!' }

promise
  .then((val) => {
    console.log(val); // prints Hello World! immediately after the promise is resolved after 5s
  })
  .finally(() => {
    console.log("task done");
  });
