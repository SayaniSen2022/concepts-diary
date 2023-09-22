// Akshay Saini video reference

//Every function in JS has access to a this keyword, in this function it points to the name object

let myName = {
  firstName: "Sayani",
  lastName: "Sen",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state
  );
};

printFullName.call(myName, "Kolkata", "West Bengal");

let name2 = {
  firstName: "Lady",
  lastName: "Gaga",
};

//call method introduces the concept of function borrowing, we can borrow functions from other objects and use it with the data of the current object

printFullName.call(name2, "Dallas", "Texas"); //inside call the first argument is the reference, that is where we want the 'this' to point to

//apply method: the only difference between call and apply is the way we pass the arguments. In apply the first argument is as usual the reference to the this keyword but the rest of the arguments are passed in the form of a list

printFullName.apply(name2, ["Dallas", "Texas"]);

//Bind method looks similar to call, but it binds the method to the object, creates a copy and returns a function which can be invoked later, unlike in call where we directly call the method.

let printMyName = printFullName.bind(myName, "Kolkata", "West Bengal");
console.log(printMyName);

printMyName();
