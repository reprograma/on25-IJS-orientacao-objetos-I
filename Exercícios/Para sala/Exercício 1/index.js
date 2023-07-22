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
    this.salary += ( this.salary * ( percent/100));
  }
}

const laissa = new Employee(1, "Laíssa", 1500);

console.log(laissa);

laissa.raiseSalary(10);

console.log(laissa);
