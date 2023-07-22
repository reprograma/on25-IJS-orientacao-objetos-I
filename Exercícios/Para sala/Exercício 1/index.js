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
}
}

const employee1 = new Employee(123, 'Celina', 13000);
console.log(employee1);
employee1.raiseSalary(10)
console.log(employee1.salary);