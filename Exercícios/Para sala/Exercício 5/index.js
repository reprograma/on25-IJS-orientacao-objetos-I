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
        return `${this.firstName}` `${this.#lastName}`
    }

    get salary() {
        return this.#salary
    }

    set salary(newSalary) {
        this.#salary = newSalary
    }

    get annualSalary() {
        return this.#salary * 12;
    }

    raiseSalary(percent) {
        this.#salary += this.#salary * (percent / 100);
    }

    toString(){
        const employee = ``
    }
}

const employee1 = new Employee(123, "carol", 15000)
console.log(employee1)
raiseSalary(10)
console(employee1)
