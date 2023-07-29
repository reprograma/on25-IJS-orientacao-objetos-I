const { Bank } = require("./Bank");
const { Client } = require("./Client");

class BankAccount {
  accountNumber;
  agencyNumber;
  #balance = 0;
  client;
  bank;

  constructor(client, bank, accountNumber, agencyNumber) {
    this.client = client instanceof Client;
    this.bank = bank instanceof Bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.#balance = 0;
  }

  get balance() {
    return this.#balance;
  }

  credit(amount) {
    this.#balance += amount;
    console.log(`Crédito. Saldo atual R$ ${this.balance}`);
  }

  debit(amount) {
    this.#balance -= amount;
    console.log(`Débito. Saldo atual R$ ${this.balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log(`Algo deu errado. Conta inválida`);
      return;
    }

    if(this.bank.bankCode !== anotherAccount.bank.bankCode){
      amount += amount * (this.bank.transferTax * 100)
      console.log(`Taxa transação bancaria taxado `)
    }

    if (this.#balance >= amount) {
      this.debit(amount);
      anotherAccount.credit(amount);
      console.log(`Saldo atual da conta de origem é R$${this.#balance}`);
      console.log(
        `Saldo atual da conta de destino é R$${anotherAccount.#balance}`
      );
    } else {
      console.log(`Saldo negativo de R$${this.balance}`);
    }
  }

  closeAccount() {
    if (this.#balance === 0 || this.#balance <= 0) {
      console.log(`Fechamento de conta concluída`);
    } else {
      console.log(
        `Saldo de R$${this.balance}. O saldo deve ser zerado antes encerramento da conta.`
      );
    }
  }
}

module.exports = { BankAccount };
