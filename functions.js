const name = function () {
  console.log("sayani");
};
name();
//anonymous function or not, would always be invoked by variable

//pass function as an argument

function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, lang) {
  console.log(helloMessage() + lang);
}

//pass sayHello as argument, sayHello is a callback function
greeting(sayHello, "JS!");

//return a function

function sayHello1() {
  return function () {
    console.log("Hello!");
  };
}

//usinga variable to return
const sayHello = function () {
  return function () {
    console.log("Hello!");
  };
};
const myFunc = sayHello();
myFunc();

//using double-parentheses
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}
sayHello()();
