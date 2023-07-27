class Employee {
    #id
    #firstName
    #lastName
    #salary
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
        return `${this.#firstName} ${this.#lastName}`
    }

    get salary() {
        return this.#salary
    }

    set salary(newSalary) {
        this.#salary = newSalary
    }

    get annualSalary() {
        return this.#salary * 12
    }

    
    raiseSalary(percent) {
        this.#salary = this.#salary + (this.#salary * (percent/100))
        console.log(`O novo salário é de ${this.#salary}`)
    }

    returnEmployee(){
        const employee = `id: ${this.#id}, name: ${this.#firstName} ${this.#lastName}, salary: ${this.#salary}`
        return employee
    }
}

const employeeLuara = new Employee(123, "Luara", "Rangel", 20000)
console.log(employeeLuara) // Employee {} - pq todos os atributos são privados
console.log(employeeLuara.id) // conseguimos ver isso pq tá chamando o get e não o #id na verdade
console.log(employeeLuara.firstName)
console.log(employeeLuara.lastName)
console.log(employeeLuara.name)
console.log(employeeLuara.salary)
console.log(employeeLuara.annualSalary)

// a questão desse privado é só pra exemplificar que é possível mostrar com o get, pq podemos colocar condições para ele aparecer (como ser administrador)
employeeLuara.salary = 2500 //set
console.log(employeeLuara.returnEmployee())
//para não conseguir acessar, basta tirar o get e set