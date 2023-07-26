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
    if (bank instanceof Bank) {
      if (this.banks.includes(bank)) {
        return "Você ja em conta nesse Banco.";
      } else {
        this.banks.push(bank);

        bank.addCustomer();
      }
    } else {
      return "O parâmetro deve ser um objeto da classe Bank.";
    }
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      if (this.banks.includes(bank)) {
        this.banks = this.banks.filter((b) => b != bank);

        bank.removeCustomer();
      } else {
        return "Você não tem uma conta nesse Banco.";
      }
    } else {
      return "O parâmetro deve ser um objeto da classe Bank.";
    }
  }
}

module.exports = { Client }


