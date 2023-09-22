// when a promise is rejected

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error 404");
  }, 5000);
});

console.log(promise);

promise
  .then(null, (error) => {
    return error;
  })
  .then((val) => {
    console.log("I am chained from then", val);
  })
  .finally(() => {
    console.log("Then block done");
  });

promise
  .catch((err) => {
    return err;
  })
  .then((val) => {
    console.log("I am chained from catch", val);
  })
  .finally(() => {
    console.log("Catch block done");
  });

/*

  Order of execution:
    - Promise { <pending> }
    - Error handled in then block
    - Error handled in catch block
    - Then block finally called
    - Catch block finally called

*/
