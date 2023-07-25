class Employee {
    #id;
    #firstName;
    #lastName;
    #salary;

    constructor(id, firstName, lastName, salary){
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#salary = salary;
    }

    get id(){
        return this.#id;
    }
    get firstName(){
        return this.#firstName;
    }
    get lastName(){
        return this.#lastName;
    }
    get name(){
        return `${this.firstName} ${this.#lastName}` 
    }
    get salary(){
        return this.#salary
    }
    set salary(newSalary){
        this.#salary = newSalary;
    }
    get annualSalary(){
        return this.#salary * 12;
    }


    raiseSalary(percent){
        this.#salary += (this.#salary * (percent/100))
    }
    returnEmployee(){
        const employee = `id: ${this.#id}, name: ${this.#firstName} ${this.lastName}, salary: ${this.#salary}`;
        return employee;
    }
}

const employee1 = new Employee(1, "nicole", "fagundes", 2.400)
console.log(employee1)
console.log(employee1.id)
console.log(employee1.firstName)
console.log(employee1.lastName)
console.log(employee1.name)
console.log(employee1.salary)