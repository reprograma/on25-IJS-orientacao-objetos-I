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
        this.salary =+ this.salary * (percent/100);
        console.log(`Seu novo salário é de: R$${this.salary}`);
    }
}

let pessoa = new Employee (1, "Hugo", 5000);
pessoa.raiseSalary(50);