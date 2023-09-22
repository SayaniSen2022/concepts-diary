var n = 2;
//num is the parameter
function square(num) {
  var ans = num * num;
  return ans;
}
//n is the argument
var square2 = square(n);
var square4 = square(4);

//closure: a function bundled together with its lexical environment

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
z();

//filtered-items method for array

const items = [
  { name: "a", price: 100 },
  { name: "b", price: 56 },
  { name: "c", price: 100 },
];

const filteredItems = items.filter((item) => {
  return item.price >= 100;
});
console.log(filteredItems);

const func = () => console.log(letVar);
let letVar = 3;
func();
