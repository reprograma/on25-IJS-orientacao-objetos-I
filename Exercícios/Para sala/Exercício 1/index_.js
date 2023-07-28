class Employee{
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    } 
    raiseSalary(percent){
        this.salary += (percent*this.salary)/100;
    } 
}
let funcionario = new Employee(1, "João", 1000);
console.log(funcionario);
funcionario.raiseSalary(10);
console.log(funcionario.salary);