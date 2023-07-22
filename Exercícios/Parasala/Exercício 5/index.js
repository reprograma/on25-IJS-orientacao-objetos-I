class Employee{
    #id
    #firstName
    #secondName
    #salary
    
    constructor(id, firstName, secondName, salary){
        this.#id = id
        this.#firstName = firstName
        this.#secondName = secondName
        this.#salary = salary
    }

    get id() {
        return this.#id
    } 

    get firstName() {
        return this.#firstName
    }

    get secondName() {
        return this.#secondName
    }

    get name(){
        return `${this.#firstName} ${this.#secondName}`
    }

    get salary() {
       return this.#salary
    }

    set salary(newSalary) {
        this.#salary = newSalary // não precisa retornar nada pq estamos setando um valor
    }

    get annualSalary(){
        return this.#salary * 12
    }

    raiseSalary(percent) {
        const raise = (this.#salary * percent)/100 
        this.#salary += raise
        console.log(`O novo salário é de ${this.#salary}`)
    }

    showEmployee() {
        const employee = `id: ${this.#id}, name: ${this.#firstName} ${this.#secondName}, salary ${this.#salary}` // podia usar o this.name no lugar do first e second
        return employee
    }
}

const employee1 = new Employee(1, "Brena", "O'Dwyer", 3000)
console.log(employee1) // retorna "Employee {}"" porque todos os atributos são privados
console.log(employee1.id) // 1
console.log(employee1.firstName) // Brena
console.log(employee1.secondName) // O'Dwyer
console.log(employee1.name) // Brena O'Dwyer
console.log(employee1.salary) // 3000 -> aqui é get salary 
employee1.salary = 4000 // aqui estamos usando o set salary porque estamos passando um valor
console.log(employee1.salary) // 4000 -> aqui é o get salary 
console.log(employee1.annualSalary) // 48000
console.log(employee1.showEmployee()) // id: 1, name: Brena O'Dwyer, salary 4000 -> esse é um método, visto como método e não como get então precisa do ()//