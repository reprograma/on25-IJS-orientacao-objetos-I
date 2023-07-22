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
    console.log(`Saldo atual R$ ${this.balance}`);
  }

  debit(amount) {
    this.balance -= amount;
    console.log(`Saldo atual R$ ${this.balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof Account)) {
      console.log(`Conta inválida`);
      return;
    }

    if (this.balance < amount) {
      console.log(`Saldo insuficiente ${this.balance}`);
      return;
    }

    //    this.balance -=amount;
    this.debit(amount);
    anotherAccount.credit(amount)
    console.log(`Transfer ${this.balance}`)
  }
}

const account1 = new Account(1, "Babi", 10000);

const account4 = new Account(4, "Yoko", 5000);

account1.credit(6000);

account1.debit(800);

account1.transferTo(account4, 100);

console.log(account1);

console.log(account4);
