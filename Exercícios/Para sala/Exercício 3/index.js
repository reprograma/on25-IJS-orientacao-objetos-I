class Account {
  id;
  name;
  balance;
  anotherAccount;

  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  credit(amount) {
    this.balance = this.balance + amount;
  }

  debit(amount) {
    this.balance = this.balance - amount;
  }
  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof Account)) {
      console.log("Informe uma conta válida");
      return;
    }
    if (this.balance < amount) {
      console.log(
        `Você não possui saldo suficiente para realizar esta operação. Seu saldo atual é de ${this.balance}`
      );
      return;
    }
  }
}

contaDaAle = new Account(123, "Ale", 5000);

conta = new Account(1, "Joana", 3000);
conta.credit(500);
conta.debit(800);
console.log(conta);
conta.transferTo(contaDaAle, 1000);
//anotherAccount.credit(amount);
