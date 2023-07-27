const { Bank } = require("./Bank");
const { Client } = require("./Client");

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;
    constructor(client, bank, accountNumber, agencyNumber) {
      this.client = client;
      this.bank = bank;
      this.accountNumber = accountNumber;
      this.agencyNumber = agencyNumber;
      this.#balance = 0;

      if (!(client instanceof Client)) {
        return console.log("O parâmetro client deve ser uma instância do tipo Client");
      }
      if (!(bank instanceof Bank)) {
        return console.log("O parâmetro bank deve ser uma instância do tipo Bank");
      }
      if (!client.banks.includes(bank)) {
        return console.log(`${client.name} não é cliente do banco`);
      }
    }

    get balance() {
      return this.#balance;
    }

    credit(amount){
      this.#balance +=amount
      console.log(`Operação de crédito realizada. Saldo atual: R$${this.#balance},00`)
    }

    debit(amount) {
      this.#balance -=amount
      console.log(`Operação de débito realizada. Saldo atual: R$${this.#balance},00`)
    }

    transferTo(anotherAccount, amount) {
      if(!(anotherAccount instanceof BankAccount)) {
        console.log(`Erro - Conta inválida.`)
      }   if (amount > this.balance) {
        console.log(`Sado insuficiente para realizar transação. Saldo disponível: R$ ${this.balance},00`);
      } else {
      this.debit(amount);
      anotherAccount.#balance += amount;
      console.log(`A sua transferência no valor de R$ ${amount},00 realizada.`);
      }
    }

    closeAccount() {
      if (this.#balance === 0) {
        console.log(`O seu saldo é de ${this.#balance}. Conta encerrada com sucesso.`);
      } else {
        console.log(`Não foi possível encerrar a conta. A conta possui o saldo de R$${this.#balance},00`);
      }
    }
}

module.exports = { BankAccount };