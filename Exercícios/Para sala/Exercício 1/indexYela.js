<<<<<<< HEAD
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
=======
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
  }
}

const employee1 = new Employee(123, 'Luara', 15000);
console.log(employee1)
employee1.raiseSalary(10)
console.log(employee1.salary)
>>>>>>> 39481e8595a151f0eda99e9654b797c7bfc3b57a
