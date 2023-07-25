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
    console.log(`Seu id: ${this.#id}`)
    return this.#id;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get name() {
    const name = `Nome do colaborador: ${this.#firstName} ${this.#lastName}`;
    return name;
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    console.log(`Novo salário: ${this.#salary} `)
    this.#salary = newSalary;
  }

  get annualSalary() {
    return this.#salary * 12;
   
  }

  raiseSalary(percent) {
    const raise =this.#salary += (this.#salary * percent) / 100;
    console.log(`Aumento de salario em R$ ${raise},00`)
  }

  info() {
    const employee = `id: ${this.#id} name: ${this.#firstName} ${
      this.#lastName
    } salary: ${this.#salary} `;
    return employee;
  }
}

const employee1 = new Employee(1, "Mari", "Inoue", 15);

console.log(employee1);
console.log(employee1.id);
console.log(employee1.name);
console.log(employee1.salary);
console.log(employee1.annualSalary);
// employee1.newSalary = 500000;
console.log(employee1.salary)
employee1.raiseSalary(0.5)
console.log(employee1.salary)
console.log(employee1.employee)