class Account {
  id;
  name;
  balance;

  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  credit(amount) {
    this.balance += amount;
    console.log(`o Saldo é ${this.balance}`);
  }

  debit(amount) {
    this.balance -= amount;
    console.log(`o Saldo é ${this.balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof Account)) {
      //validar conta
      console.log("informe uma conta válida");
      return;
    }
    if (this.balance < amount) {
      //validar saldo na conta
      console.log(`saldo insuficiente, saldo atual é ${this.balance}`);
      return;
    }

    this.debit(amount); // debita da conta
    anotherAccount.credit(amount); //credita na outra
    console.log(
      `tranferencia com sucesso, saldo é ${this.balance} e o saldo do destino é ${anotherAccount.balance}`
    );

  }
}

const contaElvira = new Account(1, "Elvira", 10);
contaElvira.credit(10);
contaElvira.debit(5);

const contaAle = new Account(2, "Alê", 50);
contaElvira.transferTo(contaAle, 1);

