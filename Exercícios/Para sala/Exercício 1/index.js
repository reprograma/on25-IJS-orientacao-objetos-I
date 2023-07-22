class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
  raiseSalary(percent) {
    this.salary += this.salary * (+percent / 100);
  }
}

const cleber = new Employee(1, "Cleber", 1000);

console.log(`antigo salario ${cleber.salary}`);
cleber.raiseSalary(18);
console.log(`novo salario ${cleber.salary}`);
