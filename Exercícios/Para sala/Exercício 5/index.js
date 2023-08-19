class Employee {
  #id;
  #firstName;
  #lastName;
  #salary;

  constructor(id, lastName, firstName, salary) {
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

  get anualSalary() {
    return this.#salary * 12;
  }

  raiseSalary(percent) {
    this.salary += this.salary * (percent / 100);
    console.log(`O novo salario é de ${this.#salary}`);
  }

  returnEmployee() {
    const employee = `id: ${this.#id}, name: ${this.name}, salary: ${
      this.salary
    }`;
    return employee;
  }
}

const employeeLuara = new Employee(123, "Luara", "Rangel", 20000);
console.log(employeeLuara);
console.log(employeeLuara.id);
console.log(employeeLuara.name);
console.log(employeeLuara.firstName);
console.log(employeeLuara.lastName);
console.log(employeeLuara.salary);
console.log(employeeLuara.anualSalary);
