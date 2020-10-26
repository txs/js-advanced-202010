function Employee(firstName, lastName, department){
    this.firstName = firstName
    this.lastName = lastName
    this.department = department
    // this.getDepartment = function(){
    //     return this.department
    // }
}

Employee.prototype.getDepartment = function(){
    return this.department
}

var person = new Employee("Jack", "Wang", "HR")
console.log(person.getDepartment())
