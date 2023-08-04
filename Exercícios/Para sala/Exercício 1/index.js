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
      this.salary += (this.salary * (percent/100))
      // this.salary = this.salary + (this.salary * (percent/100)) 
    }
}

const employee1 = new Employee(4597, 'Ciane', 15000);
console.log(employee1) 
employee1.raiseSalary(10) 
console.log(`O salário reajustado é: ${employee1.salary}`)


