// implementation of Promise.finally() polyfill

function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Mail will arrive");
    } else {
      reject(new Error("Mail did not arrive"));
    }
  });
}

checkMail()
  .then((val) => console.log(val))
  .catch((error) => console.error(error))
  .finally(() => console.log("Experiment completed"));
