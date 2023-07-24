class Employee{
    id;
    name;
    salary;
        
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary
    }
    raiseSalary(percent){
        this.salary += (this.salary * (percent / 100))
        console.log(this.salary)
    }

}

const yela = new Employee(54, "Yela", 15000)
yela.raiseSalary(10)