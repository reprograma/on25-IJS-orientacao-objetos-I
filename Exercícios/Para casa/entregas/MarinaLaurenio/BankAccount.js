const { Bank } = require("./Bank");
const { Client } = require("./Client");

class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance;
  constructor(client, bank, accountNumber, agencyNumber) {
    if (!(client instanceof Client)) {
      return console.log(
        "O parâmetro client deve ser uma instância do tipo Client"
      );
    }
    if (!(bank instanceof Bank)) {
      return console.log(
        "O parâmetro bank deve ser uma instância do tipo Bank"
      );
    }
    if (!client.banks.includes(bank)) {
      return console.log(`${client.name} não é cliente desse banco`);
    }
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.#balance = 0;
  }
  get balance() {
    return this.#balance;
  }
  credit(amount) {
    this.#balance += amount;
    console.log(`Operação realizada, o saldo é de: R$ ${this.#balance},00.`);
  }
  debit(amount) {
    this.#balance -= amount;
    console.log(`Operação realizada, seu saldo é de: R$ ${this.#balance},00.`);
  }
  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      return;
    }
    if (this.bank !== anotherAccount.bank) {
      amount += amount * this.bank.transferTax;
    }
    if (amount > this.balance) {
      console.log(
        `O valor de transferencia deve ser menor que o saldo da conta. Saldo disponível: R$ ${this.balance},00`
      );
    }
    this.debit(amount);
    anotherAccount.#balance += amount;
    console.log(`Transferência de R$ ${amount},00 realizada.`);
  }
  closeAccount() {
    if (this.#balance === 0) {
      console.log("Conta encerrada!");
      Object.keys(this).forEach((key) => (this[key] = undefined));
    } else {
      console.log("Não é possível encerrar a conta. A conta possui saldo.");
    }
  }
}

module.exports = { BankAccount };
