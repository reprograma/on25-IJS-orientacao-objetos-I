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
    console.log(`Seu saldo atual é: ${this.balance}`);
  }
  debit(amount) {
    this.balance -= amount;
    console.log(`Seu saldo atual é: ${this.balance}`);
  }
  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof Account)) {
      console.log("Informe uma conta valida");
      return { error: "conta não encontrada" };
    }

    if (amount > this.balance) {
      console.log(`\nsua conta nao tem saldo suficiente`);
      return { error: "sem saldo" };
    }

    this.debit(amount);
    anotherAccount.credit(amount);
  }
}

const isa = new Account(1, "Isa", 1500);
const ellie = new Account(2, "Ellie", 1000);
// console.log(isa);
// console.log(ellie);

isa.transferTo(ellie, 500);
isa.transferTo(ellie, 20000);
isa.transferTo(jack, 500);

console.log(isa);
console.log(ellie);
