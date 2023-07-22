class Employee {
    id;
    name;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    raiseSalary = (percent) => {
        this.salary += (this.salary * (percent / 100))
}

}

const employee1 = new Employee (2, 'Deborah', 1000);
console.log(employee1)

employee1.raiseSalary(20);
console.log(employee1.salary);