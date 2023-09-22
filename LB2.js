//Sampler function: on every ith count it will execute the input function

const sampler = (callback, counter = 1) => {
  let tracker = 0;

  return function (...args) {
    tracker++;
    if (tracker === counter) {
      callback(...args);
      tracker = 0;
    }
  };
};

function message(msg) {
  console.log(msg);
}

const sample = sampler(message, 2);

sample();
sample("pqr");
sample();
sample("p");
sample();
sample("o");
