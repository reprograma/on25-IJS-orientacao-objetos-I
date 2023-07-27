class Account {
	id;
	name;
	#balance;

	constructor(id, name, balance) {
		this.id = id;
		this.name = name;
		this.#balance = balance;
	}

	credit(amount) {
		this.#balance += amount;
		// console.log(`O saldo atualizado é de R$ ${this.#balance}`);
	}

	debit(amount) {
		this.#balance -= amount;
		// console.log(`O saldo atualizado é de R$ ${this.#balance}`);
	}

	transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof Account)) {
			console.log('Informe uma conta válida!');
			return;
		}

		if (this.#balance < amount) {
			console.log(
				`Você não tem saldo suficiente para realizar essa operação. Seu saldo atual é de R$ ${this.#balance}`
			);
			return;
		}

		this.debit(amount);
		anotherAccount.credit(amount);
		console.log(
			`Transferência realizada com sucesso! O seu saldo atual é de R$ ${this.balance} e o saldo da conta destino é de R$ ${anotherAccount.balance}`
		);
	}
}

const contaDaLuara = new Account(123, 'Luara', 10000);
contaDaLuara.credit(5000);
contaDaLuara.debit(300);

const contaDaAle = new Account(456, 'Ale', 50000);
contaDaLuara.transferTo(contaDaAle, 1000);

console.log(contaDaLuara)
console.log(contaDaAle)