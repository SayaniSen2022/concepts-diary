//examples of async await

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved p1");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved p2");
  }, 5000);
});

async function getData() {
  console.log("Hello World");
  const val1 = await p1;
  console.log("Namaste");
  console.log(val1);

  const val2 = await p2;
  console.log("love this");
  console.log(val2);
}

getData();

//error handling done using try and catch blocks

/** Different promises resolve on diff intervals order of excecution
 * Hello World
 * Namaste (prints once the p1 is resolved)
 * I am resolved p1 (after 10s)
 * love this (prints once p2 is resolved)
 * I am resolved p2 (after another 10s since they were different promises with diff time intervals)
 */

/* Different promises resolving on same interval order of execution:
  - Hello World
  - Namaste
  - I am resolved p1 (both p1 and p2 resolve at the same moment)
  - love this
  - I am resolved p2
*/

/* if we reverse the order, say p2 resolves before p1, order of execution:
 - Hello World
 - (will wait for p1 to resolve and then only print all)
 - Namaste
 - I am resolved p1
 - love this
 - I am resolved p2
*/

async function handlePromise() {
  try {
    const data = fetch("some random url");
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
