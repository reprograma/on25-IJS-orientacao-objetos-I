class Employee {
  #id;
  #firstName;
  #lastName;
  #salary;

  constructor(id, firstName, lastName, salary) {
    this.#id = id
    this.#firstName = firstName
    this.#lastName = lastName
    this.#salary = salary
  }

  get id() {
    return this.#id
  }

  get firstName() {
    return this.#firstName
  }

  get lastName() {
    return this.#lastName
  }

  get name() {
    return this.#firstName + this.#lastName
  }

  get salary() {
    return this.#salary
  }

  set salary(newSalary) {
    this.#salary = newSalary
  }

  get annualSalary() {
    return this.#salary * 12
  }

  raiseSalary(percent) {
    this.#salary += this.#salary * (percent / 100)
  }

  returnEmployee() {
    const employee = `id: ${this.#id}, name: ${this.name}, salary: ${this.#salary}`
    return employee
  }
}

const employeeLeticia = new Employee(1, "Letícia", "Lara", 1000)
employeeLeticia.id
employeeLeticia.firstName
employeeLeticia.lastName
employeeLeticia.name
employeeLeticia.salary
employeeLeticia.salary = 2000
employeeLeticia.annualSalary
employeeLeticia.raiseSalary()
employeeLeticia.returnEmployee()