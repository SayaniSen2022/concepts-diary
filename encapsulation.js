class Employee {
  setEmployeeDetails(name, id, phoneNo) {
    this.name = name;
    this.id = id;
    this.phoneNo = phoneNo;
  }

  getEmpName() {
    return this.name;
  }
  getEmpId() {
    return this.id;
  }
  getEmpPhoneNo() {
    return this.phoneNo;
  }
}

//instantiate the class, object creation
let emp1 = new Employee();

emp1.setEmployeeDetails("Maxx", 9999, 452653);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneNo());
