const { Bank } = require('./Bank');

class Client {
  constructor(name, cpf) {
    this.name = name;
    this._cpf = cpf;
    this.banks = [];
  }

  get cpf() {
    return this._cpf;
  }

  addBank(bank) {
    if (!this.banks.includes(bank)) {
      this.banks.push(bank);
      const bankIndex = Bank.createdBanks.findIndex((b) => b.bankCode === bank.bankCode);
      Bank.createdBanks[bankIndex].qtdClients++;
      console.log(`Banco ${bank.bankCode} adicionado à cliente ${this.name}`);
    } else {
      console.log(`Cliente ${this.name} já possui esse banco associado.`);
    }
  }

  removeBank(bank) {
    if (this.banks.includes(bank)) {
      this.banks = this.banks.filter((existingBank) => existingBank !== bank);
      const bankIndex = Bank.createdBanks.findIndex((b) => b.bankCode === bank.bankCode);
      Bank.createdBanks[bankIndex].qtdClients--;
      console.log(`Banco ${bank.bankCode} removido da cliente ${this.name}`);
    } else {
      console.log(`Cliente ${this.name} não possui esse banco associado.`);
    }
  }
}

module.exports = { Client };
