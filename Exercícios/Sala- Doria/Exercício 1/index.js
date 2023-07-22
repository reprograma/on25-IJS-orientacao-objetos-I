class Employee {
    id;
    name;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;

    }
    raiseSalary(percent) {
        this.salary += (this.salary * (percent / 100));
        console.log(`O salário de ${this.name}, teve um aumento e agora é de R$ ${this.salary}`)
    }
}

const employee1 = new Employee(456, "Gaia", 30000);
console.log(employee1)

employee1.raiseSalary(25)
