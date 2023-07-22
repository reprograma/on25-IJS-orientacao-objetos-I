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

    get name() {
        return `${this.#firstName} ${this.#lastName}`
    }

    get lastName() {
         return this.#lastName; 
    }

    get salary() {
        return this.#salary;
    }

    set salary(newsalary) {
        this.#salary = newsalary
    }

    get annualSalary() {
        return this.#salary * 12;
    }

    raiseSalary(percent) {
        this.#salary += this.#salary * percent;
    }

    returnEmployee() {
        const employee = `id ${this.#id}, name ${this.#firstName}, salary ${this.#lastName}`;
        return employee;
    }
}

const employeeCelina = new Employee(123, 'Celina' , 'Olivera', 15000);
console.log(employeeCelina);
