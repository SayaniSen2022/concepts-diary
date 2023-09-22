// as per ES6 async...await syntax

const promise = Promise.resolve("I am resolved");

const example = async (promise) => {
  try {
    const response = await promise;
    return response;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Task done");
  }
};

example(promise).then((val) => console.log(val));

/*
 - Order of execution
  - Both try and finally block will be executed
  - Finally block logged before the async try block which returns the resolved value of the promise
*/
