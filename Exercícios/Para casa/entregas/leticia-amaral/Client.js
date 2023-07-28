const Bank = require('./Bank')

class Client {
  name;
  #cpf;
  banks;

  constructor(name, cpf) {
    this.name = name
    this.#cpf = cpf
    this.banks = []
  }

  get cpf() {
    return this.#cpf
  }

  addBank(bank) {
    if(!(bank instanceof Bank)) return "Bank not registered"

    if(this.banks.includes(bank)) return "Bank already registered"

    this.banks.push(bank)
    
    const bankIndex = Bank.createdBanks.findIndex(obj => obj.bankCode === bank.bankCode)
    Bank.createdBanks[bankIndex].clients += 1
  }

  removeBank(bank) {
    if(!(bank instanceof Bank)) return "Bank not registered"

    if(!this.banks.includes(bank)) return "Bank is not registered"

    this.banks = this.banks.filter(obj => obj.bankCode !== bank.bankCode)

    const bankIndex = Bank.createdBanks.findIndex(obj => obj.bankCode === bank.bankCode)
    Bank.createdBanks[bankIndex].clients -= 1
  }
}

module.exports = Client;