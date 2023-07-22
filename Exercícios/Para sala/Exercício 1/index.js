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

funcionario = new Employee("01", "Clarissa", 4000);
funcionario.raiseSalary(10);

console.log(funcionario);
