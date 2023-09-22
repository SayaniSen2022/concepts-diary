// var x = 7;

// function getName() {
//   console.log("Namaste JS");
// }

// getName();
// console.log(x);

// var arr = [1, 2, 3, 1];

// var arr = arr.sort((x, y) => x - y);
// console.log(arr);

// var containsDuplicate = function (nums) {
//   for (let i = 0; i <= nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       console.log("yes");
//       return true;
//     }
//   }
//   return false;
// };
// var hasDuplicate = containsDuplicate(arr);
// console.log(hasDuplicate);

const promise = new Promise((resolve, reject) => {
  reject(Error("Some Error Occurred"));
})
  .catch((error) => console.log(error))
  .then((error) => console.log(error));
