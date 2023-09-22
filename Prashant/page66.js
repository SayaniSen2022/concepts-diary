// Execute async functions in Parallel
/*
Problem Statement: Implement a function that takes a list of async functions as input and a
callback function and executes the input tasks in parallel i.e all at once
and invokes the callback after every task is finished.
*/

//Implementation using forEach

const asyncParallel = function (tasks, callback) {
  let result = []; //to store result
  let taskCompleted = 0; //track tasks completed

  tasks.forEach((asyncTask) => {
    //invoke asyncTask

    asyncTask((value) => {
      result.push(value);
      taskCompleted++;

      //if tasks are executed, invoke the callback
      if (taskCompleted >= tasks.length) {
        callback(result);
      }
    });
  });
};

function asyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

const tasks = [
  asyncTask(),
  asyncTask(),
  asyncTask(),
  asyncTask(),
  asyncTask(),
  asyncTask(),
];

asyncParallel(tasks, (result) => {
  console.log("results", result);
});
