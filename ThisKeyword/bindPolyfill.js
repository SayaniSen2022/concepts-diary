//polyfill for bind

let myName = {
  firstName: "Sayani",
  lastName: "Sen",
};

function printName(hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " , " + hometown + " , " + state
  );
}

let printMyName = printName.bind(myName, "Kolkata"); //binding the method with the object and returning a function.
printMyName("WB");

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1); //removes the first element from the args list and returns all the other elements

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(myName, "Kolkata");
printMyName2("WB");
