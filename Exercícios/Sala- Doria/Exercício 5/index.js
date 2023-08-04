class Employee {
    #id;
    #firstName;
    #lastName;
    #salary;

    constructor(id, firstName, lastName, salary) {
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName
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
        return console.log(`Seu nome é ${this.#firstName} ${this.#lastName}`);
    }
    get salary() {
        return this.#salary;
    }
    set salary(salary) {
        this.#salary = salary;
    }
    get annualSalary() {
        return this.#salary * 12;
    }
    raiseSalary(percent) {
        this.#salary += (this.#salary * (percent / 100));
        console.log(`O salário de ${this.#firstName}, teve um aumento e agora é de R$ ${this.#salary}`)
    }
    returnEmployee() {
        const employee = `id: ${this.#id}, name: ${this.#firstName} ${this.#lastName}, salary: R$${this.#salary}`
        return employee;
    }

}

const teste = new Employee(123, "Dória", "Fernandes", 20000)


teste.raiseSalary(5)

console.log(teste.id)
console.log(teste.firstName)
console.log(teste.lastName)
console.log(teste.name)
console.log(teste.salary)