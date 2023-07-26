class Employee {
  #id;
  #firstName;
  #lastName;
  #salary;

  constructor(id, firstName, lastName, salary) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#salary = salary;
  }

  get id() {
    return this.#id;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get name() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  get salary() {
    return this.#salary;
  }
  set salary(newSalary) {
    this.#salary = newSalary;
  }

  get annualSalary (){
    return this.#salary * 12;
  }

  raiseSalary(percent) {
    this.#salary += this.#salary * (percent / 100);
  }

  returnEmployee(){
    const employee = `id: ${this.#id}, name: ${this.name}, salary: ${this.#salary}`;
    return employee;
}
}

const employeeKeta = new Employee (5, "Keta", "Preta", 50)
console.log(employeeKeta)

console.log(employeeKeta.id)
console.log(employeeKeta.firstName)
console.log(employeeKeta.lastName)
console.log(employeeKeta.name)
console.log(employeeKeta.salary)
console.log(employeeKeta.annualSalary)

