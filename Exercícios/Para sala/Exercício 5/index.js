class Employee{
    #id;
    #firstName;
    #lastName
    #salary;
        
    constructor(id, firstName, lastName, salary){
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#salary = salary
    }

    get ID(){
        return this.#id;
    }
    get firstName(){
        return this.#firstName;
    }
    get lastName(){
        return this.#lastName;
    }
    get name(){
        return `${this.#firstName} ${this.#lastName}`;
    }
    get annualSalary(){
        return this.#salary * 12;
    }
    get salary(){
        return this.#salary;
    }
    set salary(newSalary){
        this.#salary = newSalary;
    }
    raiseSalary(percent){
        this.#salary += (this.#salary * (percent / 100));
    }
    returnEmployee(){
        const employee = `id: ${this.#id}, name: ${this.name}, salary: ${this.#salary}`;
        return employee;
    }
}

const employeeYela = new Employee(123, "Yela", "López", 50000)
console.log(employeeYela.salary)
console.log(employeeYela.annualSalary)
console.log(employeeYela.returnEmployee())