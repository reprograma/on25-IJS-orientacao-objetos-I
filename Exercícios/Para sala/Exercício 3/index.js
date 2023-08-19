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
    console.log(`O saldo atualizado é de R$ ${this.#balance}`);
  }
  debit(amount) {
    this.#balance -= amount;
    console.log(`O saldo atualizado é de R$ ${this.balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof Account)) {
      console.log("Informe uma conta válida");
      return;
    }

    if (this.#balance < amount) {
      console.log("Você não tem saldo suficiente p/realizar essa operação");
      return;
    }

    this.debit(amount);
    anotherAccount.credit(amount);
    console.log(
      `Tranferencia realizada com sucesso! Seu saldo atual é de R$ ${this.balance}`
    );
  }
}

const accountBru = new Account(1, "Bru", 200);
accountBru.credit(500);

const accountCamila = new Account(2, "Bru", 100);
