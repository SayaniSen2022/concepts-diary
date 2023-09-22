//create a class
class Employee {
  //create a constructor
  setDetails(name, id) {
    this.name = name;
    this.id = id;
  }
}

//create an object
let emp1 = new Employee();
emp1.setDetails("Rik", 5555);
console.log(emp1.name);
console.log(emp1.id);

class Employer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

let emp2 = new Employer("sam", 5656);
console.log(emp2.name);
console.log(emp2.id);
