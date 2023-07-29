class Account{
	id;
	name;
	balance; // saldo inicial

	constructor(id, name, balance){
		this.id=id;
		this.name=name;
		this.balance=balance;
	}

	credit(amount){ // valor
		this.balance = this.balance + amount;
		console.log(` O Saldo atual da conta é ${this.balance}`)

	}

	debit(amount){
    this.balance = this.balance - amount;
	console.log(` O Saldo atual da conta é ${this.balance}`)
	}

	transferTo(anotherAccount, amount) {
		if (!(anotherAccount instanceof Account)) { // se anotherAcount nao(!) é uma instancia de Account e com o return ele sai e segue pro if 
			console.log('Informe uma conta válida!');
			return;
		}

		if (this.balance < amount) {
			console.log(
				`Você não tem saldo suficiente para realizar essa operação. Seu saldo atual é de R$ ${this.balance}`
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

const contaDaMichele = new Account(321, "Michele Feitosa", 10000)
contaDaMichele.credit(7000)
contaDaMichele.debit(200)

const contaDaMaite = new Account(456, "Maitê Feitosa", 6000)
contaDaMichele.transferTo(contaDaMaite, 1000)

console.log(contaDaMaite);


