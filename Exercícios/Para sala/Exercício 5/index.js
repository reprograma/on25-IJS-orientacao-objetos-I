class Employee{
    #id;
    #firstName;
    #lastName;
    #salary;

    constructor(id, firstName, lastName, salary){
        this.#id = id,
        this.#firstName = firstName,
        this.#lastName = lastName;
        this.#salary = salary
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
        return this.#firstName + " " + this.#lastName;
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSalary) { // nao precisa retornar nada
        this.#salary = newSalary;
    }

    get annualSalary() {
        return this.#salary * 12
    }

    raiseSalary(percent){
        this.#salary += this.#salary * (percent/100);
        console.log(`Seu novo salário é de: R$${this.#salary}`);
    }

    returnEmployee() {
        const employee = `id:${this.#id}, name:${this.name}, salary:${this.#salary}`
        return employee
    }
}

const employeeErica = new Employee(123, "Erica", "Souza",10000);

console.log(employeeErica.salary)
console.log(employeeErica.annualSalary)
console.log(employeeErica.returnEmployee())
