class Employee {
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    raiseSalary(percent){
        this.salary += (this.salary * (percent/100))
        return this.salary
    }
}

let employee1 = new Employee(3, "nicole", 2.400)
employee1.raiseSalary(0.3)
console.log(employee1)