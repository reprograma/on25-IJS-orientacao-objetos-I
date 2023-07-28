class Employee {
	#id;
	#firstName;
	#lastName;
	#salary;

	constructor(id, firstName, lastName, salary) {
		this.#id = id;
		this.#firstName = firstName;
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

	returnEmployee() {
		const employee = `id: ${this.#id}, name: ${this.name}, salary: ${
			this.#salary
		}`;
		return employee;
	}
}

const employee = new Employee(123, 'Deborah', 'Gomes', 5000);
console.log(employee);
console.log('id:', employee.id);
console.log('firstName:', employee.firstName);
console.log('lastName:', employee.lastName);
console.log('name:', employee.name);
console.log('salary:', employee.salary);
console.log('annualSalary:', employee.annualSalary);

employee.salary = 6000;
console.log('salary:', employee.salary);

employee.raiseSalary(20);
console.log('salary:', employee.salary);

console.log('Employee:', employee.toString());
