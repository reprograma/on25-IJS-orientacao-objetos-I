const { Bank } = require('./Bank');

class Client {
  name;
  banks = [];

  constructor(name) {
    this.name = name;
  }

  addBank(bank) {
    // fazer as verificações
    
    const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
    Bank.createdBanks[bankIndex].qtdClients++;
  }
}
