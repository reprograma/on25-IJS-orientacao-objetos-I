class Employee {
    constructor(id, name, salary) {
        this.id = id
        this.name = name
        this.salary = salary
    }

    raiseSalary(percent) {
        this.salary = this.salary + (this.salary * (percent/100))
        return this.salary
    }
}

const jose = new Employee(123, "José", 3000)
console.log(jose)
jose.raiseSalary(10)

