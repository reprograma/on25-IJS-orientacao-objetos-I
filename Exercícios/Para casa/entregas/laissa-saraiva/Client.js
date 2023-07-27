const { Bank } = require("./Bank");
// const{BankAccount} = require('./BankAccount')
class Client {
  name;
  #cpf;
  banks;

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
    this.banks = [];
  }

  get cpf() {
    return this.#cpf;
  }

  addBank(bank) {
    if (!(bank instanceof Bank)) {
      return `Insira um Banco válido.`;
    } else {
      if (!this.banks.includes(bank)) {
        this.banks.push(bank);

        const bankIndex = Bank.createdBanks.findIndex(
          (element) => element.bankCode == bank.bankCode
        );
        Bank.createdBanks[bankIndex].qtdClients++;

        return console.log("O banco foi adicionado.");
      } else {
        return `Banco já associado ao cliente!`;
      }
    }
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      return `Insira um Banco válido.`;
    } else {
      const bankIndex = this.banks.findIndex(
        (element) => element.bankCode === bank.bankCode
      );
      if (bankIndex !== -1) {
        this.banks.splice(bankIndex, 1);
        Bank.createdBanks[bankIndex].qtdClients--;
        return `O banco foi removido com sucesso.`;
      } else {
        return `O banco não está associado ao cliente.`;
      }
    }
  }
}

module.exports = { Client };
