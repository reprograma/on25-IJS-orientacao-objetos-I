class Employee {
  id;
  name;
  salary;

  constructor(id, name, salary) {
    this.id = id
    this.name = name
    this.salary = salary
  }

  raiseSalary(percent) {
    const difference = (this.salary * percent) / 100
    this.salary = this.salary + difference
    console.log(`new salary: ${this.salary}`)
  }
}

const employee = new Employee(1, "Letícia", 200)
employee.raiseSalary(20)