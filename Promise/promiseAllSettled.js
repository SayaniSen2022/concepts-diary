// implementation of Promise.allSettled() polyfill

const allSettled = (promises) => {
  const mappedPromises = promises.map((promise) =>
    Promise.resolve(promise).then(
      (val) => ({ status: "fulfilled", value: val }),
      (error) => ({ status: "rejected", reason: error })
    )
  );

  return Promise.all(mappedPromises);
};

const a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 200)
);
const b = new Promise((resolve, reject) => reject(9));
const c = new Promise((resolve) => resolve(5));

allSettled([a, b, c]).then((val) => {
  console.log(val);
});
