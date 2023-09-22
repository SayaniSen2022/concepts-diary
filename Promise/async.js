// implementation of async..await

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved!!");
  }, 10000);
});

/* async function getData() {
  return "Namaste";
}

const dataPromise = getData();
console.log(dataPromise); //returns Promise object { status: fulfilled; value: Namaste}*/

/*if return a promise from an async function: it returns as it is

async function getData() {
  return promise;
}

const dataPromise = getData();

dataPromise.then((val) => console.log(val)); //Output: "I am resolved!!"*/

//handling a promise using async await
async function handlePromise() {
  const value = await promise;
  console.log(value);
}
handlePromise();
