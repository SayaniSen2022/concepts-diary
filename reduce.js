const arr = [2, 3, 6, 8];

//map

// const output = arr.map((x) => x.toString(2));

// // function double(x) {
// //   return x * 2;
// // }
// console.log(output);

//filter even values

// const output = arr.filter((x) => x % 2 === 0);
// console.log(output);

//reduce to find sum or largest number in an array

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0); //acc is accumulating and curr is the current value in array & 0 is the initial value to be passed inside acc

// const output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);

// console.log(output);

const users = [
  { firstName: "Sayani", lastName: "Sen", age: 26 },
  { firstName: "John", lastName: "Doe", age: 56 },
  { firstName: "Sam", lastName: "Mendes", age: 60 },
  { firstName: "Deepika", lastName: "Padukone", age: 26 },
];

// const output = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

//filter out first name of all people whose age is less than 30

// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

const output = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);
