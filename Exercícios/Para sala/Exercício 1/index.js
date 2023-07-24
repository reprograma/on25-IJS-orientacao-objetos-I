class Employee{
    id;
    name;
    salary;

    constructor(id, name, salary){
        this.id = id,
        this.name = name,
        this.salary = salary
    }

    raiseSalary(percent){
        this.salary = this.salary + (this.salary * (percent/100));
        console.log(`Parabéns, você foi promovido! Seu novo salário é de: R$${this.salary}`);
    }
}

let suzana = new Employee(1, "Suzana", 5000);
suzana.raiseSalary(50);