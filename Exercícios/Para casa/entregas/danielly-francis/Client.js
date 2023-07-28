const { Bank } = require('./Bank');

class Client {
  name;
  #cpf;
  banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.constructor.cpf = cpf;
  }

  addBank(bank) {
    // verificacoes
    const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
    Bank.createdBanks[bankIndex].qtyClients++;
  }
  remove(bank) {

    const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
    Bank.createdBanks[bankIndex].qtyClients--;
  }
}