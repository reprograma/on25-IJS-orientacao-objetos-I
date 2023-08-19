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
    this.salary += this.salary * (percent / 100);
  }
}

const Employee1 = new Employee(123, "Luara", 15000);
console.log(Employee1);
Employee1.raiseSalary(10);
console.log(Employee1.salary);
