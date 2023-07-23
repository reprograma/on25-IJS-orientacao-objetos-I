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
    return this.#id
  }

  get firstName() {
    return this.#firstName
  }

  get lastName() {
    return this.#lastName
  }

  get name() {
    return `${this.#firstName} ${this.#lastName}`
  }

  get salary() {
    return this.#salary
  }

  set salary(newSalary) {
    this.#salary = newSalary
  }

  get annualSalary() {
    return this.#salary *12
  }


  raiseSalary(percent) {
    this.#salary += (this.#salary * (percent/100));
  }

  returnEmployee() {
    const employee = `id: ${this.#id}, name: ${this.name}, salary: ${this.#salary}`
    return employee;
  }
}

const laissa = new Employee(1, "Laíssa", "Saraiva", 1500);

console.log(laissa);
console.log(laissa.id);
console.log(laissa.firstName);
console.log(laissa.lastName);
console.log(laissa.name);
console.log(laissa.returnEmployee());