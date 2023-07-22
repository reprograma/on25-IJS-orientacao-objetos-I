class Employee{
    id
    name
    salary
    

    constructor(id, name, salary){
        this.id = id
        this.name = name
        this.salary = salary
    }

    raiseSalary(percent) {
        const raise = (this.salary * percent)/100 // fiz uma constante que se chama aumento, recebe o salário, multiplica pela % e divide por 100
        this.salary += raise // o novo salário vai ser o salário + ele mesmo somado ao aumento, igual embaixo:
        // this.salary = this.salary + raise
    }
}

const employee1 = new Employee(1, "Brena", 3000)
employee1.raiseSalary(25)
console.log(employee1.salary)