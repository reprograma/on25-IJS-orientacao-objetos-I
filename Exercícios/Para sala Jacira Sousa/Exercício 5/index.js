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

    get annualSalary() {
       return this.#salary * 12;
    }

    rayseSalary(percent) {
        this.#salary += this.#salary * (percent / 100); // chamando o atributo pois estou dentro da classe
        console.log(`O novo salário de ${this.name} é de R$ ${this.#salary}`);
    }

    returnEmployee() {
        const employee = `id: ${this.#id}, name: ${this.name}, salary: ${this.#salary}`;  // dentro da classe não precisa por o new
        return employee;
    }
}

const employee = new Employee(123, "Fulana", "De Tal", 20000);

console.log(employee);

console.log("id:", employee.id);

console.log("firstName:", employee.firstName);

console.log("lastName:", employee.lastName);

console.log("name:", employee.name);

console.log("salary:", employee.salary);

console.log("annualSalary:", employee.annualSalary); 

employee.salary = 20000;
console.log("salary:", employee.salary);

employee.rayseSalary(20);
console.log("salary:", employee.raiseSalary);


console.log("Employee:", employee.toString());