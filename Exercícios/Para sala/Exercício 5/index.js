class Employee {
    #id;
    #firstName;
    #lastName;
    #salary;

    constructor(id, firstName, lastName, salary){
        this.#id = id,
        this.#firstName = firstName,
        this.#lastName = lastName,
        this.#salary = salary
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
        let fullName = `${this.#firstName} ${this.#lastName}`;
        return fullName;
    }

    get salary(){
        return this.#salary;
    }

    set salary(newSalary){
        this.#salary = newSalary;
    }

    get annualSalary(){
        return this.#salary * 12;
    }

    raiseSalary(percent){
        this.#salary += this.#salary * (percent/100);
        return this.#salary;
    }

    returnEmployee(){
        const employeeString = `Employee[id = ${this.#id}, name: ${this.#firstName} ${this.#lastName}, salary: ${this.#salary}`;
        return employeeString;
    }
}

const funcionario1 = new Employee(1, "Daphne", "Blake", 4500);
funcionario1.salary = 5000;
funcionario1.returnEmployee();

const funcionario2 = new Employee(2, "Velma", "Dinkley", 5500);
funcionario2.raiseSalary(20);
funcionario2.salary;
console.log(funcionario2) //retorna um objeto Employee vazio devido ao encapsulamento
