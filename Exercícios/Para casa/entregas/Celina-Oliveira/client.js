const { Bank } = require('./bank');

class Client {
  name;
  #cpf;
  banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
    this.banks = [];
  }

  get cpf() {
    return this.#cpf; 
}

  addBank(bank)  {
    if (this.banks.includes(bank)) {
        console.log(`O banco ${bank.bankName} já está associado a ${this.name}.`);
        return;
      }
    
    const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
    Bank.createdBanks[bankIndex].qtdClients++;
  }

  removeBank(bank) {
    const bankIndex = this.banks.indexOf(bank);
    if (bankIndex === -1) {
      console.log(`O banco ${bank.bankName} não está associado a ${this.name}.`);
      return;
    }
    this.banks.splice(bankIndex, 1); // testando
    bank.associateClient(); 
  }

}

module.exports = { Client }