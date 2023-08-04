class Employee {
    #id;
    #firstName;
    #lastName;
    #salary;

    constructor(id, fisrtName, lastName, salary) {
        this.#id = id;
        this.#firstName = fisrtName;
        this.#lastName = lastName;
        this.#salary = salary;
    }

    get id() {
        return this.#id;
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get name() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSalary) {
        this.#salary = newSalary;
    }

    get annualSalary() {
        return this.#salary * 12;
    }
 
    raiseSalary(percent) {
      this.#salary += this.#salary * (percent / 100); 
      console.log(`O novo salário é de ${this.#salary}`);     
    }

    returnEmplyee() {
        const employee = `id: ${this.#id}, name: ${this.name}, salary: ${this.#salary}`;
        return employee; 
    }    
}

const employeeCiane = new Employee(458, 'Ciane', 'Pereira', 18000);
/////console.log(employeeCiane) // vazio porque atributos são privados 
//console.log(employeeCiane.id) 
////console.log(employeeCiane.fisrtName) 
//console.log(employeeCiane.lastName) 
//console.log(employeeCiane.name) 
////console.log(employeeCiane.salary) 
//console.log(employeeCiane.annualSalary) 
//console.log(employeeCiane.returnEmplyee())//chamo como método

//imprimir salario usa metodo get salary()
console.log(employeeCiane.salary)
//alterar sálario usa metodo set salary(newSalary) é tratado como propriedade
employeeCiane.salary = 22000
// imprimir salario apos alteração usa metodo get salary()
console.log(employeeCiane.salary)