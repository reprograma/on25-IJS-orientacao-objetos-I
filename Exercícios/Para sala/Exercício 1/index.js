class Employee {
    id;
    name;
    salary;
  
    constructor(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
    }
  
    raiseSalary(percent) {
        this.salary += (this.salary * (percent/100)); //reduzido
        //this.salary = this.salary + (this.salary * (percent/100)); extenso
    }
  }
const employee = new Employee(1,'Henriqueta', 10)
console.log (employee)
employee.raiseSalary(10)
console.log (employee.salary)

